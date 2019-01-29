import React from "react";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: 0,
			num1: "",
			num2: ""
		};

		this.setNum1 = this.setNum1.bind(this);
		this.setNum2 = this.setNum2.bind(this);
		this.summarize = this.summarize.bind(this);
	}

	setNum1(e) {
		this.setState({
			num1: event.currentTarget.value
		});
	};

	setNum2(e) {
		this.setState({
			num2: event.currentTarget.value
		});
	};

	summarize(e) {
		e.preventDefault();
		alert(JSON.stringify(this.state));
		this.setState({
			result: parseInt(this.state.num1) + parseInt(this.state.num2)
		});
	};

	render() {
		return (
			<div>
				<h1>RESULT = {this.state.result}</h1>
				NUM1: <input onChange={this.setNum1}  type="text" value={this.state.num1}></input> <br />
				NUM2: <input onChange={this.setNum2}  type="text" value={this.state.num2}></input> <br /> <br />
				<button onClick={this.summarize}>SUMMARIZE!</button>
			</div>
		);
	}
}

export default Calculator;
