function Frame() {
  this._pins = 10;
  this._balls = 2;
}

Frame.prototype.pinCount = function () {
  return this._pins;
};

Frame.prototype.removePin = function (pin) {
  if(this._pins <= 0){
    throw new Error('NO PINS REMAING');
    }
    this._pins -= (pin);
};
Frame.prototype.resetPins= function (pin) {
  this._pins -= 10;
};
Frame.prototype.resetPins= function (pin) {
  this._pins = 10;
};
Frame.prototype.removeBall = function (){
  this._balls -= 1;
};
Frame.prototype.addBall = function (){
  this._balls += 1;
};
Frame.prototype.resetBalls= function (pin) {
  this._balls = 2;
};
  Frame.prototype.isTwoBallsToThrow = function (){
    return this._balls === 2;
  };
  Frame.prototype.isOneBallToThrow = function (){
    return this._balls === 1;
  };

  Frame.prototype.balls = function (){
    return this._balls;
  };
  Frame.prototype.strike = function (){
    return this._strike;
  };
  Frame.prototype.spare = function (){
    return this._spare;
};
