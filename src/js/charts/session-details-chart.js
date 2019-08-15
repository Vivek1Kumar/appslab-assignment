// JavaScript Document

// answer_details
var BARCHARTEXMPLE = $('#answer_details');
var barChartExample = new Chart(BARCHARTEXMPLE, {
    type: 'bar',
    options: {
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: false
                },
                barThickness: 22,
                barPercentage: 1,
                categoryPercentage: 0.3

            }],
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                    max: 25,
                    stepSize: 5,
                },
                gridLines: {
                    borderDash: [0, 0],
                    color: "#E6EAF2"
                }
            }]
        },
         events: false,
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
         animation: {
                onComplete: function() {
                    var ctx = this.chart.ctx;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    var chart = this;
                    var datasets = this.config.data.datasets;

                    datasets.forEach(function(dataset, i) {
                        ctx.font = "12px Roboto";
                        ctx.fillStyle = "#666";
                        chart.getDatasetMeta(i).data.forEach(function(p, j) {
                            ctx.fillText(datasets[i].data[j] + "%", p._model.x, p._model.y - 20);
                        });
                    });
                }
            },
    },
    data: {
        labels: ["Correct", "Near Correct", "Incorrect", "Not Answered"],
        datasets: [{
                label: "My Class",
                data: [10.9, 4.0, 24.6, 21.1, 26.1, 14.7, 11.9, 7.3],
                backgroundColor: [
                    "#0fc155", "#4c7df0", "#E50E33", "#9B9B9B"
                ],

                borderWidth: 1,
                data: [19, 9, 11, 15],
            },
            {
                label: "Group",
                backgroundColor: [
                    "#B7ECCC", "#C9D8FA", "#F7B6C1", "#E1E0E1"
                ],

                borderWidth: 1,
                data: [10, 15, 12, 19],
            },
        ]
    }
});


// hand-raise

var barChartData = {
    labels: [
        "Not Answered",
        "Wrong Answered",
        "Right Answer",
        "Near to right Answer"
    ],
    datasets: [{
            label: "Group",
            backgroundColor: "#7cb5ec",
            borderColor: "#7cb5ec",
            borderWidth: 0,
            data: [900, 500, 900, 300]
        },
        {
            label: "My Class",
            backgroundColor: "#434348",
            borderColor: "#434348",
            borderWidth: 0,
            data: [950, 900, 400, 750]
        }
    ]
};

var chartOptions = {
    responsive: true,
    legend: {
        position: "top"
    },
    title: {
        display: false,
        text: "All Class"
    },
    scales: {
        xAxes: [{
            gridLines: {
               display: false,
                color: "#E6EAF2"
            },
            ticks: {
                fontSize: 12,
                fontColor: '#464646;',
                fontFamily: "'Roboto'",
                fontWeight: "500"
            },
             barThickness: 21,
             barPercentage: 1,
             categoryPercentage: 0.4

        }],
        yAxes: [{
            ticks: {
                //beginAtZero: true
                min: 0,
                max: 1250,
                stepSize: 250,
                fontSize: 12,
                fontColor: '#464646;',
                fontFamily: "'Roboto'",
                fontWeight: "500"
            },
            gridLines: {
                borderDash: [0, 0],
                color: "#E6EAF2"
            },

        }]
    }
}

window.onload = function() {
    var ctx = document.getElementById("hand-raise").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: "bar",
        data: barChartData,
        options: chartOptions
    });
};

// Date Picker

$(function() {
    $("#datepicker").datepicker({
        showOn: 'button',
        buttonImage: 'img/calender-icon.png',
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        showAnim: 'slideDown',
        duration: 'fast',
        dateFormat: 'dd-mm-yy'
    });
});

// Session Slide Section
$(document).ready(function() {
    $(".session-slide span").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next").click(function() {
        if ($(".session-slide span:visible").next().length != 0)
            $(".session-slide span:visible").next().show().prev().hide();
        else {
            $(".session-slide span:visible").hide();
            $(".session-slide span:first").show();
        }
        return false;
    });

    $("#prev").click(function() {
        if ($(".session-slide span:visible").prev().length != 0)
            $(".session-slide span:visible").prev().show().next().hide();
        else {
            $(".session-slide span:visible").hide();
            $(".session-slide span:last").show();
        }
        return false;
    });
});