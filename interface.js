$(document).ready(function(){

  var scoreCard = new ScoreCard();
  $('#score').text(scoreCard.lastGo());
  $('#frames').text(scoreCard.frames());
  $('#balls').text(scoreCard.balls());
  $('#total').text(scoreCard.playerTotal());


  // function addScoreToTable(score) {
  //   var table = document.getElementById('score-table');
  //
  //   for (var i = 0; i < scoreCard.playerLog().length; i++){
  //
  //     var scoreToAdd = scoreCard.playerLog()[i];
  //     var cell = document.createElement('td');
  //     cell.innerHTML = scoreToAdd;
  //       row.appendChild(cell);
  //   }
  //   table.appendChild(row);
  // }

  // function addScoreToTable() {
  //   var table = $('#score-table');
  //   for (var i=0; i < )
  // }


  function updateScore(){
    $('#score').text(scoreCard.lastBowl());
  }

  function updateFrame(){
    $('#frames').text(scoreCard.frames());
  }

  function updateBalls(){
    $('#balls').text(scoreCard.balls());
  }

    function updateTotal(){
      $('#total').text(scoreCard.playerTotal());
    }

  // $.('#score').each(scoreCard.playerLog(), function(index, val)){
  //   console.log(val);
  // }
  // var newHTML = $.map(scoreCard._playerLog,function(value){
  //   return('<span>' + value + '</span>');
  // });
  // $('#array').html(newHTML.join(""));
function displayScore(){
  var arrayScore = scoreCard.playerLog();
  var newHTML = "";
  for (var i = 0; i < arrayScore.length; i ++) {
    newHTML = newHTML + '<span>' + arrayScore[i] + " " + '</span>';
  }
  $("#array-score").append(newHTML);
}
function spare(){
  if(scoreCard.isSpare()){
    $('#spare').text("SPARE!");
  }


}




function addScoreToTable(){
  var table = arrayToTable(scoreCard.playerLog(), {
    thead: true,
    attrs: {class: 'table'}
  })
  $('body').append(table);
}
  $('#enter-score').submit(function(event){
    event.preventDefault();
    var scoreBowl = parseInt($('#score-for-bowl').val());
    scoreCard.throw(scoreBowl);
    updateScore();
    updateFrame();
    updateBalls();
     displayScore();
    updateTotal();
    addScoreToTable()
    spare()
  });



});
