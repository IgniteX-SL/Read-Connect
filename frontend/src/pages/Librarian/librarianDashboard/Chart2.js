import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var $ = require('jquery');
 
var totalVisitors = 5000;
 
var visitorsDrilldownedChartOptions = {
    backgroundColor: "transparent",
	animationEnabled: true,
	theme: "light2",
	axisY: {
		gridThickness: 0,
		includeZero: false,
		lineThickness: 1
	},
	data: []
};
 
var newVSReturningVisitorsOptions = {
    backgroundColor: "transparent",
	animationEnabled: true,
	theme: "light2",
	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
		}
	},
	data: []
};
 
class Chart2 extends Component {
	constructor() {
		super();
		this.options = {};
		this.visitorsChartDrilldownHandler = this.visitorsChartDrilldownHandler.bind(this);
	}
	
	visitorsChartDrilldownHandler(e) {
		var chart = this.chart;
		chart.options = visitorsDrilldownedChartOptions;
		chart.options.data = this.options[e.dataPoint.name];
		chart.options.title = { text: e.dataPoint.name }
		chart.render();
		$("#backButton").toggleClass("invisible");
	}
	
	render() {	
		this.options = {
			"Reserved Books and Not Reserved Books": [{
                backgroundColor: "transparent",
				click: this.visitorsChartDrilldownHandler,
				cursor: "pointer",
				explodeOnClick: false,
				innerRadius: "75%",
				legendMarkerType: "square",
				name: "Reserved Books and Not Reserved Books",
				radius: "100%",
				showInLegend: true,
				startAngle: 90,
				type: "doughnut",
				dataPoints: [
					{ y: 500, name: "Reserved Books", color: "#3a5a40" },
					{ y: 4500, name: "Not Reserved Books", color: "#a3b18a" }
				]
			}],
			"Reserved Books": [{
                backgroundColor: "transparent",
				color: "#3a5a40",
				name: "Reserved Books",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2017"), y: 400 },
					{ x: new Date("1 Feb 2017"), y: 450 },
					{ x: new Date("1 Mar 2017"), y: 500 },
					{ x: new Date("1 Apr 2017"), y: 475 },
					{ x: new Date("1 May 2017"), y: 525 },
					{ x: new Date("1 Jun 2017"), y: 300 },
					{ x: new Date("1 Jul 2017"), y: 350 },
					{ x: new Date("1 Aug 2017"), y: 400 },
					{ x: new Date("1 Sep 2017"), y: 410 },
					{ x: new Date("1 Oct 2017"), y: 370 },
					{ x: new Date("1 Nov 2017"), y: 360 },
					{ x: new Date("1 Dec 2017"), y: 330 }
				]
			}],
			"Not Reserved Books": [{
                backgroundColor: "transparent",
				color: "#a3b18a",
				name: "Not Reserved Books",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2017"), y: 4600 },
					{ x: new Date("1 Feb 2017"), y: 4550 },
					{ x: new Date("1 Mar 2017"), y: 4500 },
					{ x: new Date("1 Apr 2017"), y: 4525 },
					{ x: new Date("1 May 2017"), y: 4475 },
					{ x: new Date("1 Jun 2017"), y: 4700 },
					{ x: new Date("1 Jul 2017"), y: 4650 },
					{ x: new Date("1 Aug 2017"), y: 4600 },
					{ x: new Date("1 Sep 2017"), y: 4590 },
					{ x: new Date("1 Oct 2017"), y: 4630 },
					{ x: new Date("1 Nov 2017"), y: 4640 },
					{ x: new Date("1 Dec 2017"), y: 4670 }
				]
			}]
		}
		const buttonStyle={
			bordeRadius: '4px',
			padding: '8px',
			border: 'none',
			fontSize: '16px',
			backgroundColor: '#2eacd1',
			color: 'white',
			position: 'absolute',
			top: '10px',
			right: '10px',
			cursor: 'pointer',
		}
		return (
		<div>
			<CanvasJSChart options = {this.options} 
				 onRef={ref => this.chart = ref}
                 containerProps={{ width: '80%', height: '250px' }}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			<button className="btn invisible" id="backButton" style={buttonStyle}>&lt; Back</button>
		</div>
		);
	}
	
	componentDidMount(){
		var chart = this.chart;
		var options = this.options
			chart.options = newVSReturningVisitorsOptions;
			chart.options.data = options["Reserved Books and Not Reserved Books"];
			chart.render();
		
		$("#backButton").click(function() { 
			$(this).toggleClass("invisible");
			chart.options = newVSReturningVisitorsOptions;
			chart.options.data = options["Reserved Books and Not Reserved Books"];
			chart.render();
		});
	}
}
 
export default Chart2; 