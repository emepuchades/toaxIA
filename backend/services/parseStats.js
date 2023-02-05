const { getUserId } = require("./getUserID");

async function parseStats(statsCohere) {

    var percentageTotal = { Developer: 0, Gamer: 0, Positivo: 0, Toxico: 0 };
    var bestClassify = { Developer: { confidence: 0 }, Gamer: { confidence: 0 }, Positivo: { confidence: 0 }, Toxico: { confidence: 0 } };

    var isToxic = '';

    statsCohere.forEach(function (stats) {
        percentageTotal[stats.prediction] = (percentageTotal[stats.prediction] || 0) + 1;
        if (stats.prediction == 'Positivo') {
            if (bestClassify[stats.prediction].confidence < stats.confidence) {
                bestClassify[stats.prediction] = stats;
            }
        }
        if (stats.prediction == 'Toxico') {
            if (bestClassify[stats.prediction].confidence < stats.confidence) {
                bestClassify[stats.prediction] = stats;
            }
        }
        if (stats.prediction == 'Developer') {
            if (bestClassify[stats.prediction].confidence < stats.confidence) {
                bestClassify[stats.prediction] = stats;
            }
        }
        if (stats.prediction == 'Gamer') {
            if (bestClassify[stats.prediction].confidence < stats.confidence) {
                bestClassify[stats.prediction] = stats;
            }
        }

    });

    if (percentageTotal['Positivo'] >= percentageTotal['Toxico']) {
        isToxic = 'Negativo';
    } else { isToxic = 'Positivo'; }

    return { statsCohere, percentageTotal, isToxic: isToxic, bestClassify: bestClassify };
}

module.exports = { parseStats }
