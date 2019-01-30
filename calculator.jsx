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
		this.clear = this.clear.bind(this);
	}

	setNum1(e) {
		this.setState({
			num1: event.target.value
		});
	};

	setNum2(e) {
		this.setState({
			num2: event.target.value
		});
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

	clear(e) {
		e.preventDefault();
		this.setState({
			result: 0,
			num1: "",
			num2: ""
		});
	}

	render() {
		return (
			<div>
				<span className="titles json">STATE => {JSON.stringify(this.state)}</span><br />
				<span className="titles result">RESULT => {this.state.result}</span> <br />
				<span className="label">NUM1: </span><input onChange={this.setNum1}  type="text" value={this.state.num1}></input> <br />
				<span className="label">NUM2: </span><input onChange={this.setNum2}  type="text" value={this.state.num2}></input> <br /> <br />
				<button className="summarize" onClick={this.summarize}>ADD</button> <br />
				<button className="subtract" onClick={this.subtract}>SUBTRACT</button> <br />
				<button className="multiply" onClick={this.multiply}>MULTIPLY</button> <br />
				<button className="divide" onClick={this.divide}>DIVIDE</button> <br /><br />
				<button className="clear" onClick={this.clear}>CLEAR</button>
			</div>
		);
	}
}

export default Calculator;
