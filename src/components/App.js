import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };
    }

    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.key === 'ArrowRight' && this.state.renderBall) {
            this.setState(prevState => ({
                ballPosition: { left: (parseInt(prevState.ballPosition.left) + 5) + "px" }
            }));
        }
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>
        } else {
            return <button onClick={() => this.buttonClickHandler()}>Start</button>
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}

export default App;
