import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

class TrainView extends LitElement {
	static styles = css`
		:host {
			display: flex;
			justify-content: center;
			color: white;
			width: 100%;
			font-family: monospace;
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

		.wrapper {
			display: flex;
			justify-content: center;
			width: 85%;
			min-height: 100%;
			margin-top: 20px;
			margin-bottom: 20px;
			background-color: #2e2e2e;
		}

		.train-list {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-grow: 2;
			padding: 20px;
			background-color: #1c1c1c;
		}

		.train-details {
			flex-grow: 1;
			display: flex;
			min-width: 180px;
			flex-direction: column;
			margin-left: 10px;
		}

		.inner-details-wrapper {
			padding: 20px;
			background-color: #1c1c1c;
		}

		.train-details-schedule {
			margin-top: 10px;
			background-color: #1c1c1c;
			padding: 20px;
		}

		.right-align {
			text-align: right;
		}

		.search-bar {
			width: 100%;
			margin-bottom: 10px;
		}

		.search {
			border: 1px solid #858585;
			background: transparent;
			color: #ffffff;
			font-family: monospace;
			padding: 0px;
		}

		.search:focus-visible {
			border-color: #ffffff;
		}

		.search:focus-visible {
			outline: none;
		}

		@media only screen and (max-width: 950px) {
			.wrapper {
				flex-direction: column-reverse;
				margin-top: 10px;
				width: 95%;
			}

			.train-details {
				margin-left: 0px;
				margin-bottom: 10px;
			}
		}

		@media only screen and (max-width: 600px) {
			.priority-3 {
				display: none;
			}
		}
	`;

	static properties = {
		currentTrain: {},
		currentTrainSchedule: {},
		location: {},
		searchFilter: "",
		data: [],
	};

	setCurrentTrain(train) {
		this.currentTrain = train;
		Router.go("/train-view/train/" + train.trainno);
	}

	firstUpdated() {
		super.firstUpdated();

		fetch(
			`https://api.allorigins.win/get?url=${encodeURIComponent(
				"http://www3.septa.org/hackathon/TrainView/"
			)}`
		).then((res) =>
			res.json().then((res) => {
				this.originalData = JSON.parse(res.contents);
				this.data = this.originalData;

				if (this.location.params.trainno) {
					this.currentTrain = this.data.filter((train) => {
						return train.trainno === this.location.params.trainno;
					})[0];

					fetch(
						`https://api.allorigins.win/get?url=${encodeURIComponent(
							`http://www3.septa.org/hackathon/RRSchedules/${this.location.params.trainno}`
						)}`
					).then((res) =>
						res.json().then((res) => {
							this.currentTrainSchedule = JSON.parse(
								res.contents
							);
						})
					);
				}
			})
		);
	}

	updateSearchFilter(event) {
		this.searchFilter = event.target.value;

		this.data = this.originalData.filter(
			(train) =>
				train.line
					.toLowerCase()
					.includes(this.searchFilter.toLowerCase()) ||
				train.trainno.includes(this.searchFilter)
		);
	}

	constructor() {
		super();
		// this.originalData = originalData;
		this.originalData = [];
		// this.currentTrainSchedule = originalScheduleData;
		this.currentTrainSchedule = [];
		this.data = this.originalData;
		this.currentTrain = {};
	}

	render() {
		return html`
			<div class="wrapper">
				<div class="train-list">
					<div class="search-bar">
						<label>Search</label>
						<input
							class="search"
							type="text"
							@keyup="${this.updateSearchFilter}"
						/>
					</div>
					<table>
						<tr>
							<th class="priority-1 right-align">Num.</th>
							<th class="priority-1 right-align">Status</th>
							<th class="priority-2">Line</th>
							<th class="priority-3">Next</th>
						</tr>
						${this.data.map(
							(entry) => html` <tr
								@click=${() => this.setCurrentTrain(entry)}
							>
								<td class="priority-1 right-align">
									${entry?.trainno}
								</td>
								<td
									class="priority-1 right-align"
									style="${entry?.late > 0
										? "color:red"
										: "color:green"}"
								>
									${entry?.late
										.toString()
										.padStart(2, "\xa0")}
									min
								</td>
								<td class="priority-2">${entry?.line}</td>
								<td class="priority-3">${entry?.nextstop}</td>
							</tr>`
						)}
					</table>
				</div>
				<div class="train-details">
					<div class="inner-details-wrapper">
						<div class="line">${this.currentTrain?.line}</div>
						<div class="train-number">
							${this.currentTrain?.trainno}
						</div>
						<div class="service">${this.currentTrain?.service}</div>
						<!-- TODO: Have some sort of placeholder when no train is selected -->
						<div class="status">
							${this.currentTrain?.late
								? this.currentTrain?.late + " min"
								: ""}
						</div>
						<div class="current-stop">
							${this.currentTrain?.currentstop}
						</div>
						<div class="next-stop">
							${this.currentTrain?.nextstop}
						</div>
						<div class="next-stop">
							<!-- Temporary fix, separate commas and replace with spaces
                             so text wraps and doesn't go out of bounds -->
							${this.currentTrain?.consist?.replaceAll(",", " ")}
						</div>
					</div>
					<div class="train-details-schedule">
						<table>
							<tr>
								<th class="priority-1">Station</th>
								<th class="priority-3">Est.</th>
								<th class="priority-1">Act.</th>
							</tr>
							${this.currentTrainSchedule.map(
								(entry) => html` <tr>
									<td class="priority-1">
										${entry?.station}
									</td>
									<td class="priority-3">${entry?.est_tm}</td>
									<td class="priority-1">
										${entry?.act_tm === "na"
											? ""
											: entry?.act_tm}
									</td>
								</tr>`
							)}
						</table>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define("train-view", TrainView);
