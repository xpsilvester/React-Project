import React, {Component} from 'react';

export default class TestData extends Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}

	tick() {
		this.setState(prevState => ({
		  seconds: prevState.seconds + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

    render() {
        return (
            <div className="timer">
            	<h3>Timer</h3>
                <p>Seconds: {this.state.seconds}</p>
            </div>
        )
    }
}