$(document).ready(function () {
    var scienceCategories = 3;
    var categories = 7;
    var players = 7;

    var scienceScores = new Array(scienceCategories);
    var scienceScoreNames = ["tablets", "compasses", "gears"];

    var score = 0;
    var scoreNames = ["battle", "money", "wonder", "civilian", "commerce", "sciencetotal", "guild"];
    var totalScoreNames = scoreNames.concat(scienceScoreNames);
    totalScoreNames.push("total");
    $("#playernumbers").val(players);

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

    $("#clear").click(function () {
        for (var j = 0; j < players; j++) {
            var currentPlayer = j + 1;
            for (var k = 0; k < totalScoreNames.length; k++) {
                $("#player" + currentPlayer + totalScoreNames[k]).val("");
            }
        }
    })

    function calculatePlayerScore(playerNumber) {
        calculatePlayerScienceScore(playerNumber);
        var total = 0;
        for (var l = 0; l < categories; l++) {
            score = +$(playerNumber + scoreNames[l]).val();
            total += score;
        }
        return total;
    }

    function calculatePlayerScienceScore(playerNumber) {
        var scienceTotal = 0;
        for (var m = 0; m < scienceCategories; m++) {
            scienceScores[m] = +$(playerNumber + scienceScoreNames[m]).val();
            scienceTotal += (scienceScores[m] * scienceScores[m]);
        }
        scienceTotal += (Math.min(...scienceScores) * 7);
        $(playerNumber + "sciencetotal").val(scienceTotal);
    }
});
