import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-47705e4b.js';
import { g as globalScripts } from './app-globals-b0643c65.js';

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = "";
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return __sc_import_anywhere_ui(/* webpackChunkName: "polyfills-dom" */ './dom-db0073f0.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["any-dropdown",[[1,"any-dropdown",{"options":[16],"optionLabel":[1,"option-label"],"inputId":[1,"input-id"],"name":[1],"optionValue":[1,"option-value"],"placeholder":[1],"dropdownIcon":[1,"dropdown-icon"],"clearIcon":[1,"clear-icon"],"baseZIndex":[1,"base-z-index"],"showAnimation":[1,"show-animation"],"hideAnimation":[1,"hide-animation"],"anyTabIndex":[2,"any-tab-index"],"anyStyle":[8,"any-style"],"panelScrollHeight":[1,"panel-scroll-height"],"showClear":[4,"show-clear"],"autoZIndex":[4,"auto-z-index"],"value":[1032],"disabled":[4],"readonly":[4],"virtualScroll":[4,"virtual-scroll"],"isOpened":[32]},[[4,"click","handleClick"]]]]],["any-checkbox",[[1,"any-checkbox",{"checked":[1028],"binary":[4],"inputId":[1,"input-id"],"name":[1],"value":[1032],"label":[1],"anyStyle":[8,"any-style"],"styleClass":[8,"style-class"],"labelStyleClass":[1,"label-style-class"],"disabled":[4],"readonly":[4],"checkboxIcon":[1,"checkbox-icon"],"focused":[32],"inputFocus":[64]}]]],["any-input-text",[[6,"any-input-text",{"value":[1025],"inputId":[1,"input-id"],"name":[1],"label":[1],"floatLabel":[4,"float-label"],"inputWrapperClass":[1,"input-wrapper-class"],"disabled":[4],"readonly":[4],"placeholder":[1],"rightIconClass":[1,"right-icon-class"],"leftIconClass":[1,"left-icon-class"],"getInputRef":[64]}]]],["any-virtual-scroller",[[6,"any-virtual-scroller",{"items":[16],"scrollerHeight":[8,"scroller-height"],"itemSize":[2,"item-size"],"lazy":[4],"rowsPerPage":[1026,"rows-per-page"],"anyStyle":[8,"any-style"],"styleClass":[1,"style-class"],"itemTag":[1,"item-tag"],"contentElemTag":[1,"content-elem-tag"],"noDataText":[1,"no-data-text"],"delay":[2],"contentElemClass":[1,"content-elem-class"],"scrollElemClass":[1,"scroll-elem-class"],"itemElemClass":[1,"item-elem-class"]}]]],["any-listbox",[[1,"any-listbox",{"options":[16],"optionLabel":[1,"option-label"],"inputId":[1,"input-id"],"name":[1],"optionValue":[1,"option-value"],"value":[1032],"anyStyle":[8,"any-style"],"listStyle":[8,"list-style"],"disabled":[4],"readonly":[4],"scrollerHeight":[1,"scroller-height"],"virtualScroll":[4,"virtual-scroll"]}]]]], options);
});
