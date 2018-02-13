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
$('#inputWidth').on('change',function (event) {
  gridStuff.cols = $(event.target).val();
  makeGrid(cols,rows);
});
$('#inputHeight').on('change',function (event) {
  gridStuff.rows = $(event.target).val();
  makeGrid(cols,rows);
});
// When size is submitted by the user, call makeGrid()

function makeGrid(c,r) {

}
