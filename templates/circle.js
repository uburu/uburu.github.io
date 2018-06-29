colours = [];
out_colours = [];
function addCir(colour)
{
  var option = document.getElementsByName("options");
  if(option[0].checked)
  {
    colours.push(colour);
    draw_in_circles(colours);
  }
  else if(option[1].checked)
  {
    // сначала отрисовываются внешние круги потому что они могут перекрыть внутренние
    out_colours.push(colour);
    draw_out_circles(out_colours);
    draw_in_circles(colours);
  }
}

/////////////////////// new ///////////////////////////////
paper.install(window);
paper.setup("canvas");
var max_radius = $("#canvas").width()/6;
var x_center = $("#canvas").width()/2;
var y_center = $("#canvas").height()/2;

function draw_in_circles(colours) {
  amount_circles = colours.length;
  for (i = 0; i < amount_circles; i++){
    var circle = new paper.Path.Circle(new Point(x_center, y_center), 
      max_radius * ((amount_circles - i) / amount_circles));
    circle.fillColor = colours[i];
    circle.strokeWidth = 0;
    view.draw();
  }
}

function draw_out_circles(colours) {
  amount_circles = out_colours.length
  for (i = amount_circles - 1; i >= 0; i--) {
    var circle = new paper.Path.Circle(new Point(x_center, y_center), 
      max_radius * ((amount_circles + (i+1)) / amount_circles)); 
    circle.fillColor = colours[i];
    circle.strokeWidth = 0;
    view.draw();  
  } 
}
