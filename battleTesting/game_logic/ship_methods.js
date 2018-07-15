function checkForShip(player, coordinates){
  var shipPresentArray, locations;

  for(var i = 0; i < player.ships.length; i++){
    locations = player.ships[i].locations;

    shipPresentArray = locations.filter(function(actualCoordinate){
      return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
    });

    if(shipPresentArray[0]){
      return true;
    }
  }
}

module.exports.checkForShip = checkForShip;


// For each ship,
// check the array of locations for a match
