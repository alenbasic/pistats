$(document).ready(function(){
    $.ajax({
	    url: "json.php",
      method: "GET",
      success: function(data) {

	Chart.defaults.scale.gridLines.display = false;

	var cpu1 = [];
	var cpu2 = [];
	var cpu3 = [];
	var cpu4 = [];

	var memory = [];
	var temp = [];
	var date = [];

	for (var i in data) {
		var cpu = data[i][0].split(", ");
		cpu1.push(cpu[0]);
		cpu2.push(cpu[1]);
		cpu3.push(cpu[2]);
		cpu4.push(cpu[3]);
		memory.push(data[i][1]);
		temp.push(Math.round(data[i][2] * 100) / 100);
		date.push(new Date(Date.parse(data[i][3])));
	}

	var tempData = {
		
		labels: date,
		datasets : [
			{
				label: 'CPU Temperature',
				fill: true,
				backgroundColor:'rgb(255, 205, 86)',
				borderColor: 'rgb(255, 99, 132)',
				pointBorderColor: 'rgb(255, 99, 132)',
				pointRadius: 1,
				pointHoverRadius: 5,
				data: temp,
				pointHitRadius: 5,
				cubicInterpolationMode: "monotone"
			}
		]

	};

	var cpuData = {
		
		labels: date,
		datasets : [
			{
				label: 'CPU 1 Usage',
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				pointBorderColor: 'rgb(255, 99, 132)',
				pointRadius: 1,
				pointHoverRadius: 5,
				data: cpu1,
				pointHitRadius: 5,
				cubicInterpolationMode: "monotone"
			},
			{
				label: 'CPU 2 Usage',
				fill: false,
				backgroundColor: 'rgb(255, 205, 86)',
				borderColor: 'rgb(255, 205, 86)',
				pointBorderColor: 'rgb(255, 205, 86)',
				pointRadius: 1,
				pointHoverRadius: 5,
				data: cpu2,
				pointHitRadius: 5,
				cubicInterpolationMode: "monotone"
			},
			{
				label: 'CPU 3 Usage',
				fill: false,
				backgroundColor: 'rgb(75, 192, 192)',
				borderColor: 'rgb(75, 192, 192)',
				pointBorderColor: 'rgb(75, 192, 192)',
				pointRadius: 1,
				pointHoverRadius: 5,
				data: cpu3,
				pointHitRadius: 5,
				cubicInterpolationMode: "monotone"
			},
			{
				label: 'CPU 4 Usage',
				fill: false,
				backgroundColor:  "rgba(0,192,239,1)",
				borderColor:  "rgba(0,192,239,1)",
				pointBorderColor: "rgba(0,192,239,1)",
				pointRadius: 1,
				pointHoverRadius: 5,
				data: cpu4,
				pointHitRadius: 5,
				cubicInterpolationMode: "monotone"
			}
		]

	};

	var memData = {
		
		labels: date,
		datasets : [
			{
				label: 'Memory Usage',
				fill: true,
				backgroundColor: 'rgb(75, 192, 192)',
				borderColor: "rgba(0,192,239,1)",
				pointBorderColor: "rgba(0,192,239,1)",
				pointRadius: 1,
				pointHoverRadius: 5,
				data: memory,
				pointHitRadius: 5,
				cubicInterpolationMode: "monotone"
			}
		]

	};

		  var tempctx = $("#temperature");
		  var cpuctx = $("#cpu-usage");
		  var memctx = $("#memory-usage");

	      var tempGraph = new Chart(tempctx, {
		      type: 'line',
		  data: tempData,
		  options: {
			legend: {
                display: false
            },
			tooltips: {
				callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + '°C';
                }
            }},
			scales: {
				yAxes: [{
					ticks: {
						callback: function(value, index, values) {
							return value + '°C';
						},
						min: 40
					}
				}],
				xAxes: [{
					type: 'time',
					time: {
						unit: 'hour'
					},
					distribution: 'linear',
					scaleLabel: {
						display: true,
						labelString: 'CPU Temperature Over Time',
						fontSize: 15
					  }
				}]
			}
		},
			
		});

		var cpuGraph = new Chart(cpuctx, {
			type: 'line',
		data: cpuData,
		options: {
		  legend: {
			  display: true
		  },
		  tooltips: {
			  callbacks: {
			  label: function(tooltipItems, data) {
				  return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + '%';
			  }
		  }},
		  scales: {
			  yAxes: [{
				  ticks: {
					  callback: function(value, index, values) {
						  return value + '%';
					  },
					
				  }
			  }],
			  xAxes: [{
				  type: 'time',
				  time: {
					  unit: 'hour'
				  },
				  distribution: 'linear',
				  scaleLabel: {
					display: true,
					labelString: 'CPU Usage Over Time',
					fontSize: 15

				  }
			  }]
		  }
	  },
		  
	  });

		var memoryGraph = new Chart(memctx, {
			type: 'line',
		data: memData,
		options: {
		  legend: {
			  display: false
		  },
		  tooltips: {
			  callbacks: {
			  label: function(tooltipItems, data) {
				  return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + '%';
			  }
		  }},
		  scales: {
			  yAxes: [{
				  ticks: {
					  callback: function(value, index, values) {
						  return value + '%';
					  },
					  min: 0
					
				  }
			  }],
			  xAxes: [{
				  type: 'time',
				  time: {
					  unit: 'hour'
				  },
				  distribution: 'linear',
				  scaleLabel: {
					display: true,
					labelString: 'Memory Usage Over Time',
					fontSize: 15

				  }
			  }]
		  }
	  },
		  
	  });

      },
      error: function(data) {
        console.log(data);
      }
    });
  });
