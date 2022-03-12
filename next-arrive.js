import { LitElement, html, css } from "lit";

class NextArrive extends LitElement {
    static styles = css`
        :host {
            display: flex;
            align-items: center;
            flex-direction: column;
            color: white;
            width: 100%;
            font-family: monospace;
        }

        .wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 85%;
            max-width: 440px;
            min-height: 100%;
            margin-top: 20px;
            background-color: #1c1c1c;
        }

        .search-area {
            display: flex;
            flex-direction: row;
        }

        .search-unit {
            margin: 10px;
            display: flex;
            flex-direction: column;
        }

        .search-unit label {
            margin-bottom: 5px;
        }

        .search {
            border: 1px solid #858585;
            background: transparent;
            color: #ffffff;
            font-family: monospace;
            padding: 0px;
        }

        .title {
            display: block;
            font-size: 20px;
        }

        @media only screen and (max-width: 600px) {
            .search-area {
                flex-direction: column;
            }
        }
    `;

    static properties = {};

    firstUpdated() {
        super.firstUpdated();
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="wrapper">
                <div class="title">Next to Arrive</div>
                <datalist id="stops-list">
                    <option value="Ambler"></option>
                    <option value="Suburban Station"></option>
                </datalist>
                <div class="search-area">
                    <div class="search-unit">
                        <label for="start-stop">Start</label>
                        <input
                            class="search"
                            list="stops-list"
                            name="start-stop"
                        />
                    </div>
                    <div class="search-unit">
                        <label for="end-stop">End</label>
                        <input
                            class="search"
                            list="stops-list"
                            name="end-stop"
                        />
                    </div>
                </div>
                <button>Search</button>
            </div>
            <div class="wrapper">
                <div class="title">Results</div>
            </div>
        `;
    }
}

customElements.define("next-arrive", NextArrive);
