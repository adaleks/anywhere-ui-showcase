import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-47705e4b.js';

const inputTextCss = "@keyframes growDown{0%{transform:scaleY(0)}80%{transform:scaleY(1.1)}100%{transform:scaleY(1)}}@keyframes growUp{0%{transform:scaleY(1.1)}80%{transform:scaleY(1)}100%{transform:scaleY(0)}}@keyframes rotateYDown{0%{transform:rotateY(90deg)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(0)}}@keyframes rotateYUp{0%{transform:rotateY(0)}80%{transform:rotateY(-10deg)}100%{transform:rotateY(90deg)}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}*.sc-any-input-text{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-any-input-text,.any-component.sc-any-input-text *.sc-any-input-text{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-any-input-text *.sc-any-input-text,.any-component.sc-any-input-text *.sc-any-input-text *.sc-any-input-text{box-sizing:border-box}.any-corner-all.sc-any-input-text{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-any-input-text{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-any-input-text{box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-any-input-text,.any-disabled.sc-any-input-text *.sc-any-input-text{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-any-input-text{cursor:default !important;pointer-events:none}.any-disabled.sc-any-input-text,.any-component.sc-any-input-text:disabled{opacity:var(--disabledOpacity)}.iconify.sc-any-input-text{font-size:var(--anyIconFontSize);display:flex;align-items:center}.growDown-animation.sc-any-input-text{animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-any-input-text{animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-any-input-text{animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-any-input-text{animation:rotateYUp 125ms ease-in-out forwards}.spin-animation.sc-any-input-text{animation:spin 2s linear infinite}.direction-down.sc-any-input-text{transform-origin:top center}.direction-up.sc-any-input-text{transform-origin:bottom center}.any-field.sc-any-input-text>label.sc-any-input-text{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-input-icon-left.sc-any-input-text>i.sc-any-input-text:first-of-type{left:0.75rem;color:var(--inputIconColor)}.any-input-icon-left.sc-any-input-text>.any-inputtext.sc-any-input-text{padding-left:2rem !important}.any-input-icon-right.sc-any-input-text>i.sc-any-input-text:last-of-type{right:0.75rem;color:var(--inputIconColor)}.any-input-icon-right.sc-any-input-text>.any-inputtext.sc-any-input-text{padding-right:2rem !important}.any-hidden-accessible.sc-any-input-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sc-any-input-text-h{display:block}.sc-any-input-text-h .any-inputtext.sc-any-input-text{font-size:var(--fontSize);color:var(--textColor);background:var(--inputBgColor);padding:var(--inputPadding);border:var(--inputBorder);-moz-transition:var(--inputTransition);-o-transition:var(--inputTransition);-webkit-transition:var(--inputTransition);transition:var(--inputTransition);-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;outline:medium none}.sc-any-input-text-h .any-inputtext.sc-any-input-text:not([disabled]):hover{border-color:var(--inputHoverBorderColor)}.sc-any-input-text-h .any-inputtext.sc-any-input-text:not([disabled]):focus{outline:0 none;outline-offset:0;-webkit-box-shadow:var(--focusShadow);-moz-box-shadow:var(--focusShadow);box-shadow:var(--focusShadow);border-color:var(--focusOutlineColor)}.sc-any-input-text-h .any-float-label.sc-any-input-text{display:block;position:relative}.sc-any-input-text-h .any-float-label.sc-any-input-text label.sc-any-input-text{position:absolute;pointer-events:none;top:50%;margin-top:-0.5rem;transition-property:all;transition-timing-function:ease;line-height:1}.sc-any-input-text-h .any-float-label.sc-any-input-text textarea.sc-any-input-text~label.sc-any-input-text{top:1rem}.sc-any-input-text-h .any-float-label.sc-any-input-text input.sc-any-input-text:focus~label.sc-any-input-text,.sc-any-input-text-h .any-float-label.sc-any-input-text input.any-filled.sc-any-input-text~label.sc-any-input-text,.sc-any-input-text-h .any-float-label.sc-any-input-text textarea.sc-any-input-text:focus~label.sc-any-input-text,.sc-any-input-text-h .any-float-label.sc-any-input-text textarea.any-filled.sc-any-input-text~label.sc-any-input-text,.sc-any-input-text-h .any-float-label.sc-any-input-text .any-inputwrapper-focus.sc-any-input-text~label.sc-any-input-text,.sc-any-input-text-h .any-float-label.sc-any-input-text .any-inputwrapper-filled.sc-any-input-text~label.sc-any-input-text{top:-0.75rem;font-size:12px}.sc-any-input-text-h .any-float-label.sc-any-input-text .input.sc-any-input-text:-webkit-autofill~label.sc-any-input-text{top:-20px;font-size:12px}.sc-any-input-text-h .any-float-label.sc-any-input-text>label.sc-any-input-text{left:0.75rem;color:var(--inputPlaceholderTextColor);transition-duration:var(--transitionDuration)}.sc-any-input-text-h .any-input-icon-left.sc-any-input-text,.sc-any-input-text-h .any-input-icon-right.sc-any-input-text{position:relative;display:inline-block}.sc-any-input-text-h .any-input-icon-left.sc-any-input-text>i.sc-any-input-text,.sc-any-input-text-h .any-input-icon-right.sc-any-input-text>i.sc-any-input-text{position:absolute;top:50%;margin-top:-0.5rem}.sc-any-input-text-h .any-fluid.sc-any-input-text .any-input-icon-left.sc-any-input-text,.sc-any-input-text-h .any-fluid.sc-any-input-text .any-input-icon-right.sc-any-input-text{display:block;width:100%}";

let AnyInputText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    /**
     * Value of the input text
     */
    this.value = null;
    /**
     * Identifier of the focus input to match a label defined for the component.
     */
    this.inputId = `any-input-text-${inputIds++}`;
    /**
     * Name of the input text.
     */
    this.name = this.inputId;
    /**
     * Label of the input text
     */
    this.label = null;
    /**
     * When enabled, the label will have floating effect on input text focus
     */
    this.floatLabel = false;
    /**
     * The class of input wrapper element
     */
    this.inputWrapperClass = null;
    /**
     * When present, it specifies that the element should be disabled
     */
    this.disabled = false;
    /**
     * When present, it specifies that the element value cannot be changed
     */
    this.readonly = false;
    /**
     * Default text to display when no value in input text
     */
    this.placeholder = null;
    /**
     * The class of right icon wrapper element
     */
    this.rightIconClass = null;
    /**
     * The class of left icon wrapper element
     */
    this.leftIconClass = null;
  }
  valueChanged() {
    const inputEl = this.element.querySelector("input");
    // only update if model and view differ
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
    }
  }
  async getInputRef() {
    return this.element.querySelector("input");
  }
  inputChanged(ev) {
    let val = ev.target && ev.target.value;
    this.value = val;
    this.valueChange.emit(this.value);
  }
  render() {
    return (h(Host, null, h("div", { class: this.floatLabel
        ? " any-float-label " +
          (this.inputWrapperClass ? this.inputWrapperClass : "")
        : this.inputWrapperClass }, this.label && !this.floatLabel && (h("label", { htmlFor: this.inputId }, this.label)), h("i", { class: this.leftIconClass ? this.leftIconClass + " iconify" : "iconify" }, h("slot", { name: "iconLeft" })), h("input", { id: this.inputId, name: this.name, disabled: this.disabled, readonly: this.readonly, placeholder: this.placeholder, type: "text", class: this.value
        ? "any-component any-inputtext any-corner-all any-filled"
        : "any-component any-inputtext any-corner-all", value: this.value, onInput: this.inputChanged.bind(this) }), h("i", { class: this.rightIconClass ? this.rightIconClass + " iconify" : "iconify" }, h("slot", { name: "iconRight" })), this.label && this.floatLabel && (h("label", { htmlFor: this.inputId }, this.label)))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
let inputIds = 0;
AnyInputText.style = inputTextCss;

export { AnyInputText as any_input_text };
