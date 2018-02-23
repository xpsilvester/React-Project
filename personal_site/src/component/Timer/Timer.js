import React, {Component} from 'react';

export default class Timer extends Component {
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
            <div>
                This is Timer!  Seconds: {this.state.seconds}
            </div>
        )
    }
}