$(document).ready(function () {
    var scienceCategories = 3;
    var categories = 7;
    var players = 8;

    var scienceScores = new Array(scienceCategories);
    var scienceScoreNames = ["tablets", "compasses", "gears"];

    var score = 0;
    var scoreNames = ["battle", "money", "wonder", "civilian", "commerce", "sciencetotal", "guild"];

    $("#calculate").click(function () {
        for (var i = 0; i < players; i++) {
            var playerNumber = "#player" + (i + 1);
         
            var total = calculatePlayerScore(playerNumber);

            $(playerNumber + "total").val(total);
        }

    });

    $(".science-row").click(function () {
        $(".scienceItems-row").slideToggle();
    });

    function calculatePlayerScore(playerNumber) {
        calculatePlayerScienceScore(playerNumber);
        var total = 0;
        for (var j = 0; j < categories; j++) {
            score = +$(playerNumber + scoreNames[j]).val();
            total += score;
        }
        return total;
    }

    function calculatePlayerScienceScore(playerNumber) {
        var scienceTotal = 0;
        for (var k = 0; k < scienceCategories; k++) {
            scienceScores[k] = +$(playerNumber + scienceScoreNames[k]).val();
            scienceTotal += (scienceScores[k] * scienceScores[k]);
        }
        scienceTotal += (Math.min(...scienceScores) * 7);
        $(playerNumber + "sciencetotal").val(scienceTotal);
    }
});
