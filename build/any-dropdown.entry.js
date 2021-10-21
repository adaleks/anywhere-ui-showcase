import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-47705e4b.js';
import { l as lodash, g as get, a as getNodeIndex, f as findAndReplaceInnerHtml } from './utils-ef441e77.js';
import { I as Iconify, l as loadIcons } from './load-icons-a57c60ce.js';
import { r as renderHiddenInput } from './helpers-6abeccbe.js';
import './_commonjsHelpers-8fe71198.js';

const dropdownCss = "@keyframes growDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}@keyframes growUp{0%{transform:scaleY(1.1)}80%{transform:scaleY(1)}100%{transform:scaleY(0)}}@keyframes rotateYDown{0%{transform:rotateY(90deg)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(0)}}@keyframes rotateYUp{0%{transform:rotateY(0)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(90deg)}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component,.any-component *{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component *,.any-component * *{box-sizing:border-box}.any-corner-all{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow{box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled,.any-disabled *{cursor:default !important;pointer-events:none}.any-checkbox-disabled{cursor:default !important;pointer-events:none}.any-disabled,.any-component:disabled{opacity:var(--disabledOpacity)}.iconify{font-size:var(--anyIconFontSize);display:flex;align-items:center}.growDown-animation{animation:growDown 125ms ease-in-out forwards}.growUp-animation{animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation{animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation{animation:rotateYUp 125ms ease-in-out forwards}.spin-animation{animation:spin 2s linear infinite}.direction-down{transform-origin:top center}.direction-up{transform-origin:bottom center}.any-field>label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-input-icon-left>i:first-of-type{left:0.75rem;color:var(--inputIconColor)}.any-input-icon-left>.any-inputtext{padding-left:2rem !important}.any-input-icon-right>i:last-of-type{right:0.75rem;color:var(--inputIconColor)}.any-input-icon-right>.any-inputtext{padding-right:2rem !important}.any-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}@keyframes growDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}@keyframes growUp{0%{transform:scaleY(1.1)}80%{transform:scaleY(1)}100%{transform:scaleY(0)}}@keyframes rotateYDown{0%{transform:rotateY(90deg)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(0)}}@keyframes rotateYUp{0%{transform:rotateY(0)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(90deg)}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component,.any-component *{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component *,.any-component * *{box-sizing:border-box}.any-corner-all{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow{box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled,.any-disabled *{cursor:default !important;pointer-events:none}.any-checkbox-disabled{cursor:default !important;pointer-events:none}.any-disabled,.any-component:disabled{opacity:var(--disabledOpacity)}.iconify{font-size:var(--anyIconFontSize);display:flex;align-items:center}.growDown-animation{animation:growDown 125ms ease-in-out forwards}.growUp-animation{animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation{animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation{animation:rotateYUp 125ms ease-in-out forwards}.spin-animation{animation:spin 2s linear infinite}.direction-down{transform-origin:top center}.direction-up{transform-origin:bottom center}.any-field>label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-input-icon-left>i:first-of-type{left:0.75rem;color:var(--inputIconColor)}.any-input-icon-left>.any-inputtext{padding-left:2rem !important}.any-input-icon-right>i:last-of-type{right:0.75rem;color:var(--inputIconColor)}.any-input-icon-right>.any-inputtext{padding-right:2rem !important}.any-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{display:block;}:host .any-inputtext{font-size:var(--fontSize);color:var(--textColor);background:var(--inputBgColor);padding:var(--inputPadding);border:var(--inputBorder);-moz-transition:var(--inputTransition);-o-transition:var(--inputTransition);-webkit-transition:var(--inputTransition);transition:var(--inputTransition);-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;outline:medium none}:host .any-inputtext:not([disabled]):hover{border-color:var(--inputHoverBorderColor)}:host .any-inputtext:not([disabled]):focus{outline:0 none;outline-offset:0;-webkit-box-shadow:var(--focusShadow);-moz-box-shadow:var(--focusShadow);box-shadow:var(--focusShadow);border-color:var(--focusOutlineColor)}:host .any-float-label{display:block;position:relative}:host .any-float-label label{position:absolute;pointer-events:none;top:50%;margin-top:-0.5rem;transition-property:all;transition-timing-function:ease;line-height:1}:host .any-float-label textarea~label{top:1rem}:host .any-float-label input:focus~label,:host .any-float-label input.any-filled~label,:host .any-float-label textarea:focus~label,:host .any-float-label textarea.any-filled~label,:host .any-float-label .any-inputwrapper-focus~label,:host .any-float-label .any-inputwrapper-filled~label{top:-0.75rem;font-size:12px}:host .any-float-label .input:-webkit-autofill~label{top:-20px;font-size:12px}:host .any-float-label>label{left:0.75rem;color:var(--inputPlaceholderTextColor);transition-duration:var(--transitionDuration)}:host .any-input-icon-left,:host .any-input-icon-right{position:relative;display:inline-block}:host .any-input-icon-left>i,:host .any-input-icon-right>i{position:absolute;top:50%;margin-top:-0.5rem}:host .any-fluid .any-input-icon-left,:host .any-fluid .any-input-icon-right{display:block;width:100%}:host{display:block}:host .any-dropdown{display:-ms-inline-flexbox;display:inline-flex;position:relative;cursor:pointer;min-width:var(--inputListMinWidth);background:var(--inputListBg);border:var(--inputBorder);-moz-transition:var(--inputTransition);-o-transition:var(--inputTransition);-webkit-transition:var(--inputTransition);transition:var(--inputTransition);user-select:none}:host .any-dropdown:not(.ui-state-disabled):hover{border-color:var(--inputHoverBorderColor)}:host .any-dropdown:not(.ui-state-disabled).any-state-focus{outline:0 none;outline-offset:0;-webkit-box-shadow:var(--focusShadow);-moz-box-shadow:var(--focusShadow);box-shadow:var(--focusShadow);border-color:var(--focusOutlineColor)}:host .any-dropdown label.any-dropdown-label{cursor:pointer}:host .any-dropdown .any-dropdown-label{display:block;border:none;overflow:hidden;width:100%;padding-right:2.5em;font-weight:400;text-overflow:ellipsis;white-space:nowrap}:host .any-dropdown .any-dropdown-label.any-placeholder{color:var(--inputPlaceholderTextColor)}:host .any-dropdown .any-dropdown-clear-icon{position:absolute;top:50%;margin-top:-0.5rem;right:2.357rem}:host .any-dropdown .any-dropdown-clear-icon svg{color:var(--inputDropdownIconColor)}:host .any-dropdown .any-dropdown-clearable .any-dropdown-label{padding-right:4em}:host .any-dropdown .any-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0;background:transparent;width:2.357rem}:host .any-dropdown .any-dropdown-trigger svg{transition-duration:var(--transitionDuration);transition-property:transform;color:var(--inputDropdownIconColor)}:host .any-dropdown .any-dropdown-trigger[aria-expanded] svg{transform:rotate(-180deg) !important;-webkit-transform:rotate(-180deg) !important}:host .any-dropdown .any-dropdown-panel{min-width:100%;background:var(--inputOverlayBg);position:absolute;height:auto}:host .any-dropdown .any-dropdown-panel .any-dropdown-items-wrapper{overflow:auto}:host .any-dropdown .any-dropdown-panel .any-listbox-item{white-space:nowrap;font-weight:var(--fontWeight)}.any-dropdown .any-dropdown-label{background:transparent;border:0 none}";

const parseValue = (value) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};
let AnyDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.aOnShow = createEvent(this, "aOnShow", 7);
    this.aOnShowStart = createEvent(this, "aOnShowStart", 7);
    this.aOnHide = createEvent(this, "aOnHide", 7);
    this.aOnHideStart = createEvent(this, "aOnHideStart", 7);
    this.aOnFocus = createEvent(this, "aOnFocus", 7);
    this.aOnBlur = createEvent(this, "aOnBlur", 7);
    this.aOnClick = createEvent(this, "aOnClick", 7);
    this.open = false;
    this.openDown = true;
    this.selectedOptionLabel = null;
    this.selectedItem = null;
    this.isOpened = false;
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
    this.inputId = `any-dd-${dropdownIds++}`;
    /**
     * Name of the dropdown input.
     */
    this.name = this.inputId;
    /**
     * Name of the value field of an option
     */
    this.optionValue = "value";
    /**
     * Default text to display when no option is selected
     */
    this.placeholder = null;
    /**
     * Icon class of the dropdown icon
     */
    this.dropdownIcon = "fa-solid:chevron-down";
    /**
     * Icon class of the dropdown clear icon
     */
    this.clearIcon = "fa-solid:times";
    /**
     * Base zIndex value to use in layering
     */
    this.baseZIndex = "0";
    /**
     * Keyframe name the show animation
     */
    this.showAnimation = "growDown";
    /**
     * Transition options of the hide animation
     */
    this.hideAnimation = "growUp";
    /**
     * Index of the element in tabbing order
     */
    this.anyTabIndex = 0;
    /**
     * Inline style of the element
     */
    this.anyStyle = null;
    /**
     * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value
     */
    this.panelScrollHeight = "200px";
    /**
     * When enabled, a clear icon is displayed to clear the value
     */
    this.showClear = false;
    /**
     * Whether to automatically manage layering
     */
    this.autoZIndex = true;
    /**
     * Value of the dropdown list
     */
    this.value = null;
    /**
     * When present, it specifies that the element should be disabled
     */
    this.disabled = false;
    /**
     * When present, it specifies that the element value cannot be changed
     */
    this.readonly = false;
    /**
     * When present, list virtual scroller is enabled
     */
    this.virtualScroll = false;
  }
  valueChanged(newValue, oldValue) {
    console.debug("The new value of DropDown is: ", newValue, oldValue);
    if (this.options) {
      this.selectedItem = this.options.find((x) => lodash.isEqual(x.value, this.value));
      if (this.selectedItem && this.showClear) {
        const dropdownClearElement = this.element.shadowRoot.querySelector(".any-dropdown-clear-icon");
        if (dropdownClearElement)
          dropdownClearElement.innerHTML = Iconify.renderHTML(this.clearIcon, {});
      }
      const labelEl = this.element.shadowRoot.querySelector(".any-dropdown-label");
      if (this.selectedItem &&
        get(this.optionLabel.split("."), this.selectedItem) &&
        !this.hasSelectedItemSlot) {
        labelEl.innerHTML = get(this.optionLabel.split("."), this.selectedItem);
        labelEl.classList.remove("any-placeholder");
      }
      if (!this.value && !this.selectedItem) {
        labelEl.classList.add("any-placeholder");
        this.selectedOptionLabel = null;
        if (!this.hasSelectedItemSlot && this.placeholder) {
          labelEl.innerHTML = this.placeholder;
        }
      }
    }
  }
  handleClick(e) {
    // if (this.readonly) return;
    if (e.srcElement === this.element) {
      this.aOnClick.emit(e);
    }
    this.handleClickOutside(e);
  }
  componentDidLoad() {
    this.dropdownWrapper = this.element.shadowRoot.querySelector(".any-dropdown");
    // const dropdownPanelClone = this.element.shadowRoot.querySelector(
    //   ".any-dropdown-panel-clone"
    // ) as HTMLElement;
    if (this.value) {
      const labelEl = this.element.shadowRoot.querySelector(".any-dropdown-label");
      if (this.selectedItem)
        if (this.showClear) {
          const dropdownClearElement = this.element.shadowRoot.querySelector(".any-dropdown-clear-icon");
          dropdownClearElement.innerHTML = Iconify.renderHTML(this.clearIcon, {});
        }
      labelEl.classList.remove("any-placeholder");
      if (this.selectedItem &&
        get(this.optionLabel.split("."), this.selectedItem) &&
        !this.hasSelectedItemSlot) {
        labelEl.innerHTML = get(this.optionLabel.split("."), this.selectedItem);
        labelEl.classList.remove("any-placeholder");
        //  this.selectedOptionLabel = label;
      }
    }
    // this.panelHeight = dropdownPanelClone.offsetHeight;
    // dropdownPanelClone.remove();
  }
  componentWillLoad() {
    this.hasItemSlot = !!this.element.querySelector('[slot="item"]');
    this.hasSelectedItemSlot = !!this.element.querySelector('[slot="selectedItem"]');
    this.loadIcons();
    if (this.value) {
      this.selectedItem = this.options.find((x) => lodash.isEqual(x.value, this.value));
    }
  }
  async loadIcons() {
    await loadIcons([this.dropdownIcon, this.clearIcon]).catch((err) => {
      console.error("Failed to load icons:", err.missing);
    });
    const dropdownTriggerElement = this.element.shadowRoot.querySelector(".any-dropdown-trigger-icon");
    dropdownTriggerElement.innerHTML = Iconify.renderHTML(this.dropdownIcon, {});
  }
  handleElementClick(e) {
    const dropdownClearElement = this.element.shadowRoot.querySelector(".any-dropdown-clear-icon");
    this.open = !this.open;
    if (e.composedPath().includes(dropdownClearElement)) {
      this.value = null;
      this.selectedOptionLabel = null;
      if (this.isOpened) {
        this.animatePanelAppearance("close");
      }
      this.dropdownWrapper.blur();
      dropdownClearElement.style.display = "none";
      this.aOnBlur.emit(e);
      this.valueChange.emit({
        originalEvent: e,
        value: this.value,
      });
      return;
    }
    else {
      if (this.readonly)
        return;
      this.dropdownWrapper.classList.add("any-state-focus");
      this.aOnFocus.emit(e);
    }
    if (this.open) {
      this.animatePanelAppearance("open");
    }
    else {
      this.animatePanelAppearance("close");
    }
  }
  handleClickOutside(e) {
    if (e.srcElement !== this.element && this.dropdownWrapper)
      this.dropdownWrapper.classList.remove("any-state-focus");
    this.open = false;
    this.animatePanelAppearance("close");
  }
  /**
   * Panel appearance animation definition
   *
   * @private
   * @param {string} action
   * @memberof AnyDropdown
   */
  animatePanelAppearance(action) {
    const dropdownPanel = this.element.shadowRoot.querySelector(".any-dropdown-panel");
    if (action === "open") {
      this.isOpened = true;
      if (!dropdownPanel) {
        window.requestAnimationFrame(() => this.animatePanelAppearance("open"));
      }
      else {
        document.removeEventListener("animationend", () => { });
        dropdownPanel.classList.remove(this.hideAnimation + "-animation");
        dropdownPanel.classList.add(this.showAnimation + "-animation");
        // dropdownPanel.style.zIndex = this.baseZIndex ;
        if (this.openDown) {
          dropdownPanel.classList.add("direction-down");
          dropdownPanel.style.top = this.dropdownWrapper.offsetHeight + "px";
        }
        else {
          dropdownPanel.classList.add("direction-up");
          dropdownPanel.style.top = "-" + this.panelScrollHeight;
        }
        dropdownPanel.style.left = "0px";
        dropdownPanel.style.zIndex = this.autoZIndex
          ? (1090 + getNodeIndex(this.element)).toString()
          : this.baseZIndex;
      }
    }
    else {
      if (dropdownPanel) {
        dropdownPanel.classList.remove(this.showAnimation + "-animation");
        dropdownPanel.classList.add(this.hideAnimation + "-animation");
        dropdownPanel.addEventListener("animationend", () => {
          this.isOpened = false;
        }, false);
      }
    }
  }
  onValueChangeCallback(event) {
    if (!event.detail.value || lodash.isEmpty(event.detail.originalEvent))
      return;
    const label = event.detail.originalEvent.currentTarget.ariaLabel;
    const labelEl = this.element.shadowRoot.querySelector(".any-dropdown-label");
    this.selectedOptionLabel = label;
    this.value = event.detail.value;
    if (this.selectedOptionLabel) {
      labelEl.classList.remove("any-placeholder");
    }
    else {
      labelEl.classList.add("any-placeholder");
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
  onAnimationEndCallback(e) {
    // console.log('event anim', e);
    if (e.animationName === this.showAnimation) {
      this.aOnShow.emit(e);
    }
    if (e.animationName === this.hideAnimation) {
      this.aOnHide.emit(e);
    }
  }
  onAnimationStartCallback(e) {
    if (e.animationName === this.showAnimation) {
      this.aOnShowStart.emit(e);
    }
    if (e.animationName === this.hideAnimation) {
      this.aOnHideStart.emit(e);
    }
  }
  onFocusCallback(e) {
    if (this.readonly)
      return;
    // console.log("event focus", e.composedPath());
    this.dropdownWrapper.classList.add("any-state-focus");
    this.aOnFocus.emit(e);
  }
  onFocusOutCallback(e) {
    if (this.readonly)
      return;
    // console.log("event focus out", e);
    this.dropdownWrapper.classList.remove("any-state-focus");
    this.aOnBlur.emit(e);
  }
  render() {
    const { disabled, element, name, value } = this;
    renderHiddenInput(true, element, name, value ? parseValue(value) : "", disabled);
    return (h(Host, null, h("div", { style: this.anyStyle, class: "any-component any-dropdown any-corner-all" +
        (this.disabled ? " any-disabled" : ""), tabindex: this.anyTabIndex, onFocus: (e) => {
        this.onFocusCallback(e);
      }, onBlur: (e) => {
        this.onFocusOutCallback(e);
      }, onClick: (e) => this.handleElementClick(e) }, this.hasSelectedItemSlot && this.selectedItem ? (h("span", { class: "any-dropdown-label any-inputtext any-corner-all any-placeholder" }, h("div", { slot: "selectedItem", innerHTML: this.getContent("selectedItem", this.selectedItem) }))) : (h("span", { innerHTML: this.selectedOptionLabel
        ? this.selectedOptionLabel
        : this.placeholder, class: "any-dropdown-label any-inputtext any-corner-all any-placeholder" })), this.showClear && (h("i", { class: "any-dropdown-clear-icon", style: { display: this.selectedItem ? "block" : "none" } })), h("div", { class: "any-dropdown-trigger any-state-default any-corner-right", "aria-expanded": this.isOpened }, h("span", { class: "any-dropdown-trigger-icon" })), this.isOpened && (h("div", { class: "any-widget-content any-widget any-corner-all any-dropdown-panel any-shadow", onAnimationEnd: (e) => this.onAnimationEndCallback(e), onAnimationStart: (e) => this.onAnimationStartCallback(e) }, h("div", { class: "any-dropdown-items-wrapper", style: !this.virtualScroll && {
        "max-height": this.panelScrollHeight,
      } }, h("any-listbox", { options: this.options, value: this.value, optionLabel: this.optionLabel, optionValue: this.optionValue, scrollerHeight: this.virtualScroll ? this.panelScrollHeight : null, virtualScroll: this.virtualScroll, onValueChange: (ev) => this.onValueChangeCallback(ev) }, this.hasItemSlot && (h("div", { slot: "item", innerHTML: this.getContent("item") })))))))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
let dropdownIds = 0;
AnyDropdown.style = dropdownCss;

export { AnyDropdown as any_dropdown };
