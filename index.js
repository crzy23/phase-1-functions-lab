// Code your solution in this file!
 const hq = 42; // hq is at 42nd street

function distanceFromHqInBlocks(pickup) {
return Math.abs(pickup - hq)
}

function distanceFromHqInFeet(pickup) {
    return Math.abs(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceFromHqInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }
    else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.002;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else { 
        return 'cannot travel that far';
    }
}
