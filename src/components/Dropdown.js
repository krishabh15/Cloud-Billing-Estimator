import React, { Component } from 'react'
import Select from 'react-select'

export default class Dropdown extends Component {

  constructor(props){
    super(props)
  }

  handlechange = (e) => {
    this.props.onChangefunc(e.value, this.props.it)
  }

  render() {
    return (
      <div>
        <Select value={this.props.opt.filter(option => option.value === 2)}
         options={this.props.opt} onChange={this.handlechange}/>
      </div>
    )
  }
}