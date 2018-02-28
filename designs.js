// Select color input
var gridStuff = {
  color: '#000000',
  cols: 1,
  rows: 1
};

pixelCanvas = $('#pixelCanvas')

$('#colorPicker').on('input',function (event) {
  gridStuff.color = $(event.target).val();
});
// Select size input

$('#submit').on('click',function () {
  gridStuff.cols = $('#inputWidth').val();
  gridStuff.rows = $('#inputHeight').val();
<<<<<<< HEAD
  if (gridStuff.cols <=30 && gridStuff.rows <=30) {
    $('#marquee').hide();
    $('#pixelCanvas').children().remove();
    $('button').text('start over');
    makeGrid(gridStuff.cols,gridStuff.rows);
}
=======
  if (gridStuff.cols <=100 && gridStuff.rows <=100) {
    $('#marquee').hide();
    pixelCanvas.children().remove();
    $('#submit').text('start over');
    makeGrid(gridStuff.cols,gridStuff.rows);
    $('#grid').addClass('showGrid');
  }
>>>>>>> master
});

// When size is submitted by the user, call makeGrid()

function makeGrid(c,r) {
  for (x=1;x<=r;x++) {
    pixelCanvas.append(
      "<tr class='xCord'></tr>"
    );
  }
  for (x=1;x<=c;x++) {
    $('.xCord').append("<td class='yCord'></td>");
  }
}

var paint = false;

<<<<<<< HEAD
$('#pixelCanvas').mousedown(function (event) {
=======
pixelCanvas.mousedown(function (event) {
>>>>>>> master
  event.preventDefault();
  paint = true;
});

$('body').mouseup(function () {
  paint = false;
});

<<<<<<< HEAD
$('#pixelCanvas').mouseover('td',function (event) {
  if (paint) {
=======
pixelCanvas.mouseleave(function () {
  paint = false;
});

pixelCanvas.mouseover('td',function (event) {
  event.stopPropagation();
  if (paint) {
    console.log(event.target);
>>>>>>> master
    $(event.target).css('background-color',gridStuff.color);
  }
});
