colours = [];
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
    colours.unshift(colour);
    draw_in_circles(colours);
  }
}

function delCir()
{
  var option = document.getElementsByName("options");
  if(option[0].checked)
  {
    colours.pop();
    draw_in_circles(colours);
  }
  else if(option[1].checked)
  {
    colours.shift();
    draw_in_circles(colours);
  }
}

paper.install(window);
paper.setup("canvas");
var max_radius = $("#canvas").width()/3;
var x_center = $("#canvas").width()/2;
var y_center = $("#canvas").height()/2;

function draw_in_circles(colours) {
  amount_circles = colours.length;
  for (i = 0; i < amount_circles; i++){
    var circle = new paper.Path.Circle(new Point(x_center, y_center), 
      max_radius * ((amount_circles - i) / amount_circles));
    circle.fillColor = colours[i];
    circle.strokeWidth = 0;
  }
}


// var button = document.getElementById('btn-download');
// button.addEventListener('click', function(e) {
//     var dataURL = canvas.toDataURL('image/png');
//     button.href = dataURL;
// });

// function ExampleCtrl(FileSaver, Blob) {
//   var vm = this;

//   vm.download = function(image) {
//     var data = new Blob([image], { type: 'image/png' });
//     FileSaver.saveAs(data, 'image.png');
//   };
// }

// angular
//   .module('fileSaverExample', ['ngFileSaver'])
//   .controller('ExampleCtrl', ['FileSaver', 'Blob', ExampleCtrl]);



// function canvas2Image() {
//     canvas.toBlob(function (blob) {
//         saveAs(blob, imageName+"."+format);
//     });
// }
function save_image() {
  var canvas = document.getElementsByName("canvas");
  canvas.toBlob(function(blob) {
      saveAs(blob, "pretty image.png");
  });
}


// function save_image() {
//   paper.view.element.toBlob(function(blob) { saveAs(blob, "image.png");});
// }

// var canvas = document.getElementsByName("canvas");
// var canvas_save = document.getElementsById("canvas-save");
// canvas_save.addEventListener("submit", function(event) {
//   event.preventDefault();
//   canvas.toBlobHD(function(blob) {
//     saveAs(
//         blob
//       , "circles.png"
//     );
//   }, "image/png");
// }, false);
