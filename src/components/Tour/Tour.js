import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
	state = {
		showInfo: true,
	};

	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo,
		});
	};
	render() {
		const { id, city, img, name, info } = this.props.tour;
		const { removeTour } = this.props;
		return (
			<article className="Tour">
				<div className="img-container">
					<img src={img} alt="None"></img>
					<span className="close-btn" onClick={() => removeTour(id)}>
						<i class="fas fa-window-close"></i>
					</span>
				</div>
				<div className="Tour-info">
					<h3>{city}</h3>
					<h4>{name}</h4>
					<h5>
						info
						<span onClick={this.handleInfo}>
							<i class="fas fa-chevron-circle-down"></i>
						</span>
					</h5>
					{this.state.showInfo && <p>{info}</p>}
				</div>
			</article>
		);
	}
}
