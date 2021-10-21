import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-47705e4b.js';
import { l as loadIcons, I as Iconify } from './load-icons-a57c60ce.js';
import { r as renderHiddenInput } from './helpers-6abeccbe.js';
import './_commonjsHelpers-8fe71198.js';

const checkboxCss = "@keyframes growDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}@keyframes growUp{0%{transform:scaleY(1.1)}80%{transform:scaleY(1)}100%{transform:scaleY(0)}}@keyframes rotateYDown{0%{transform:rotateY(90deg)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(0)}}@keyframes rotateYUp{0%{transform:rotateY(0)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(90deg)}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component,.any-component *{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component *,.any-component * *{box-sizing:border-box}.any-corner-all{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow{box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled,.any-disabled *{cursor:default !important;pointer-events:none}.any-checkbox-disabled{cursor:default !important;pointer-events:none}.any-disabled,.any-component:disabled{opacity:var(--disabledOpacity)}.iconify{font-size:var(--anyIconFontSize);display:flex;align-items:center}.growDown-animation{animation:growDown 125ms ease-in-out forwards}.growUp-animation{animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation{animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation{animation:rotateYUp 125ms ease-in-out forwards}.spin-animation{animation:spin 2s linear infinite}.direction-down{transform-origin:top center}.direction-up{transform-origin:bottom center}.any-field>label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-input-icon-left>i:first-of-type{left:0.75rem;color:var(--inputIconColor)}.any-input-icon-left>.any-inputtext{padding-left:2rem !important}.any-input-icon-right>i:last-of-type{right:0.75rem;color:var(--inputIconColor)}.any-input-icon-right>.any-inputtext{padding-right:2rem !important}.any-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host{display:block;display:flex;align-items:center}:host .any-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;vertical-align:bottom;width:var(--checkboxWidth);height:var(--checkboxHeight)}:host .any-checkbox .any-checkbox-box{display:flex;justify-content:center;align-items:center;border:var(--checkboxBorder);background:var(--inputBgColor);width:var(--checkboxWidth);height:var(--checkboxHeight);color:var(--textColor);border-radius:var(--borderRadius);transition:var(--inputTransition)}:host .any-checkbox .any-checkbox-box.any-highlight{border-color:var(--checkboxActiveBorderColor);background:var(--checkboxActiveBg)}:host .any-checkbox .any-checkbox-box .any-checkbox-icon{transition-duration:var(--transitionDuration);color:var(--checkboxIconActiveColor);font-size:var(--fontSize)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box:hover{border-color:var(--inputHoverBorderColor)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box.any-focus{outline:var(--focusOutline);outline-offset:var(--focusOutlineOffset);box-shadow:var(--focusShadow);border-color:var(--checkboxActiveBorderColor)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box.any-highlight:hover{border-color:var(--checkboxActiveHoverBorderColor);background:var(--checkboxActiveHoverBg);color:var(--checkboxIconActiveHoverColor)}:host .any-checkbox-label{margin-left:0.5rem}";

let AnyCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.aOnFocus = createEvent(this, "aOnFocus", 7);
    this.aOnBlur = createEvent(this, "aOnBlur", 7);
    this.focused = false;
    this.checkbox = null;
    /**
     * If `true`, the checkbox is selected.
     */
    this.checked = false;
    /**
     * Allows to select a boolean value instead of multiple values.
     */
    this.binary = false;
    /**
     * Identifier of the focus input to match a label defined for the component.
     */
    this.inputId = `any-cb-${checkboxIds++}`;
    /**
     * Name of the checkbox group.
     */
    this.name = this.inputId;
    /**
     * The value of the checkbox does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
     * it's only used when the checkbox participates in a native `<form>`.
     */
    this.value = "on";
    /**
     * Label of the checkbox.
     */
    this.label = null;
    /**
     * Inline style of the component.
     */
    this.anyStyle = null;
    /**
     * Style class of the component.
     */
    this.styleClass = null;
    /**
     * Style class of the label.
     */
    this.labelStyleClass = null;
    /**
     * When present, it specifies that the element should be disabled.
     */
    this.disabled = false;
    /**
     * When present, it specifies that the component cannot be edited.
     */
    this.readonly = false;
    /**
     * Icon class of the checkbox icon.
     */
    this.checkboxIcon = "fa-solid:check";
  }
  checkedChanged(isChecked) {
    let value = this.value;
    if (this.binary) {
      value = isChecked;
      this.value = isChecked;
    }
    this.valueChange.emit({
      checked: isChecked,
      value: value,
    });
  }
  componentWillLoad() {
    this.loadIcons();
  }
  componentDidLoad() {
    this.checkbox = this.element.shadowRoot.querySelector("input[type='checkbox']");
  }
  async loadIcons() {
    await loadIcons([this.checkboxIcon]).catch((err) => {
      console.error("Failed to load icons:", err.missing);
    });
    const checkboxElement = this.element.shadowRoot.querySelector(".any-checkbox-icon");
    // if (this.checked && checkboxElement)
    checkboxElement.innerHTML = Iconify.renderHTML(this.checkboxIcon, {});
  }
  onClick(event, focus) {
    event.preventDefault();
    if (this.disabled || this.readonly) {
      return;
    }
    this.checked = !this.checked;
    if (focus) {
      this.checkbox.focus();
    }
  }
  onFocus() {
    this.focused = true;
    this.aOnFocus.emit();
  }
  onBlur() {
    this.focused = false;
    this.aOnBlur.emit();
  }
  handleChange(event) {
    if (!this.readonly) {
      this.checked = event.target.checked;
    }
  }
  async inputFocus() {
    this.checkbox.focus();
  }
  render() {
    const { checked, disabled, element, name, value } = this;
    renderHiddenInput(true, element, name, checked ? value : "", disabled);
    return (h(Host, null, h("div", { class: "any-component any-checkbox" +
        (checked ? " any-checkbox-checked" : "") +
        (this.focused ? " any-checkbox-focused" : "") +
        (disabled ? " any-checkbox-disabled" : ""), style: this.anyStyle }, h("div", { class: "any-hidden-accessible" }, h("input", { type: "checkbox", id: this.inputId, name: this.name, checked: checked, value: this.value, "aria-checked": `${checked}`, onFocus: () => {
        this.onFocus();
      }, onBlur: () => {
        this.onBlur();
      }, onChange: (e) => {
        this.handleChange(e);
      } }), h("slot", { name: "label" })), h("div", { class: "any-checkbox-box" +
        (checked ? " any-highlight" : "") +
        (this.focused ? " any-focus" : "") +
        (disabled ? " any-disabled" : ""), onClick: (e) => {
        this.onClick(e, true);
      } }, h("span", { class: "any-checkbox-icon", style: { visibility: checked ? "visible" : "hidden" } }))), this.label && (h("label", { onClick: (e) => {
        this.onClick(e, true);
      }, htmlFor: this.inputId, class: "any-checkbox-label" +
        (this.labelStyleClass ? " " + this.labelStyleClass : "") +
        (checked ? " any-checkbox-label-active" : "") +
        (this.focused ? " any-checkbox-label-focus" : "") +
        (disabled ? " any-disabled" : "") }, this.label))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "checked": ["checkedChanged"]
  }; }
};
let checkboxIds = 0;
AnyCheckbox.style = checkboxCss;

export { AnyCheckbox as any_checkbox };
