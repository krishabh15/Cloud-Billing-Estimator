import React, { Component } from 'react'
import './Style.css';

export default class Button extends Component {
    constructor(props){
        super(props)
    }

    handleClick = (e) => {
        console.log('Button - e:', e)
        this.props.onClickfunc(e.target.id)
    }

    render() {
        return (
            <div>                
                <button id={this.props.id} className={(this.props.sel_btn == this.props.id) ? 'btn_selected' : 'btn'}
                onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}
