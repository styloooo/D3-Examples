//d3.selectAll takes a selector string, such as "circle"
//and returns a selection representing all elements that
//match the selector.
//var circle = d3.selectAll("circle");

var svg = d3.select("svg");

// var circle = svg.selectAll("circle")
// 	.data([32, 57, 112, 294]);

//With that selector, we can make various changes to 
//selected eements. 
// circle.style("fill", "steelblue");
//To set values on a per-element basis, we can use anonymous
//functions. The functions are evaluted once per selected 
//element. Anonymous functions are used extensively in D3,
//particularly in conjunction with scales and shapes. 
//This sets each circle's x-coordinate to a random value:
//circle.attr("cx", function () { return Math.random() * 720 });

//Selection.data binds data to an element:
// circle.data([32, 57, 122]);
//Data is specified as an array of values
//Selection is an array of elements
//First datum is bound to first element... so on. 
//After data is bound, it is accessible as the first arg
//to att and style functions. 
// circle.attr("r", function (data) { return Math.sqrt(data); });
// circle.attr("cx", function (data, index) { return index * 100 + 30; });

// circle.attr("r", function (data) { return Math.sqrt(data); });
// circle.attr("cx", function (data, index) { return index * 100 + 30; });

// //Enter contains any leftover data we don't have elements for
// var circleEnter = circle.enter().append("circle");

// circle.style("fill", "steelblue");
// circleEnter.attr("cy", 60);
// circleEnter.attr("cx", function (d, i) { return i * 100 + 30; });
// circleEnter.attr("r", function (d) { return Math.sqrt(d); });


//If we have no existing elements we need to join data to an empty selection
//All data ends up in enter
//selectAll + data + enter + append called sequentially

svg.selectAll("circle")
		.data([32, 57, 112, 293])
	.enter().append("circle")
		.attr("cy", 60)
		.attr("cx", function (d, i) { return i * 100 + 30; })
		.attr("r", function (d) { return Math.sqrt(d); });

var circle = svg.selectAll("circle");
circle.style("fill", "mediumpurple");