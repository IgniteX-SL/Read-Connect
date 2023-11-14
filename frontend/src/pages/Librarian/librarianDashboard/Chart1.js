import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Chart1 extends Component {
	render() {
		const options = {
			// title: {
			// 	text: "Borrowal And Return Graph"
			// },
			// toolTip: {
			// 	shared: true
			// },
			// legend: {
			// 	verticalAlign: "top"
			// },
			axisY: {
				suffix: "%"
			},
			data: [{
				type: "stackedColumn100",
				color: "#3a5a40",
				name: "Borrowing",
				showInLegend: true,
				indexLabel: "{y}",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: "Day 01",   y: 60 },
					{ label: "Day 02",   y: 55 },
					{ label: "Day 03",   y: 57 },
					{ label: "Day 04",   y: 40 },
					{ label: "Day 05",   y: 50 },
					{ label: "Day 06",   y: 37 },
					{ label: "Day 07",   y: 41 },
				]
			},{
				type: "stackedColumn100",
				color: "#a3b18a",
				name: "Returning",
				showInLegend: true,
				indexLabel: "{y}%",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ label: "Day 01",   y: 40 },
					{ label: "Day 02",   y: 45 },
					{ label: "Day 03",   y: 43 },
					{ label: "Day 04",   y: 60 },
					{ label: "Day 05",   y: 50 },
					{ label: "Day 06",   y: 63 },
					{ label: "Day 07",   y: 59 },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}  containerProps={{ width: '100%', height: '290px' }} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Chart1;                            