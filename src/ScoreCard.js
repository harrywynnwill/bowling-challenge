function ScoreCard(frame) {
  this._frames = 10;
  this._playerLog = [0];
  this._currentGo = [0];
  this._frame = frame;
  var strikeBall = 0;
  var strikeBall = 2;


}

ScoreCard.prototype.playerTotal = function () {
  var total = 0
  for(var i=0; i < this._playerLog.length; i++) {
    for(var j= 0; j < this._playerLog[i].length ; j++)
     total += this._playerLog[i][j] << 0 ;
  }
  return total;
};

ScoreCard.prototype.removeFrame = function () {
  this._frames -= 1;
};
ScoreCard.prototype.throwBall = function () {
  this._balls -= 1;
};

ScoreCard.prototype.playerLog = function () {
  return this._playerLog;
};
ScoreCard.prototype.currentGo = function () {
  return this._currentGo;
};
ScoreCard.prototype.lastFrameTotal = function () {
  var lastFrame = this.playerLog()[this.playerLog().length-1];
  var totalForFrame = 0;
  for(var i=0; i < lastFrame.length; i++) {
     totalForFrame += lastFrame[i] << 0 ;
  }
  return totalForFrame;
};
//work on last Go its not returnign the last Go
ScoreCard.prototype.lastFrame = function () {
  return this.playerLog()[this.playerLog().length-1];

};




ScoreCard.prototype.lastGo = function () {
  if(this.currentGo() == 0 && this.playerLog() == 0){
    return "its a new game no balls played";
  }
  else if(this.currentGo() == 0 && this.playerLog().length >= 2) {
    var last =0;
    for( var i = 0; i < this._playerLog.length ; i++){
       last = this._playerLog[i][this._playerLog[i].length-1];
    }
    return last;
    //return this._playerLog[this._playerLog.length -1];
  }
  else{
    return this.currentGo()[this.currentGo().length -1];
  }
};

// ScoreCard.prototype.lastLastGo = function () {
//   return this._playerLog[this._playerLog.length -2]
// };
ScoreCard.prototype.isSpare = function () {
  if(this.currentGo() == 0 && this.playerLog() == 0){
    return false
  }
  else {
  // var totalForGo = 0;
  // for (var i = 0; i < this.lastGo().length; i++){
  //   totalForGo += this.lastGo()[i];
  // }
  // return totalForGo === 10;
  return this.lastFrameTotal() === 10;
}
};
ScoreCard.prototype.isStrike = function () {
  if(this.lastGo()=== "its a new game no balls played"){
    return false
  }
  else {
  return this.playerLog()[this.playerLog().length-1][this.playerLog().length-1] === 10;
}
};
// ScoreCard.prototype.isSpare = function () {
//   if(this.lastGo()=== undefined){
//     return false
//   }
//   else {
//   return this.lastFrameTotal() === 10;
// }
// };
// ScoreCard.prototype.isNotStrike = function () {
//   return this.lastGo() === undefined || this.lastGo()[0]!==10;
// };
// ScoreCard.prototype.isNotSpare = function () {
//   return this.lastGo() === undefined || this.lastGo()[0] + this.lastGo()[1]!==10;
// };

ScoreCard.prototype.frames = function (){
  return this._frames;
};
ScoreCard.prototype.lastFrameFirstBall = function (){
  return this.lastFrame.length-1;
};


ScoreCard.prototype.throw = function (score) {

  if (this._frame.isTwoBallsToThrow() && score === 10 && this.isStrike()===false){
    this._currentGo.push(score);
    this.playerLog().push(this._currentGo);
    this._currentGo = [];
    this.removeFrame();
    this._frame.resetBalls();

  }
  // else if(this._frame.isTwoBallsToThrow() && this.isSpare()===true){
  //   this._currentGo.push(score);
  //   this._frame.removePin(score);
  //   this._frame.removeBall();
  //   this.lastFrame().splice([this.lastFrame().length],0,(score))
  // }
  // else if (this._frame.isOneBallToThrow() && this.isSpare()===true){
  //   this._currentGo.push(score);
  //   this._frame.removePin(score);
  //   this.removeFrame();
  //   this._frame.resetBalls();
  //   this.playerLog().push(this._currentGo);
  //   this._currentGo = [];
  //   this._frame.resetPins();
  //
  // }
  else if(this._frame.isTwoBallsToThrow() && this.isStrike()===true || this.isSpare()===true){
    this._currentGo.push(score);
    this._frame.removePin(score);
    this._frame.removeBall();
    this.lastFrame().splice([this.lastFrame().length],0,(score))
  }
  else if (this._frame.isOneBallToThrow() && this.isStrike()===true){
    this._currentGo.push(score);
    this._frame.removePin(score);
    this.removeFrame();
    this._frame.resetBalls();
    this.lastFrame().splice([this.lastFrame().length],0,(score))
    this.playerLog().push(this._currentGo);
    this._currentGo = [];
    this._frame.resetPins();

  }
  else if(this._frame.isTwoBallsToThrow()){
    this._currentGo.push(score);
    this._frame.removePin(score);
    this._frame.removeBall();
  }

  else if (this._frame.isOneBallToThrow()){
    this._currentGo.push(score);
    this._frame.removePin(score);
    this.removeFrame();
    this._frame.resetBalls();
    this.playerLog().push(this._currentGo);
    this._currentGo = [];
    this._frame.resetPins();

    // if(this.lastFrame()[0]==10 && this.lastFrame().length < 3){
    //     this.lastFrame().splice([this.lastFrame().length],0,(score))
    // }
  }
}
  // else if(this.isSpare() && this.balls()===2){
  //   //this._playerLog.push(score);
  //   this._playerLog.push(10);
  //   this._playerLog.push(score);
  //   this.removeFrame();
  //   this.addBall();
  // }

  //if(score === 10 && this.balls()===2 && this.isstrikeBonusOne()===false){
  //   this.strikeBonusOneOn();
  //   this.strikeBonusTwoOn();
  //   this._playerLog.push(10);
  //   this.removeFrame();

  // if(this.isStrike() && this.balls()===2){
  //   this._playerLog.push(score);
  //   this._playerLog.push(10);
  //   this.removeFrame();
  //   this.playerStrike();
    // if(score === 10 && this.balls()===2 ){
    //   this._playerLog.push(score);
    //   this._playerLog.push(10);
    // }

  // if (this.lastGo === 10 && this.lastLastGo === 10) {
  //   // this is going to be the code for a player throwing a player a strikeBonusOneOff
  //   this._playerLog.push(10);
  //   this._playerLog.push(10);
  //   this.removeFrame();
  //
  // }
  // else if (this.lastGo === 10 && this.lastLastGo !== 10) {
  //   // this is going to be the code for a player throwing a player a strikeBonusOneOff
  //   this._playerLog.push(10);
  //
  //   this.removeFrame();
  //
  // }

//   else if(this.isstrikeBonusOne()){
//     this._playerLog.splice([this._playerLog.length -1],0,(score));
//     this._playerLog.push(score);
//     this.strikeBonusOneOff();
//     this.throwBall();
// }
// else if (this.isstrikeBonusTwo()) {
//     this._playerLog.splice([this._playerLog.length -2],0,(score));
//     this._playerLog.push(score);
//     this.strikeBonusTwoOff();
//     this.removeFrame();
//     this.resetBalls();
//
// }

 //  else if(this.strike() && this.balls()===2) {
 //
 //    this._playerLog.push(10);
 //    this.throwBall();
 //  }
 //  else if(this.strike() && this.balls()===1) {
 //    this._playerLog.push(score);
 //    this._playerLog.push(10);
 //    this.throwBall();
 //    this.resetStrike();
 //    this.removeFrame();
 //  }
 //
 //
 //  // else if (this.spare()) {
 //  //
 //  // }
 //  else if(this.balls()=== 1) {
 //    this._playerLog.push(score);
 //    this.removeFrame();
 //    this.resetBalls();
 // }
  // else{
  //   this._playerLog.push(score);
  //   this.throwBall();
  // }
// };

// ScoreCard.prototype.isStrike = function () {
//   return this.lastGo() === 10;
// };


// ScoreCard.prototype.balls = function (){
//   return this._balls;
// };
// ScoreCard.prototype.strike = function (){
//   return this._strike;
// };
// ScoreCard.prototype.spare = function (){
//   return this._spare;
// };
// ScoreCard.prototype.resetBalls = function (){
//   this._balls = 2;
// };
// ScoreCard.prototype.isTwoBallsToThrow = function (){
//   return this._balls === 2;
// };
// ScoreCard.prototype.isOneBallToThrow = function (){
//   return this._balls === 1;
// };
// ScoreCard.prototype.addBall = function (){
//   this._balls += 1;
// };

// ScoreCard.prototype.playerStrike = function () {
//   this._strike = true;
// };
// ScoreCard.prototype.playerSpare = function () {
//   this._spare = true;
// };
// ScoreCard.prototype.resetStrike = function () {
//   this._strike = false;
// };
// ScoreCard.prototype.resetSpare = function () {
//   this._spare = false;
// };
// ScoreCard.prototype.isstrikeBonusOne = function () {
//   return this._strikeBonusOne;
// };
// ScoreCard.prototype.isstrikeBonusTwo = function () {
//   return this._strikeBonusTwo;
// };
// ScoreCard.prototype.strikeBonusOneOn = function () {
//   this._strikeBonusOne = true;
// };
// ScoreCard.prototype.strikeBonusTwoOn = function () {
//   this._strikeBonusTwo = true;
// };
// ScoreCard.prototype.strikeBonusOneOff = function () {
//   this._strikeBonusOne = false;
// };
// ScoreCard.prototype.strikeBonusTwoOff = function () {
//   this._strikeBonusTwo = false;
// };
