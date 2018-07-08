colours = [];
function addCir(colour)
{
  var option = document.getElementsByName("options");
  if(option[0].checked)
  {
    colours.push(colour);
    draw_circles(colours);
  }
  else if(option[1].checked)
  {
    colours.unshift(colour);
    draw_circles(colours);
  }
}

function delCir()
{
  var option = document.getElementsByName("options");
  if(option[0].checked)
  {
    colours.pop();
    draw_circles(colours);
  }
  else if(option[1].checked)
  {
    colours.shift();
    draw_circles(colours);
  }
}


var width = $("#holder").width();
var height = $("#holder").height();

var max_radius = height / 2;
var x_center = width / 2;
var y_center = height / 2;

var paper = Raphael("holder", width, height);
paper.setViewBox(0, 0, width, height); // viewbox - задает область которая должна масштабироваться

// Атрибут preserveAspectRatio позволяет определить выравнивание отмасштабированного изображения относительно области просмотра.
// вот тут можно посмотреть пример http://xiper.net/learn/svg/svg-essentials/preserving-aspect-ratio
paper.canvas.setAttribute('preserveAspectRatio', 'xMinYMin meet');  

// убираем стандартные параметры размеров
paper.canvas.removeAttribute('width');
paper.canvas.removeAttribute('height');

function draw_circles(colours) {
  paper.clear();
  amount_circles = colours.length;
  for (i = 0; i < amount_circles; i++){
    var circle = paper.circle(x_center, y_center, max_radius * ((amount_circles - i) / amount_circles));
    circle.attr("fill", colours[i]);
    circle.attr("stroke-width", 0);
  }
}

// победный вариант
var button = document.getElementById('save');
function save_image(e) {
    var dataURL = canvas.toDataURL('image/jpeg');
    button.href = dataURL;
}

// function clear_canvas(){
//   paper.project.activeLayer.removeChildren();
// }

// canvas_save = document.getElementById("canvas-options");

// canvas_save.addEventListener("submit", function(event) {
//   event.preventDefault();
//   paper.view.element.toBlobHD(function(blob) {
//       saveAs(blob, "image.png");
//   }, "image/png");
// }, false);


// function save_image(event) {
//   ctx = paper.view.element.getContext("2d");
//   paper.view.element.toBlobHD(function(blob) {
//       saveAs(blob, "image.png");
//   }, "image/png");
// }

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
// function save_image() {
//   var canvas = document.getElementsByName("canvas");
//   canvas.toBlob(function(blob) {
//       saveAs(blob, "pretty image.png");
//   });
// }


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

