frame = new Frame;
scorecard = new ScoreCard(frame);
scorecard.throw(4);
scorecard.lastGo();
scorecard.throw(5);
scorecard.lastGo();
scorecard.throw(6);
scorecard.lastGo();
scorecard.throw(2);
scorecard.lastGo();
scorecard.throw(1);
scorecard.lastGo();
scorecard.lastFrame();



frame = new Frame;
scorecard = new ScoreCard(frame);
scorecard.throw(4);
scorecard.throw(6);
scorecard.isSpare();



var totalForGo = 0;
for (var i = 0; i < scorecard.().length; i++){
totalForGo += scorecard.lastGo()[i];
}
return totalForGo;

frame = new Frame();
scorecard = new ScoreCard(frame);
scorecard.throw(4);
scorecard.throw(6);
scorecard.isSpare();


frame = new Frame();
scorecard = new ScoreCard(frame);
scorecard.throw(5);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);
scorecard.throw(4);
scorecard.throw(5);


scorecard.playerLog()[scorecard.playerLog().length-1];


var last =0;
for( var i = 0; i < scorecard._playerLog.length ; i++){
   last = scorecard._playerLog[i][scorecard._playerLog[i].length-1];
}
last;


frame = new Frame();
scorecard = new ScoreCard(frame);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);
scorecard.throw(10);

scorecard.isStrike()
scorecard.playerLog()[scorecard.playerLog().length-1][0]

frame = new Frame();
scorecard = new ScoreCard(frame);
scorecard.throw(5);
scorecard.throw(5);


frame = new Frame();
scorecard = new ScoreCard(frame);
for (var i=0; i < 5; i++){
    scorecard.throw(5);
    scorecard.throw(5);
  }
