import React, { Component } from 'react'
import Button from './Button'
import VpcTypeData from './VpcTypeData'
import Sliders from './Slider'
import Barchart from './Barchart'
import Select from 'react-select'
import MainMenu from './MainMenu'
import './Style.css'

export default class Look extends Component {
    constructor() {
        super()
        this.state = {
            region: 'us-east',
            active_type: 'gp',
            sliderValue: 1,
            priceList: [],
            allMenus: []
        }
        this.fetchBill();
        this.fetchAllMenus();
        this.test();
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSlide = this.handleSlide.bind(this)
        this.fetchBill = this.fetchBill.bind(this)
        this.fetchAllMenus = this.fetchAllMenus.bind(this)
        this.test = this.test.bind(this)
    }

    handleClick = (e) => {
        this.setState({
            active_type: e,
            sliderValue: 1
        }, () => {
            this.fetchBill(e, 'click')
        })
    }

    handleChange = (e, index) => {
        if (index === 1) {
            this.setState({
                region: e,
                sliderValue: 1
            }, () => {
                this.fetchBill(e, 'change')
            })
        }
    }

    handleSlide = (e, newvalue) => {
        this.setState({
            sliderValue: newvalue
        });
    }

    fetchAllMenus = () => {
        fetch("http://localhost:3001/api/get")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ allMenus: data });
            });
    }

    fetchBill = (par, from) => {
        console.log(this.state)
        let urlfetchBill = "http://localhost:3001/api/getBill/?region="
        if (from == 'change') {
            if (par) {
                urlfetchBill = urlfetchBill + par + "&optimization_type=" + this.state.active_type;
            }
            else {
                urlfetchBill = urlfetchBill + this.state.region + "&optimization_type=" + this.state.active_type;
            }
        }
        else if (from == 'click') {
            if (par) {
                urlfetchBill = urlfetchBill + this.state.region + "&optimization_type=" + this.state.active_type;
            }
            else {
                urlfetchBill = urlfetchBill + this.state.region + "&optimization_type=" + this.state.active_type;
            }
        }
        else {
            urlfetchBill = urlfetchBill + this.state.region + "&optimization_type=" + this.state.active_type;
        }
        fetch(urlfetchBill)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    priceList: data[0]
                });
            });
    }

    test = () => {
        fetch("http://localhost:3001/api/test/?id=1&name=kesava")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    test: data
                });
            });
    }

    render() {
        let buttonComponent = VpcTypeData.map(VpcType => <Button id={VpcType.id} sel_btn={this.state.active_type} onClickfunc={this.handleClick} name={VpcType.val} />)
        let yValues = this.state.priceList.filter(row => row.row_num == this.state.sliderValue).map(a => a.price)
        let xValues = this.state.priceList.filter(row => row.row_num == this.state.sliderValue).map(a => a.service_provider)
        let sliderval = Math.max(...this.state.priceList.map(row => row.row_num))
        console.log('test:', sliderval)
        let colors = yValues.map(color => {
            if (color == Math.min(...yValues)) {
                return 'rgba(222,45,38,0.8)'
            }
            else {
                return '#1083eb'
            }
        })
        console.log('colors:', this.state.allMenus)
        return (
            <div className='row no-gutters bord'>
                <div className='col no-gutters'>
                    <div className='leftside'>
                        {buttonComponent}
                        <label className="rowC">
                            <br></br>
                            <br></br>
                            <div style={{display:'inline-grid'}}>
                                <span>Select Region:</span>
                                <br/>
                                <span><MainMenu onChangefunc={this.handleChange} it={1} /></span>
                            </div>
                        </label>
                        <br/>
                        <Sliders value={this.state.sliderValue} min={1} max={sliderval} step={1} onSlidefunc={this.handleSlide} />
                        <br/>
                        <div style={{textAlign:"center"}}> 
                            {this.state.priceList.filter(row =>
                                row.row_num == this.state.sliderValue).filter(row =>
                                    row.service_provider == 'Azure').map(val => {
                                        return (
                                            <div style={{border: "solid", borderBlockWidth:'10px'}}>
                                                <p>CPU - {val.v_CPU}</p>
                                                <p>RAM - {val.ram}</p>
                                                <p>STORAGE - {val.temp_storage}</p>
                                            </div>
                                        );
                                    })
                            }
                        </div>
                    </div>
                </div>
                <div className='col no-gutters'>
                    <div className='rightside'>
                        <Barchart yval={yValues} xval={xValues} colors={colors} />
                    </div>
                </div>
            </div>
        )
    }
}
