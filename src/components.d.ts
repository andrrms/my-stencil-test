/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppMain {
        "theme": "light" | "dark" | "system";
    }
}
declare global {
    interface HTMLAppMainElement extends Components.AppMain, HTMLStencilElement {
    }
    var HTMLAppMainElement: {
        prototype: HTMLAppMainElement;
        new (): HTMLAppMainElement;
    };
    interface HTMLElementTagNameMap {
        "app-main": HTMLAppMainElement;
    }
}
declare namespace LocalJSX {
    interface AppMain {
        "theme"?: "light" | "dark" | "system";
    }
    interface IntrinsicElements {
        "app-main": AppMain;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-main": LocalJSX.AppMain & JSXBase.HTMLAttributes<HTMLAppMainElement>;
        }
    }
}
