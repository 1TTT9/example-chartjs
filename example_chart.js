var data = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(220,220,220,0.5)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [65,59,90,81,56,55,40]
		},
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
		}
	]
}

var ctx = document.getElementById("chartcanvas").getContext("2d");
var myNewChartObj = new Chart(ctx);



myNewChartObj.Line(data);

var options = { animation : false};
// setInterval(func, Timestemp(unit:ms))
window.setInterval( function(){

	for (var i=0;i<2;i++)
	{
		data["datasets"][i]["data"].shift();
		data["datasets"][i]["data"].push(Math.round(Math.random()*100%85+15));
	}
	
	myNewChartObj.Line(data, options);

 }, 1000);
 
