describe('ScoreCard', function(){
  var scorecard;
  beforeEach(function(){
    scorecard = new ScoreCard();
  })
  it('initialises with 10 frames', function(){
    expect(scorecard._frames).toEqual(10);
  })
  it('initialises with 2 balls', function(){
    expect(scorecard._balls).toEqual(2);
  })
  it('initialises with bonus set to false', function(){
    expect(scorecard._bonus).toBe(false);
  })
  it('once a frame has been rolled the frame is removed from the score card', function(){
    scorecard.removeFrame();
    expect(scorecard._frames).toEqual(9);
  })
  it('can throw a ball', function(){
    scorecard.throwBall();
    expect(scorecard._balls).toEqual(1);
  })
  it('keeps a record of the players current', function(){
    scorecard.playersThrow(9);
    expect(scorecard._playerScore).toEqual(9);
  })
  it('if a player throws a strike the bonus is set to true', function(){
    scorecard.playersThrow(10);
    expect(scorecard._bonus).toBe(true);
  })
  it('if player throws a strike they have no more balls to throw for the frame', function(){
    scorecard.playersThrow(10);
    expect(scorecard._balls).toEqual(0);
  })
  it('a players maximum score is 300', function(){
    for (var i; i < 21; i++){
      scoreCard.throw(10);
    }
    expect(scorecard.playerTotal()).toEqual(300);
  });

  describe('bonus', function(){
  it('can recognise if a player has scored a spare', function(){
    scorecard.throw(5);
    scorecard.throw(5);
    expect(scorecard.isSpare()).toBe(true);
  });
  it('will return false if the last go was not a spare', function(){
    scorecard.throw(6);
    scorecard.throw(3);
    expect(scorecard.isSpare()).toBe(false);
  })
  it('can recognise if a player has scored a strike', function(){
    scorecard.throw(10);
    expect(scorecard.isStrike()).toBe(true);
  });
  it('will return false if the last go was not a spare', function(){
    scorecard.throw(1);
    scorecard.throw(10);
    expect(scorecard.isStrike()).toBe(false);
  })
 })

});
