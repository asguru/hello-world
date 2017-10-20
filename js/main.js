// Accesing the canvas that exists in index.html
var ctx = document.getElementById('lineChart').getContext('2d');

// Creating a new chart
var chart = new Chart(ctx, {
    // The type of chart to be created; it is scatter because scatter is the best option from ChartJS for displaying the survival plot results and worked better than line
    type: 'scatter',
    
    // The data for our dataset
    data: {
        datasets: [{
            // Label that shows up in the legend
            // This is the first dataset with the first set of patients
            label: "Treatment 1",
            backgroundColor: 'rgb(25, 99, 132)',
            fill: 'false',
            // steppedLine: 'before' makes the dots on the scatterplot connected by the stepped line like they are in survival plots, and the step occurs before the line moves down
            steppedLine: 'before',
            borderColor: 'rgb(25, 99, 132)',
            pointRadius: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
            // This is the format in which data is inputted
            data: [{
                x: 13,
                y: 1
            }, {
                x: 82,
                y: 1
            }, {
                x: 206,
                y: 0.956521739
            }, {
                x: 211,
                y: 0.913043478
            }, {
                x: 250,
                y: 0.869565217
            }, {
                x: 408,
                y: 0.826086957
            }, {
                x: 486,
                y: 0.782608696
            }, {
                x: 522,
                y: 0.739130435
            }, {
                x: 544,
                y: 0.695652174
            }, {
                x: 590,
                y: 0.649275362
            }, {
                x: 665,
                y: 0.602898551
            }, {
                x: 739,
                y: 0.552657005
            }, {
                x: 778,
                y: 0.502415459
            }, {
                x: 795,
                y: 0.452173913
            }, {
                x: 974,
                y: 0.395652174
            }, {
                x: 1670,
                y: 0.339130435
            }, {
                x: 1869,
                y: 0.282608696
            }, {
                x: 1949,
                y: 0.282608696
            }]
        }, {
            // This is the second dataset with the second set of patients
            label: "Treatment 2",
            backgroundColor: 'rgb(180, 12, 1)',
            fill: 'false',
            steppedLine: 'before',
            borderColor: 'rgb(180, 12, 1)',
            pointRadius: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
            data: [{
                x: 35,
                y: 1
            }, {
                x: 55,
                y: 1
            }, {
                x: 69,
                y: 0.954545455
            }, {
                x: 106,
                y: 0.906818182
            }, {
                x: 253,
                y: 0.859090909
            }, {
                x: 278,
                y: 0.811363636
            }, {
                x: 324,
                y: 0.763636364
            }, {
                x: 510,
                y: 0.704895105
            }, {
                x: 539,
                y: 0.646153846
            }, {
                x: 550,
                y: 0.587412587
            }, {
                x: 565,
                y: 0.522144522
            }, {
                x: 615,
                y: 0.456876457
            }, {
                x: 651,
                y: 0.380730381
            }, {
                x: 685,
                y: 0.304584305
            }, {
                x: 734,
                y: 0.228438288
            }, {
                x: 859,
                y: 0.152292152
            }, {
                x: 893,
                y: 0.152292152
            }, {
                x: 1048,
                y: 0.152292152
            }]
        }]
    },
    
    // Configuration options go here
    options: {
        title: {
            display: true,
            position: 'top',
            text: 'Survival Plot'
        },
        
        scales: {
            //For configuring axes, adjusting tick marks on graph and labeling the axes mainly
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Survival time (days)"
                },
                
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 2000
                }
            }],
            
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Probability of survival"
                },
                
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 1
                }
            }]
        },
        
        tooltips: {
            
        },
        
        layout: {
            // Just padding around the survival plot to make it look nicer
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
        }
    }
});

