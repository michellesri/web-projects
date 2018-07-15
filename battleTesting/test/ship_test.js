var expect = require('chai').expect;

describe('check for ship', function(){
  var checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinate', function(){

    player = {
      ships: [
        {
          locations: [[0,0],[0,1]]
        },
        {
          locations: [[2,5],[2,6],[2,7]]
        }
      ]
    };

    expect(checkForShip(player, [0,0])).to.be.false;

  });
});
