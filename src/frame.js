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
