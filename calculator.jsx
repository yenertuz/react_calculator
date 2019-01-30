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
		this.subtract = this.subtract.bind(this);
		this.multiply = this.multiply.bind(this);
		this.divide = this.divide.bind(this);
	}

	setNum1(e) {
		this.setState({
			num1: event.target.value
		});
		console.log(JSON.stringify(this.state));
	};

	setNum2(e) {
		this.setState({
			num2: event.target.value
		});
		console.log(JSON.stringify(this.state));
	};

	summarize(e) {
		e.preventDefault();
		this.setState({
			result: parseInt(this.state.num1) + parseInt(this.state.num2)
		});
	};

	subtract(e) {
		e.preventDefault();
		this.setState({
			result: parseInt(this.state.num1) - parseInt(this.state.num2)
		});
	};

	multiply(e) {
		e.preventDefault();
		this.setState({
			result: parseInt(this.state.num1) * parseInt(this.state.num2)
		});
	};

	divide(e) {
		e.preventDefault();
		this.setState({
			result: parseInt(this.state.num1) / parseInt(this.state.num2)
		});
	};

	render() {
		return (
			<div>
				<h1>JSON = {JSON.stringify(this.state)}</h1>
				<h1>RESULT = {this.state.result}</h1>
				NUM1: <input onChange={this.setNum1}  type="text" value={this.state.num1}></input> <br />
				NUM2: <input onChange={this.setNum2}  type="text" value={this.state.num2}></input> <br /> <br />
				<button style={{width: '200px'}}  onClick={this.summarize}>ADD!</button> <br />
				<button style={{width: '200px'}} onClick={this.subtract}>SUBTRACT!</button> <br />
				<button style={{width: '200px'}} onClick={this.multiply}>MULTIPLY!</button> <br />
				<button style={{width: '200px'}} onClick={this.divide}>DIVIDE!</button> <br />
			</div>
		);
	}
}

export default Calculator;
