var d3 = require('d3'),
    _ = require('lodash'),
    cloud = require('d3-cloud'),
    width = window.innerWidth,
    height = window.innerHeight;

var fill = d3.scaleOrdinal(d3.schemeCategory10);


var racingGreen = "#165131";

var jvmColors = [
    "#00e100",
    "#46dca5",
    "#00e6ff",
    "#0091ff",
    "#9664ff",
    "#ff32b4",
    "#ff4b41",
    "#ff7d00",
    "#ffbe23",
    "#e6e623"
];


var layout = cloud()
    .size([width, height])
    .words([
        "intrinsically", "utilize", "turnkey", "benefits", "conveniently", "evolve", "stand",-"alone", "synergy", "enthusiastically", "target", "unique", "leadership", "skills"
    ].map(function(d) {
      return {text: d, size: 40 + Math.random() * 90, test: "haha"};
    }))
    .padding(10)
    .rotate(function() { return (0) * 90; })
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

layout.start();

function draw(words) {
  d3.select("#cloud").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", function(d, i) { return _.sample(jvmColors); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}


