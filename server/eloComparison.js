function eloComparison(winnerName, loserName, ratingWinner, ratingLoser){

    var expected1 = Math.pow((1 + Math.pow(10, ((ratingWinner - ratingLoser) / 400.0))), -1);
    var expected2 = Math.pow((1 + Math.pow(10, ((ratingLoser - ratingWinner) / 400.0))), -1);

    var k = 2 * 42;

    ratingWinner = ratingWinner + k * (1 - expected1);
    ratingLoser = ratingLoser + k * (0 - expected2);

    return { winnerName: ratingWinner, loserName: ratingLoser }
}

console.log(eloComparison("1","2",1200,1100))