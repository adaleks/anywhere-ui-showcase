import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-47705e4b.js';
import { c as createCommonjsModule } from './_commonjsHelpers-8fe71198.js';
import { b as getRows, u as uuid, s as scrollStop } from './utils-ef441e77.js';

var clusterize = createCommonjsModule(function (module) {
/* Clusterize.js - v0.18.1 - 2018-01-02
 http://NeXTs.github.com/Clusterize.js/
 Copyright (c) 2015 Denis Lukov; Licensed GPLv3 */

;(function(name, definition) {
    if ('object' != 'undefined') module.exports = definition();
    else if (typeof undefined == 'function' && typeof undefined.amd == 'object') undefined(definition);
    else this[name] = definition();
}('Clusterize', function() {
  "use strict";

  // detect ie9 and lower
  // https://gist.github.com/padolsey/527683#comment-786682
  var ie = (function(){
    for( var v = 3,
             el = document.createElement('b'),
             all = el.all || [];
         el.innerHTML = '<!--[if gt IE ' + (++v) + ']><i><![endif]-->',
         all[0];
       ){}
    return v > 4 ? v : document.documentMode;
  }()),
  is_mac = navigator.platform.toLowerCase().indexOf('mac') + 1;
  var Clusterize = function(data) {
    if( ! (this instanceof Clusterize))
      return new Clusterize(data);
    var self = this;

    var defaults = {
      rows_in_block: 50,
      blocks_in_cluster: 4,
      tag: null,
      show_no_data_row: true,
      no_data_class: 'clusterize-no-data',
      no_data_text: 'No data',
      keep_parity: true,
      callbacks: {}
    };

    // public parameters
    self.options = {};
    var options = ['rows_in_block', 'blocks_in_cluster', 'show_no_data_row', 'no_data_class', 'no_data_text', 'keep_parity', 'tag', 'callbacks'];
    for(var i = 0, option; option = options[i]; i++) {
      self.options[option] = typeof data[option] != 'undefined' && data[option] != null
        ? data[option]
        : defaults[option];
    }

    var elems = ['scroll', 'content'];
    for(var i = 0, elem; elem = elems[i]; i++) {
      self[elem + '_elem'] = data[elem + 'Id']
        ? document.getElementById(data[elem + 'Id'])
        : data[elem + 'Elem'];
      if( ! self[elem + '_elem'])
        throw new Error("Error! Could not find " + elem + " element");
    }

    // tabindex forces the browser to keep focus on the scrolling list, fixes #11
    if( ! self.content_elem.hasAttribute('tabindex'))
      self.content_elem.setAttribute('tabindex', 0);

    // private parameters
    var rows = isArray(data.rows)
        ? data.rows
        : self.fetchMarkup(),
      cache = {},
      scroll_top = self.scroll_elem.scrollTop;

    // append initial data
    self.insertToDOM(rows, cache);

    // restore the scroll position
    self.scroll_elem.scrollTop = scroll_top;

    // adding scroll handler
    var last_cluster = false,
    scroll_debounce = 0,
    pointer_events_set = false,
    scrollEv = function() {
      // fixes scrolling issue on Mac #3
      if (is_mac) {
          if( ! pointer_events_set) self.content_elem.style.pointerEvents = 'none';
          pointer_events_set = true;
          clearTimeout(scroll_debounce);
          scroll_debounce = setTimeout(function () {
              self.content_elem.style.pointerEvents = 'auto';
              pointer_events_set = false;
          }, 50);
      }
      if (last_cluster != (last_cluster = self.getClusterNum()))
        self.insertToDOM(rows, cache);
      if (self.options.callbacks.scrollingProgress)
        self.options.callbacks.scrollingProgress(self.getScrollProgress());
    },
    resize_debounce = 0,
    resizeEv = function() {
      clearTimeout(resize_debounce);
      resize_debounce = setTimeout(self.refresh, 100);
    };
    on('scroll', self.scroll_elem, scrollEv);
    on('resize', window, resizeEv);

    // public methods
    self.destroy = function(clean) {
      off('scroll', self.scroll_elem, scrollEv);
      off('resize', window, resizeEv);
      self.html((clean ? self.generateEmptyRow() : rows).join(''));
    };
    self.refresh = function(force) {
      if(self.getRowsHeight(rows) || force) self.update(rows);
    };
    self.update = function(new_rows) {
      rows = isArray(new_rows)
        ? new_rows
        : [];
      var scroll_top = self.scroll_elem.scrollTop;
      // fixes #39
      if(rows.length * self.options.item_height < scroll_top) {
        self.scroll_elem.scrollTop = 0;
        last_cluster = 0;
      }
      self.insertToDOM(rows, cache);
      self.scroll_elem.scrollTop = scroll_top;
    };
    self.clear = function() {
      self.update([]);
    };
    self.getRowsAmount = function() {
      return rows.length;
    };
    self.getScrollProgress = function() {
      return this.options.scroll_top / (rows.length * this.options.item_height) * 100 || 0;
    };

    var add = function(where, _new_rows) {
      var new_rows = isArray(_new_rows)
        ? _new_rows
        : [];
      if( ! new_rows.length) return;
      rows = where == 'append'
        ? rows.concat(new_rows)
        : new_rows.concat(rows);
      self.insertToDOM(rows, cache);
    };
    self.append = function(rows) {
      add('append', rows);
    };
    self.prepend = function(rows) {
      add('prepend', rows);
    };
  };

  Clusterize.prototype = {
    constructor: Clusterize,
    // fetch existing markup
    fetchMarkup: function() {
      var rows = [], rows_nodes = this.getChildNodes(this.content_elem);
      while (rows_nodes.length) {
        rows.push(rows_nodes.shift().outerHTML);
      }
      return rows;
    },
    // get tag name, content tag name, tag height, calc cluster height
    exploreEnvironment: function(rows, cache) {
      var opts = this.options;
      opts.content_tag = this.content_elem.tagName.toLowerCase();
      if( ! rows.length) return;
      if(ie && ie <= 9 && ! opts.tag) opts.tag = rows[0].match(/<([^>\s/]*)/)[1].toLowerCase();
      if(this.content_elem.children.length <= 1) cache.data = this.html(rows[0] + rows[0] + rows[0]);
      if( ! opts.tag) opts.tag = this.content_elem.children[0].tagName.toLowerCase();
      this.getRowsHeight(rows);
    },
    getRowsHeight: function(rows) {
      var opts = this.options,
        prev_item_height = opts.item_height;
      opts.cluster_height = 0;
      if( ! rows.length) return;
      var nodes = this.content_elem.children;
      if( ! nodes.length) return;
      var node = nodes[Math.floor(nodes.length / 2)];
      opts.item_height = node.offsetHeight;
      // consider table's border-spacing
      if(opts.tag == 'tr' && getStyle('borderCollapse', this.content_elem) != 'collapse')
        opts.item_height += parseInt(getStyle('borderSpacing', this.content_elem), 10) || 0;
      // consider margins (and margins collapsing)
      if(opts.tag != 'tr') {
        var marginTop = parseInt(getStyle('marginTop', node), 10) || 0;
        var marginBottom = parseInt(getStyle('marginBottom', node), 10) || 0;
        opts.item_height += Math.max(marginTop, marginBottom);
      }
      opts.block_height = opts.item_height * opts.rows_in_block;
      opts.rows_in_cluster = opts.blocks_in_cluster * opts.rows_in_block;
      opts.cluster_height = opts.blocks_in_cluster * opts.block_height;
      return prev_item_height != opts.item_height;
    },
    // get current cluster number
    getClusterNum: function () {
      this.options.scroll_top = this.scroll_elem.scrollTop;
      return Math.floor(this.options.scroll_top / (this.options.cluster_height - this.options.block_height)) || 0;
    },
    // generate empty row if no data provided
    generateEmptyRow: function() {
      var opts = this.options;
      if( ! opts.tag || ! opts.show_no_data_row) return [];
      var empty_row = document.createElement(opts.tag),
        no_data_content = document.createTextNode(opts.no_data_text), td;
      empty_row.className = opts.no_data_class;
      if(opts.tag == 'tr') {
        td = document.createElement('td');
        // fixes #53
        td.colSpan = 100;
        td.appendChild(no_data_content);
      }
      empty_row.appendChild(td || no_data_content);
      return [empty_row.outerHTML];
    },
    // generate cluster for current scroll position
    generate: function (rows, cluster_num) {
      var opts = this.options,
        rows_len = rows.length;
      if (rows_len < opts.rows_in_block) {
        return {
          top_offset: 0,
          bottom_offset: 0,
          rows_above: 0,
          rows: rows_len ? rows : this.generateEmptyRow()
        }
      }
      var items_start = Math.max((opts.rows_in_cluster - opts.rows_in_block) * cluster_num, 0),
        items_end = items_start + opts.rows_in_cluster,
        top_offset = Math.max(items_start * opts.item_height, 0),
        bottom_offset = Math.max((rows_len - items_end) * opts.item_height, 0),
        this_cluster_rows = [],
        rows_above = items_start;
      if(top_offset < 1) {
        rows_above++;
      }
      for (var i = items_start; i < items_end; i++) {
        rows[i] && this_cluster_rows.push(rows[i]);
      }
      return {
        top_offset: top_offset,
        bottom_offset: bottom_offset,
        rows_above: rows_above,
        rows: this_cluster_rows
      }
    },
    renderExtraTag: function(class_name, height) {
      var tag = document.createElement(this.options.tag),
        clusterize_prefix = 'clusterize-';
      tag.className = [clusterize_prefix + 'extra-row', clusterize_prefix + class_name].join(' ');
      height && (tag.style.height = height + 'px');
      return tag.outerHTML;
    },
    // if necessary verify data changed and insert to DOM
    insertToDOM: function(rows, cache) {
      // explore row's height
      if( ! this.options.cluster_height) {
        this.exploreEnvironment(rows, cache);
      }
      var data = this.generate(rows, this.getClusterNum()),
        this_cluster_rows = data.rows.join(''),
        this_cluster_content_changed = this.checkChanges('data', this_cluster_rows, cache),
        top_offset_changed = this.checkChanges('top', data.top_offset, cache),
        only_bottom_offset_changed = this.checkChanges('bottom', data.bottom_offset, cache),
        callbacks = this.options.callbacks,
        layout = [];

      if(this_cluster_content_changed || top_offset_changed) {
        if(data.top_offset) {
          this.options.keep_parity && layout.push(this.renderExtraTag('keep-parity'));
          layout.push(this.renderExtraTag('top-space', data.top_offset));
        }
        layout.push(this_cluster_rows);
        data.bottom_offset && layout.push(this.renderExtraTag('bottom-space', data.bottom_offset));
        callbacks.clusterWillChange && callbacks.clusterWillChange();
        this.html(layout.join(''));
        this.options.content_tag == 'ol' && this.content_elem.setAttribute('start', data.rows_above);
        this.content_elem.style['counter-increment'] = 'clusterize-counter ' + (data.rows_above-1);
        callbacks.clusterChanged && callbacks.clusterChanged();
      } else if(only_bottom_offset_changed) {
        this.content_elem.lastChild.style.height = data.bottom_offset + 'px';
      }
    },
    // unfortunately ie <= 9 does not allow to use innerHTML for table elements, so make a workaround
    html: function(data) {
      var content_elem = this.content_elem;
      if(ie && ie <= 9 && this.options.tag == 'tr') {
        var div = document.createElement('div'), last;
        div.innerHTML = '<table><tbody>' + data + '</tbody></table>';
        while((last = content_elem.lastChild)) {
          content_elem.removeChild(last);
        }
        var rows_nodes = this.getChildNodes(div.firstChild.firstChild);
        while (rows_nodes.length) {
          content_elem.appendChild(rows_nodes.shift());
        }
      } else {
        content_elem.innerHTML = data;
      }
    },
    getChildNodes: function(tag) {
        var child_nodes = tag.children, nodes = [];
        for (var i = 0, ii = child_nodes.length; i < ii; i++) {
            nodes.push(child_nodes[i]);
        }
        return nodes;
    },
    checkChanges: function(type, value, cache) {
      var changed = value != cache[type];
      cache[type] = value;
      return changed;
    }
  };

  // support functions
  function on(evt, element, fnc) {
    return element.addEventListener ? element.addEventListener(evt, fnc, false) : element.attachEvent("on" + evt, fnc);
  }
  function off(evt, element, fnc) {
    return element.removeEventListener ? element.removeEventListener(evt, fnc, false) : element.detachEvent("on" + evt, fnc);
  }
  function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }
  function getStyle(prop, elem) {
    return window.getComputedStyle ? window.getComputedStyle(elem)[prop] : elem.currentStyle[prop];
  }

  return Clusterize;
}));
});

const virtualScrollerCss = ".clusterize-scroll.sc-any-virtual-scroller{max-height:200px;overflow:auto}.clusterize-extra-row.sc-any-virtual-scroller{margin-top:0 !important;margin-bottom:0 !important}.clusterize-extra-row.clusterize-keep-parity.sc-any-virtual-scroller{display:none}.clusterize-content.sc-any-virtual-scroller{outline:0;counter-reset:clusterize-counter}.clusterize-no-data.sc-any-virtual-scroller td.sc-any-virtual-scroller{text-align:center}.sc-any-virtual-scroller-h .clusterize-scroll.sc-any-virtual-scroller{max-height:100%}.sc-any-virtual-scroller-h .any-virtualscroller.sc-any-virtual-scroller .any-virtualscroller-header.sc-any-virtual-scroller{background:var(--surface-b);color:var(--text-color);border:solid var(--surface-d);border-width:1px 0 0 0;padding:1rem 1rem;font-weight:600}";

let AnyVirtualScroller = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.scrollingProgress = createEvent(this, "scrollingProgress", 7);
    this.clusterChanged = createEvent(this, "clusterChanged", 7);
    this.clusterWillChange = createEvent(this, "clusterWillChange", 7);
    this.aOnLazyLoad = createEvent(this, "aOnLazyLoad", 7);
    this.aOnItemClick = createEvent(this, "aOnItemClick", 7);
    this.clusterize = null;
    this.rows = [];
    this.instanceUuid = "";
    this.rowsInBlock = 10;
    this.blocksInCluster = 4;
    this.first = 0;
    this.firstInitCluster = false;
    /**
     * An array of objects to display
     */
    this.items = [];
    /**
     * Max height of the content area in inline mode
     */
    this.scrollerHeight = null;
    /**
     * Height of an item in the list
     */
    this.itemSize = null;
    /**
     * Defines if data is loaded and interacted with in lazy manner
     */
    this.lazy = false;
    /**
     * Number of rows to display per page
     */
    this.rowsPerPage = null;
    /**
     * Inline style of the component
     */
    this.anyStyle = null;
    /**
     * Inline style of the component
     */
    this.styleClass = null;
    /**
     * Tag name for supporting elements: spacing extra rows,
     * empty-data row. It will be determined by itself once data provided,
     * so it's optional. But if your data is not provided during
     * initialization - it is better to specify this option because
     * otherwise plugin will be unable to correctly render empty-data row.
     */
    this.itemTag = "div";
    /**
     * Tag name of content element whwre items will be rendered
     */
    this.contentElemTag = "div";
    /**
     * Text for placeholder element if there is no data provided
     */
    this.noDataText = "No Data";
    /**
     * Threshold in milliseconds to delay lazy loading during scrolling
     */
    this.delay = 250;
    /**
     * Class name of the content element where items will be rendered
     */
    this.contentElemClass = null;
    /**
     * Class name of the scroll element
     */
    this.scrollElemClass = null;
    /**
     * Class name of the item element
     */
    this.itemElemClass = null;
  }
  async itemsChanged() {
    if (this.clusterize) {
      let itemSlotNode = this.element
        .querySelector('[slot="item"]')
        .cloneNode(true);
      let loadingItemSlotNode = null;
      let loadingItemSlotNodeHTML = null;
      if (this.lazy) {
        loadingItemSlotNode = this.element
          .querySelector('[slot="loadingItem"]')
          .cloneNode(true);
        loadingItemSlotNodeHTML = loadingItemSlotNode.outerHTML;
      }
      let rows = [];
      rows = await getRows(this.itemTag, this.items, this.itemSize, itemSlotNode.outerHTML, null, null, this.itemElemClass, loadingItemSlotNodeHTML);
      this.clusterize.update(rows);
      this.clusterize.refresh(true);
    }
  }
  connectedCallback() {
    this.instanceUuid = uuid();
    if (!this.rowsPerPage) {
      this.rowsPerPage = this.rowsInBlock * this.blocksInCluster;
    }
    else {
      this.rowsInBlock = this.rowsPerPage / this.blocksInCluster;
    }
  }
  async componentWillLoad() {
    this.hasHeaderSlot = !!this.element.querySelector('[slot="header"]');
    // if (!this.items) this.items = [];
  }
  async componentDidLoad() {
    let itemSlotNode = this.element
      .querySelector('[slot="item"]')
      .cloneNode(true);
    if (this.lazy) {
      itemSlotNode = this.element
        .querySelector('[slot="loadingItem"]')
        .cloneNode(true);
    }
    this.rows = await getRows(this.itemTag, this.items, this.itemSize, itemSlotNode.outerHTML, 0, this.rowsInBlock * this.blocksInCluster, this.itemElemClass);
    // initialilze Clusterize after worker get back prepared rows data
    this.initClusterize();
    // ok. now get rest of rows and update Clusterize
    this.rows = await getRows(this.itemTag, this.items, this.itemSize, itemSlotNode.outerHTML, this.rowsInBlock * this.blocksInCluster, null, this.itemElemClass);
    if (this.clusterize) {
      this.clusterize.append(this.rows);
      this.clusterize.refresh(true);
    }
    let scrollEl = this.element.querySelector("#any-virtualscroller-scroll-" + this.instanceUuid);
    scrollStop(scrollEl, () => {
      if (this.lazy) {
        this.aOnLazyLoad.emit({
          first: this.first,
          rows: this.rowsPerPage,
        });
      }
    }, this.delay);
  }
  initClusterize() {
    this.clusterize = new clusterize({
      rows: this.rows,
      scrollElem: this.element.querySelector("#any-virtualscroller-scroll-" + this.instanceUuid),
      contentElem: this.element.querySelector("#any-virtualscroller-content-" + this.instanceUuid),
      rows_in_block: this.rowsInBlock,
      blocks_in_cluster: this.blocksInCluster,
      tag: this.itemTag,
      no_data_text: this.noDataText,
      // show_no_data_row: false,
      // no_data_class: "any-no-data",
      callbacks: {
        clusterChanged: () => {
          const contentEl = this.element.querySelector("#any-virtualscroller-content-" + this.instanceUuid);
          const firstItemInCluster = contentEl.getElementsByClassName("any-virtual-scroll-item")[0];
          this.defineVscrollItemClick();
          this.first = parseInt(firstItemInCluster.getAttribute("data-index"));
          // console.log("CLUSTER CHANGED");
          this.clusterChanged.emit({
            first: this.first,
            rows: this.rowsPerPage,
          });
        },
        clusterWillChange: () => {
          const next = this.first + this.rowsPerPage >= this.items.length
            ? this.items.length - 1
            : this.first + this.rowsPerPage;
          this.clusterWillChange.emit({
            next: next,
            rows: this.rowsPerPage,
          });
          if (!this.firstInitCluster && this.lazy) {
            this.aOnLazyLoad.emit({
              first: this.first,
              rows: this.rowsPerPage,
            });
          }
        },
        scrollingProgress: (progress) => {
          this.scrollingProgress.emit({
            progress: progress,
          });
        },
      },
    });
    this.firstInitCluster = true;
  }
  defineVscrollItemClick() {
    let self = this;
    let anchors = this.element.querySelectorAll(".any-virtual-scroll-item");
    for (let i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];
      anchor.onclick = function (e) {
        const item = this;
        self.aOnItemClick.emit({
          originalEvent: e,
          index: parseInt(item.getAttribute("data-index")),
        });
      };
    }
  }
  render() {
    return (h(Host, null, h("div", { style: { display: "none" } }, h("slot", { name: "item" }), h("slot", { name: "loadingItem" })), h("div", { class: "any-component any-virtualscroller" +
        (this.styleClass ? " " + this.styleClass : ""), style: this.anyStyle }, this.hasHeaderSlot && (h("div", { class: "any-virtualscroller-header" }, h("slot", { name: "header" }))), h("div", { id: "any-virtualscroller-scroll-" + this.instanceUuid, class: "any-virtualscroller-scroll clusterize-scroll", style: { height: this.scrollerHeight } }, h(this.contentElemTag, { id: "any-virtualscroller-content-" + this.instanceUuid, class: "any-virtualscroller-content clusterize-content" +
        this.contentElemClass
        ? " " + this.contentElemClass
        : "" }, h(this.itemTag, { class: "clusterize-no-data" }))), h("div", { class: "any-virtualscroller-footer" }, h("slot", { name: "footer" })))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "items": ["itemsChanged"]
  }; }
};
AnyVirtualScroller.style = virtualScrollerCss;

export { AnyVirtualScroller as any_virtual_scroller };
