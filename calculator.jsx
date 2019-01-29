import React from "react";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			result: 0
		};
		this.increment = this.increment.bind(this);
	}

	increment(event)
	{
		this.setState({
			result: this.state.result + 1
		});
	};

	render() {
		return (
			<div>
				<h1 style={{backgroundColor: "red", color: "yellow"}}>RESULT = {this.state.result}</h1>
				<button onClick={this.increment}>Add One</button>
			</div>
		);
	}
}

export default Calculator;
