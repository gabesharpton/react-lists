import React, {Component} from 'react'
import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart1 extends Component {	
    render() {
      const options = {
        title: {
          text: "Schools in District A"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "School 1",  y: 10  },
                      { label: "School 2", y: 15  },
                      { label: "School 3", y: 25  },
                      { label: "School 4",  y: 30  },
                      { label: "School 5",  y: 28  }
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }
  
  export default Chart1