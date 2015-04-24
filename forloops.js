var num_size = 40;
var text_size = 30;
var num_nums = 10;
var box_dim = 50;
var box_color = '#0ff';
var ans_text_y = 114;

// create canvas 600 × 200 at 10, 10 in box_div
var paper = Raphael(document.getElementById('box_div'), 600, 200);

// TODO: randomize correct parameters
var correct_params = [0, 10, 2];

// draw a row of numbered boxes to display goal
paper.text(45, 20, 'Goal:').attr('font-size', text_size);
var boxes = [];
for (var i = 0; i < num_nums; i++) {
	boxes.push(paper.rect(i*50 + 10, 35, box_dim, box_dim));
    paper.text(i*50 + 35, 60, i).attr('font-size', num_size);
}
// color boxes according to correct parameters
var colored_nums = [];
for (var i = correct_params[0]; i < correct_params[1]; i += correct_params[2]) {
 	boxes[i].attr('fill', box_color);
 	colored_nums.push(i);
}

// draw a row of numbered boxes to display the user's answer
paper.text(92, ans_text_y, 'Your Answer:').attr('font-size', text_size)
var boxes_guess = [];
for (var i = 0; i < num_nums; i++) {
    boxes_guess.push(paper.rect(i*50 + 10, 10 + 120, box_dim, box_dim));
    paper.text(i*50 + 35, 35 + 120, i).attr('font-size', num_size);
}

var correct_text = paper.text(92, 114, '').attr('font-size', text_size);

// runs when answer is submitted
var try_answer = function() {
	// clear previous answers
	for (var i = 0; i < num_nums; i++) {
		correct_text.remove();
	 	boxes_guess[i].attr('fill', '#fff');
	}

	// get input
    var init = parseInt(document.getElementById('init').value);
    var cond = parseInt(document.getElementById('cond').value);
    var update = parseInt(document.getElementById('update').value);
    
    // color boxes according to input
    var colored_nums_guess = [];
    for (var i = init; i < cond; i += update) {
	 	if (i >= 0 && i < boxes_guess.length) {
		 	boxes_guess[i].attr('fill', box_color);
		}
		colored_nums_guess.push(i);
	}

	// determine if answer is correct and display text accordingly
	var is_correct = (colored_nums.sort().join(',') ===
		colored_nums_guess.sort().join(','));
	if (is_correct) {
		correct_text = paper.text(260, ans_text_y, "CORRECT")
			.attr({'font-size': text_size, 'fill': '#0f0'});
	} else {
		correct_text = paper.text(275, ans_text_y, "INCORRECT")
			.attr({'font-size': text_size, 'fill': '#f00'});
	}
}