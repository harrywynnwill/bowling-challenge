describe('ScoreCard', function(){
  var scorecard;
  var frame;
  beforeEach(function(){
    frame = new Frame();
    scorecard = new ScoreCard(frame);
  })
  it('the game has 10 frames', function(){
    expect(scorecard._frames).toEqual(10);
  })
  it('each frame has 2 balls', function(){
    expect(scorecard._frame._balls).toEqual(2);
  })
  // it('initialises with bonus set to false', function(){
  //   expect(scorecard._bonus).toBe(false);
  // })
  it('once a frame has been rolled the frame is removed from the score card', function(){
    scorecard.throw(4);
    scorecard.throw(4);
    expect(scorecard._frames).toEqual(9);
  })
  it('once a ball has been thrown the ball count is reduced', function(){
    scorecard.throw(4);
    expect(scorecard._frame._balls).toEqual(1);
  })

  // it('if a player throws a strike the bonus is set to true', function(){
  //   scorecard.playersThrow(10);
  //   expect(scorecard._bonus).toBe(true);
  // })

  it('if a player plays a game with no bonus features they have 20 throws', function(){
    for(var i = 0; i < 20; i ++){
      scorecard.throw(4);
    }
    expect(scorecard.frames()).toEqual(0)
  })



  it('if player throws a strike they have no more balls to throw for the frame', function(){
    scorecard.throw(10);
    expect(scorecard._frame._balls).toEqual(0);
  })
  it('a players maximum score is 300', function(){
    for (var i; i < 13; i++){
      scoreCard.throw(10);
    }
    expect(scorecard.playerTotal()).toEqual(300);
  });


  describe('#lastGo', function(){
  it('returns the last score after 1 ball rolled', function(){
    scorecard.throw(5);
    expect(scorecard.lastGo()).toEqual(5);
  });
  it('returns the last score after 3 ball rolled', function(){
    scorecard.throw(5);
    scorecard.throw(2);
    expect(scorecard._frames).toEqual(9);
    scorecard.throw(4);
    expect(scorecard.lastGo()).toEqual(4);
  });
  it('returns the last score after a strike rolled', function(){
    scorecard.throw(5);
    scorecard.throw(2);
    scorecard.throw(10);
    expect(scorecard.lastGo()).toEqual(10);
  });
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
  it('will return false if the last go was not a strike', function(){
    scorecard.throw(1);
    scorecard.throw(10);
    expect(scorecard.isStrike()).toBe(false);
  })
 })

});
