// Select color input
var gridStuff = {
  color: '#ffffff',
  cols: 1,
  rows: 1
};

$('#colorPicker').on('input',function (event) {
  gridStuff.color = $(event.target).val();
});
// Select size input
$('#submit').on('click',function () {
  gridStuff.cols = $('#inputWidth').val();
  gridStuff.rows = $('#inputHeight').val();
  $('#pixelCanvas').children().remove();
  makeGrid(gridStuff.cols,gridStuff.rows);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(c,r) {
  for (x=1;x<=r;x++) {
    $('#pixelCanvas').append(
      "<tr class='xCord'></tr>"
    );
  }
  for (x=1;x<=c;x++) {
    $('.xCord').append("<td class='ycord'></td>");
  }
}
