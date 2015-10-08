/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['Food', '2011 Food Sales', '2000 Food Sales '],
        ['Beans, ', 8173400, 83408000],
        ['Tortilla, ', 3792000, 3344000],
        ['Cheese ', 2695000, 3896000],
        ['Turkey, ', 2099000, 15633000],
        ['Ribs, ', 1582900, 2364000]
    ]);

    var options = {
        title: 'Most popular foods among americans',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Sales in US',
            minValue: 0
        },
        vAxis: {
            title: 'Foods'
        },
        backgroundColor:"grey"
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
