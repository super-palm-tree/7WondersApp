$(document).ready(function () {
    var scienceCategories = 3;
    var categories = 7;
    var currentPlayers = 7;
    var maxPlayers = 7;

    var scienceScores = new Array(scienceCategories);
    var scienceScoreNames = ["tablets", "compasses", "gears"];

    var score = 0;
    var scoreNames = ["battle", "money", "wonder", "civilian", "commerce", "sciencetotal", "guild"];

    var totalScoreNames = scoreNames.concat(scienceScoreNames);
    totalScoreNames.push("total");

    $("#playernumber").val(currentPlayers);
    var rowNames = totalScoreNames;
    rowNames.push("name");

    $("#calculate").click(function () {
        for (var i = 0; i < currentPlayers; i++) {
            var playerNumber = "#player" + (i + 1);
         
            var total = calculatePlayerScore(playerNumber);

            $(playerNumber + "total").val(total);
        }

    });

    $(".science-row").click(function () {
        $(".scienceItems-row").slideToggle();
    });

    $("#clear").click(function () {
        for (var j = 0; j < maxPlayers; j++) {
            var currentPlayer = j + 1;
            for (var k = 0; k < totalScoreNames.length; k++) {
                $("#player" + currentPlayer + totalScoreNames[k]).val("");
            }
        }
    })

    $("#playernumber").change(function () {
        currentPlayers = $("#playernumber").val();
        for (var n = 0; n < maxPlayers; n++) {
            var currentPlayer = n + 1;
            for (var o = 0; o < rowNames.length; o++) {
                var inputID = "#player" + currentPlayer + rowNames[o];
                if (currentPlayer > currentPlayers) {
                    $(inputID).parent().addClass("grayedout");
                    $(inputID).attr("readonly", true);
                    $(inputID).val("");
                } else {
                    $(inputID).parent().removeClass("grayedout");
                    $(inputID).removeAttr("readonly");
                }
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
