import { LitElement, html, css } from "lit";

import * as stopsData from "./stops.json";

import { Router } from "@vaadin/router";

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

		.wrapper button {
			border: 1px solid #858585;
			background: transparent;
			color: #ffffff;
			font-family: monospace;
			padding: 2px 5px;
			margin: 5px;
		}

		#search-button {
			background: #858585;
			color: #1c1c1c;
		}

		.button-area {
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

		.search option {
			background-color: #1c1c1c;
		}

		.title {
			display: block;
			font-size: 20px;
		}

		table {
			border-collapse: collapse;
			margin-bottom: 10px;
			width: 100%;
		}

		th {
			text-align: left;
		}

		td,
		th {
			padding: 0px 5px;
		}

		tr {
			cursor: pointer;
		}

		tr:nth-child(even) {
			background-color: #282828;
		}

		tr:hover:not(:first-child) {
			background-color: #707070;
		}

		.nta-details {
			width: 95%;
		}

		.right-align {
			text-align: right;
		}

		.on-time {
			color: green;
		}

		.late {
			color: red;
		}
	`;

	static properties = {
		startStop: "",
		endStop: "",
		ntaData: [],
	};

	firstUpdated() {
		super.firstUpdated();
	}

	constructor() {
		super();
		this.stopsList = stopsData
			.sort()
			.map((stop) => html`<option value="${stop}">${stop}</option>`);
	}

	getStatusClass(train) {
		if (train.orig_delay == "On time") {
			return "on-time";
		}

		return "late";
	}

	goToTrain(train) {
		Router.go(`/train-view/train/${train.orig_train}`);
	}

	getNtaData(start, end) {
		console.debug(
			`Getting NTA data for start stop [${start}] and end stop [${end}].`
		);
		fetch(
			`https://api.allorigins.win/get?url=${encodeURIComponent(
				`http://www3.septa.org/hackathon/NextToArrive/${start}/${end}/100`
			)}`
		).then((res) =>
			res.json().then((res) => {
				this.ntaData = JSON.parse(res.contents);
				console.debug("Successfully retrieved NTA data.");
			})
		);
	}

	search() {
		let startStation = this.startStopSelector.value;
		let endStation = this.endStopSelector.value;

		Router.go(`/train-view/next/${startStation}/${endStation}`);
	}

	swap() {
		[this.startStopSelector.value, this.endStopSelector.value] = [
			this.endStopSelector.value,
			this.startStopSelector.value,
		];
	}

	setStartEndFromUrl() {
		this.startStopSelector = this.renderRoot.querySelector("#startStop");
		this.endStopSelector = this.renderRoot.querySelector("#endStop");

		let start = this.location.params.start;
		let end = this.location.params.end;
		const startAndEndInUrl = start && end;

		if (startAndEndInUrl) {
			this.startStopSelector.value = start;
			this.endStopSelector.value = end;
		} else {
			// Set default stations
			start = "30th Street Station";
			end = "Suburban Station";
			this.startStopSelector.value = start;
			this.endStopSelector.value = end;
		}

		this.getNtaData(start, end);
	}

	firstUpdated() {
		super.firstUpdated();
		this.setStartEndFromUrl();
	}

	render() {
		return html`
			<div class="wrapper">
				<div class="title">Next to Arrive</div>
				<div class="search-unit">
					<label for="start-stop">Start</label>
					<select class="search" id="startStop">
						${this.stopsList}
					</select>
				</div>
				<div class="search-unit">
					<label for="end-stop">End</label>
					<select class="search" id="endStop">
						${this.stopsList}
					</select>
				</div>
				<div class="button-area">
					<button id="search-button" @click=${this.search}>
						Search
					</button>
					<button @click=${this.swap}>Swap</button>
				</div>
			</div>
			<div class="wrapper">
				<div class="title">Results</div>
				<div class="nta-details">
					<table>
						<tr>
							<th class="priority-1 right-align">Num.</th>
							<th class="priority-1 right-align">Status</th>
							<th class="priority-2">Line</th>
							<th class="priority-3">Depart</th>
						</tr>
						${this.ntaData?.map(
							(train) => html`<tr
								@click=${() => this.goToTrain(train)}
							>
								<td class="priority-1 right-align">
									${train.orig_train}
								</td>
								<td
									class="priority-1 right-align ${this.getStatusClass(
										train
									)}"
								>
									${train.orig_delay}
								</td>
								<td class="priority-2">${train.orig_line}</td>
								<td class="priority-3">
									${train.orig_departure_time}
								</td>
							</tr>`
						)}
					</table>
				</div>
			</div>
		`;
	}
}

customElements.define("next-arrive", NextArrive);
