import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" }
        };
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    handleKeyDown(event) {
        if (event.key === 'ArrowRight' && this.state.renderBall) {
            this.moveRight();
        }
    }

    moveRight() {
        this.setState(prevState => ({
            ballPosition: {
                left: (parseInt(prevState.ballPosition.left) + 5) + "px"
            }
        }));
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div className="ball" style={this.state.ballPosition}></div>
                ) : (
                    <button className="start" onClick={this.buttonClickHandler}>Start</button>
                )}
            </div>
        );
    }
}

export default App;
