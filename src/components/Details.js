import React, {Component} from 'react'
 
export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            cpu: 1,
            ram: 1,
            storage: 25
        }
    }
 
    render(){
        return (
            <div>
                <p>Selected type is {this.props.active_type}</p>
                <p>Selected Region is {this.props.region}</p>
                <p>Selected Slider is {this.props.sliderValue}</p>
                <br/>
            </div>
        )
    }
}