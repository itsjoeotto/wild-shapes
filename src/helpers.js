export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateHitPoints(dice) {
    let totalHP = 0;

    for (var i = 1; i <= dice.num; i++) {
        totalHP = totalHP + getRandomIntInclusive(1, dice.diceType);
        console.log('totalhp', totalHP);
    }

    totalHP = totalHP + dice.modifier;

    if (totalHP > dice.average) {
        return totalHP;
    } else {
        console.log('could\'ve been: ', totalHP);
        return dice.average;
    }
}