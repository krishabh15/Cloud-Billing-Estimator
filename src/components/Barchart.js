import React, { Component } from 'react'
import Plot from 'react-plotly.js'

 

export default class Barchart extends Component {
    constructor(props){
        super(props)
    }

    render() {
        var xValue = ['digital Ocean', 'Amazon Web Services', 'Google Cloud', 'Azure'];
        var yValue = [960, 1714, 2330, 1121];
        var colors = ['rgba(222,45,38,0.8)', '#1083eb', '#1083eb', '#1083eb'];
        
        return (
            <div>
                <Plot 
                    data={[
                        {type: 'bar',
                            x: this.props.yval,
                            y: this.props.xval,
                            text: this.props.yval,
                            textposition: 'auto',
                            hoverinfo: 'none',
                            orientation:'h',
                            marker: {color: this.props.colors}
                        }
                    ]}
                    layout={ { margin: {
                        l: 250,
                        r: 50,
                        b: 50,
                        t: 50,
                        titlefont: { size:30 }
                      },
                      font: {
                        family: 'Arial',
                        size: 18,
                        color: '#000000'
                      },
                      paper_bgcolor: '#fffff',
                    
                        width:850, height: 500, title: 'Price Comparison'} }

                />
            </div>
        )
    }
}