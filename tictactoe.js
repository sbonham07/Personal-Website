var turn = "X";

var span = document.getElementById("turnspan");

span.innerText = turn;

var cells = document.getElementsByTagName("td");

for(var i = 0; i < cells.length; i++) {
 cells[i].addEventListener('click', function(event)
        { var cell = event.target;
         if(cell.innerText == "") {
          cell.innerText = turn;
         if(turn == "X") { turn = "O"; }
         else { turn = "X"; }
         span.innerText = turn;
}
});
}