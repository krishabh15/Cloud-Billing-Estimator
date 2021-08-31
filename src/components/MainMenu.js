import React, { Component } from 'react';
import Axios from 'axios'
import Select from 'react-select'



class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedOption: 'us-east',
        allMenus: []
      }
  }

  handlechange = (e) => {
    this.props.onChangefunc(e.label, this.props.it)
    this.setState({
      selectedOption : e.label
    })
  }

 fetchAllMenus = () => {
        fetch("http://localhost:3001/api/get")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({ allMenus: data });
          });
      }

  componentDidMount() {
    this.fetchAllMenus();
  }

  render() {
    return (
      <div>
        <Select value={this.state.allMenus.filter(option => option.label === this.state.selectedOption)} 
          options={this.state.allMenus} onChange={this.handlechange}/>
      </div>
    );
  }
}


export default MainMenu;