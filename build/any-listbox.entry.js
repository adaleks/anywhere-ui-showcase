import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-47705e4b.js';
import { l as lodash, g as get, f as findAndReplaceInnerHtml } from './utils-ef441e77.js';
import { r as renderHiddenInput } from './helpers-6abeccbe.js';
import './_commonjsHelpers-8fe71198.js';

const watchForOptions = (containerEl, tagName, onChange) => {
  /* tslint:disable-next-line */
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach(mut => {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
const findCheckedOption = (el, tagName) => {
  if (el.nodeType !== 1) {
    return undefined;
  }
  const options = (el.tagName === tagName.toUpperCase())
    ? [el]
    : Array.from(el.querySelectorAll(tagName));
  return options.find((o) => o.value === el.value);
};

const listboxCss = "@keyframes growDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}@keyframes growUp{0%{transform:scaleY(1.1)}80%{transform:scaleY(1)}100%{transform:scaleY(0)}}@keyframes rotateYDown{0%{transform:rotateY(90deg)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(0)}}@keyframes rotateYUp{0%{transform:rotateY(0)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(90deg)}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component,.any-component *{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component *,.any-component * *{box-sizing:border-box}.any-corner-all{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow{box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled,.any-disabled *{cursor:default !important;pointer-events:none}.any-checkbox-disabled{cursor:default !important;pointer-events:none}.any-disabled,.any-component:disabled{opacity:var(--disabledOpacity)}.iconify{font-size:var(--anyIconFontSize);display:flex;align-items:center}.growDown-animation{animation:growDown 125ms ease-in-out forwards}.growUp-animation{animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation{animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation{animation:rotateYUp 125ms ease-in-out forwards}.spin-animation{animation:spin 2s linear infinite}.direction-down{transform-origin:top center}.direction-up{transform-origin:bottom center}.any-field>label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-input-icon-left>i:first-of-type{left:0.75rem;color:var(--inputIconColor)}.any-input-icon-left>.any-inputtext{padding-left:2rem !important}.any-input-icon-right>i:last-of-type{right:0.75rem;color:var(--inputIconColor)}.any-input-icon-right>.any-inputtext{padding-right:2rem !important}.any-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{display:block}:host .any-listbox-list{list-style-type:none;margin:0;padding:0}:host .any-listbox-item{cursor:pointer;position:relative;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none}:host .any-listbox{display:block;padding:0;border:var(--inputListBorder);background-color:var(--inputListBg)}:host .any-listbox .any-listbox-list-wrapper{overflow:auto}:host .any-listbox .any-listbox-list-wrapper .any-listbox-list{padding:var(--inputListPadding)}:host .any-listbox .any-listbox-list-wrapper .any-listbox-list .any-listbox-item{margin:var(--inputListItemMargin);padding:var(--inputListItemPadding);border:var(--inputListItemBorder);color:var(---inputListItemTextColor);transition:box-shadow 0.15s;border-radius:0;font-weight:var(--fontWeight)}:host .any-listbox .any-listbox-list-wrapper .any-listbox-list .any-listbox-item:not(.any-highlight):not(.any-disabled):focus{outline:0;outline-offset:0;box-shadow:var(--inputListItemFocusShadow)}:host .any-listbox .any-listbox-list-wrapper .any-listbox-list .any-listbox-item:not(.any-highlight):not(.any-disabled):hover{color:var(--inputListItemHoverTextColor);background:var(--inputListItemHoverBgColor)}:host .any-listbox .any-listbox-list-wrapper .any-listbox-list .any-listbox-item.any-highlight{color:var(--inputListItemHighlightTextColor);background:var(--inputListItemHighlightBgColor)}";

const parseValue = (value) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};
const hasSomeParentTheClass = (element, classname) => {
  if (element.className && element.className.split(" ").indexOf(classname) >= 0)
    return true;
  return (element.parentNode && hasSomeParentTheClass(element.parentNode, classname));
};
let AnyListbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.didInit = false;
    this.itemPointerEvent = {};
    this.hasItemSlot = false;
    this.hasTabIndex = true;
    /**
     * An array of objects to display as the available options.
     */
    this.options = null;
    /**
     * Name of the label field of an option
     */
    this.optionLabel = "label";
    /**
     * Identifier of the focus input to match a label defined for the component.
     */
    this.inputId = `any-lb-${listboxIds++}`;
    /**
     * Name of the dropdown input.
     */
    this.name = this.inputId;
    /**
     * Name of the value field of an option
     */
    this.optionValue = "value";
    /**
     * Value of the listbox
     */
    this.value = null;
    /**
     * Inline style of the element
     */
    this.anyStyle = null;
    /**
     * Inline style of the list element
     */
    this.listStyle = null;
    /**
     * When present, it specifies that the element should be disabled
     */
    this.disabled = false;
    /**
     * When present, it specifies that the element value cannot be changed
     */
    this.readonly = false;
    /**
     * Max height of the content area in inline mode
     */
    this.scrollerHeight = "200px";
    /**
     * When present, list virtual scroller is enabled
     */
    this.virtualScroll = false;
  }
  valueChanged(newValue, oldValue) {
    if (this.didInit && this.mutationO) {
      console.log("The new value of listbox is: ", newValue, oldValue);
      // if (!this.readonly) {
      let items = this.element.shadowRoot.querySelectorAll(".any-listbox-item.any-highlight");
      for (var i = 0; i < items.length; i++) {
        if (items[i]) {
          items[i].classList.remove("any-highlight");
          items[i].setAttribute("aria-selected", "false");
        }
      }
      if (newValue) {
        const selected = this.options.find((x) => lodash.isEqual(x.value, newValue));
        if (selected && get(this.optionLabel.split("."), selected)) {
          const selectedItem = this.element.shadowRoot.querySelector("[aria-label='" + get(this.optionLabel.split("."), selected) + "']");
          selectedItem.classList.add("any-highlight");
          selectedItem.setAttribute("aria-selected", "true");
        }
      }
      // }
      this.valueChange.emit({
        originalEvent: this.itemPointerEvent,
        value: this.value,
      });
    }
  }
  async connectedCallback() {
    this.mutationO = watchForOptions(this.element, "li", async () => { });
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }
  componentWillLoad() {
    this.hasItemSlot = !!this.element.querySelector('[slot="item"]');
    const parent = this.element.parentNode;
    if (parent.classList.contains("any-dropdown-items-wrapper")) {
      this.hasTabIndex = false;
    }
  }
  componentDidLoad() {
    this.didInit = true;
    if (this.value) {
      const selected = this.options.find((x) => lodash.isEqual(x.value, this.value));
      if (selected && get(this.optionLabel.split("."), selected)) {
        const selectedItem = this.element.shadowRoot.querySelector("[aria-label='" + get(this.optionLabel.split("."), selected) + "']");
        if (selectedItem) {
          selectedItem.classList.add("any-highlight");
          selectedItem.setAttribute("aria-selected", "true");
        }
      }
    }
  }
  componentWillRender() { }
  onClusterChanged() {
    let items = this.element.shadowRoot.querySelectorAll(".any-listbox-item");
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let index = parseInt(item.getAttribute("data-index"));
      item.setAttribute("aria-label", get(this.optionLabel.split("."), this.options[index]));
    }
    if (this.value) {
      const selected = this.options.find((x) => lodash.isEqual(x.value, this.value));
      if (selected && get(this.optionLabel.split("."), selected)) {
        const selectedItem = this.element.shadowRoot.querySelector("[aria-label='" + get(this.optionLabel.split("."), selected) + "']");
        if (selectedItem) {
          selectedItem.classList.add("any-highlight");
          selectedItem.setAttribute("aria-selected", "true");
        }
      }
    }
  }
  itemClick(e, selected) {
    if (this.readonly)
      return;
    let value = null;
    e.currentTarget.classList.add("any-highlight");
    e.currentTarget.setAttribute("aria-selected", "true");
    if (selected[this.optionValue]) {
      value = selected[this.optionValue];
    }
    else {
      value = selected;
    }
    if (!lodash.isEqual(value, this.value)) {
      this.itemPointerEvent = e;
      this.value = value;
    }
  }
  getContent(slot, itemData) {
    const node = this.element
      .querySelector('[slot="' + slot + '"]')
      .cloneNode(true);
    if (!itemData) {
      return node.innerHTML;
    }
    const newNode = findAndReplaceInnerHtml(node, itemData);
    return newNode.innerHTML;
  }
  onVirtualItemClick() { }
  render() {
    const { disabled, element, name, value } = this;
    if (!hasSomeParentTheClass(this.element, "any-dropdown-items-wrapper")) {
      renderHiddenInput(true, element, name, value ? parseValue(value) : "", disabled);
    }
    return (h(Host, null, h("div", { style: { display: "none" } }, h("slot", { name: "item" })), h("div", { class: "any-component any-listbox any-corner-all" +
        (this.disabled ? " any-disabled" : ""), style: this.anyStyle }, h("div", { id: "scrollArea", class: "any-listbox-list-wrapper", style: {
        ...{
          "max-height": this.scrollerHeight
            ? this.scrollerHeight
            : "auto",
        },
        ...this.listStyle,
      } }, !this.virtualScroll ? (h("ul", { class: "any-listbox-list", part: "items" }, this.options.map((option) => (h("li", { class: "any-listbox-item", tabindex: this.hasTabIndex ? "0" : null, "aria-selected": "false", "aria-label": get(this.optionLabel.split("."), option)
        ? get(this.optionLabel.split("."), option)
        : option.label, onClick: (e) => this.itemClick(e, option) }, !this.hasItemSlot ? (h("div", null, get(this.optionLabel.split("."), option)
      ? get(this.optionLabel.split("."), option)
      : option.label)) : (h("div", { innerHTML: this.getContent("item", option) }))))))) : (h("any-virtual-scroller", { items: this.options, scrollerHeight: this.scrollerHeight, contentElemClass: "any-listbox-list", itemElemClass: "any-listbox-item", contentElemTag: "ul", itemTag: "li", onClusterChanged: () => this.onClusterChanged(), onAOnItemClick: (e) => this.itemClick(e.detail.originalEvent, this.options[e.detail.index]) }, this.hasItemSlot ? (h("div", { slot: "item", innerHTML: this.getContent("item") })) : (h("div", { slot: "item" }, "#=item.", this.optionLabel, "#"))))))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
let listboxIds = 0;
AnyListbox.style = listboxCss;

export { AnyListbox as any_listbox };
