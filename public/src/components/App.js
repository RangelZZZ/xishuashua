'use strict';

import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            time: '',
            bestId:0,
            bestTime:'',
        }
    }

    getId(id) {
        this.setState({
            id: id
        })
    }

    getBestId(id){
        this.setState({
            bestId:id
        })
    }

    getTime(time) {
        this.setState({
            time: time
        })
    }

    getBestTime(time) {
        this.setState({
            bestTime: time
        })
    }

    render() {
        return (
            <div id={this.getId.bind(this)}>
                {this.props.children && React.cloneElement(this.props.children, {
                    id: this.state.id,
                    time: this.state.time,
                    bestId:this.state.bestId,
                    bestTime:this.state.bestTime,
                    onGetId: this.getId.bind(this),
                    onGetTime: this.getTime.bind(this),
                    onGetBestId:this.getBestId.bind(this),
                    onGetBestTime:this.getBestTime.bind(this),

                })}
            </div>
        )
    }
}

export default App;