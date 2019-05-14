import React, {Component} from 'react';

export class FbLike extends Component {
    constructor() {
        super()
        this.state = {
            liked : false,
            color: 'red',
            text: 'Like Me!'
        }
        this.clickLikeButton = this.clickLikeButton.bind(this)
    }

    clickLikeButton () {
        this.setState({
            liked: !this.state.liked,
            color: this.state.color === 'red' ? 'blue' : 'red',
            text: this.state.text === 'Like Me!' ? 'Liked! :)' : 'Like Me!'
        })

        /*Learning: I ran into a problem where I was trying to access new state, in this method, right after setState. But I just couldn't. setState() needs time
         * before you want to access new state (as it re-renders the element). You can setTimeout to wait but that is not a solution. Solutions are:
         * 1. Use callback of setState() to do something after getting a state - setState(updater[, callback])
         * 2. Use componentWillUpdate(nextProps, nextState, nextContext) and access new state via implicit nextState parameter*/
    }

    render() {
        let noOfLikes = 0
        if (this.state.liked == true) {
            noOfLikes =  noOfLikes + 1
        }
        else {
            if (noOfLikes != 0) {
                noOfLikes =  noOfLikes - 1
            }
        }
        return (
            <button style={{color:this.state.color}} onClick={this.clickLikeButton}>{this.state.text} ({noOfLikes})</button>
        )
    }
}