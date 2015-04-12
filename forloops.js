// create canvas 600 × 200 at 10, 10 in box_div
var paper = Raphael(document.getElementById('box_div'), 600, 100);

// draw a row of numbered boxes
var boxes = [];
var nums = [];
for (var i = 0; i < 10; i++) {
    nums.push(paper.text(i*50 + 35, 35, i).attr({'font-size': 40}));
    boxes.push(paper.rect(i*50 + 10, 10, 50, 50));
}

var try_solution = function() {
    console.log("hai!");
}