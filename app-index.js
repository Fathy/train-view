import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

import "./train-view.js";
import "./next-arrive.js";

class AppIndex extends LitElement {
    static styles = css``;
    static properties = {};

    get main() {
        return this.renderRoot?.querySelector("main");
    }

    constructor() {
        super();
    }

    firstUpdated() {
        super.firstUpdated();
        const router = new Router(this.main);

        router.setRoutes([
            { path: "/", component: "train-view" },
            { path: "/train/:trainno", component: "train-view" },
            { path: "/next", component: "next-arrive" },
        ]);
    }

    render() {
        return html`<main></main>`;
    }
}

customElements.define("app-index", AppIndex);
