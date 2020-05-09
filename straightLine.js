var checkStraightLine = function(coordinates) {
    
    if (coordinates.length ===2) {
        return true
    }
    let firstXCoordinate = coordinates[0][0]
    let firstYCoordinate = coordinates[0][1]
    let DifferenceX = coordinates[1][0] - firstXCoordinate;
    let DifferenceY = coordinates[1][1] - firstYCoordinate;
    let slope = DifferenceY/DifferenceX 
    for(var i = 2 ; i < coordinates.length; i++) {
        let XCoordinate = coordinates[i][0]
        let YCoordinate = coordinates[i][1]
        let currentSlope = (YCoordinate - firstYCoordinate) / (XCoordinate - firstXCoordinate)
        if(currentSlope !== slope) {
            return false
        }
    }
    return true
};