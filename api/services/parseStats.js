async function parseStats(statsCohere) {

    var totalPercentage = { Developer: 0, Gamer: 0, Positivo: 0, Toxico: 0 };
    var tweetMore = { Developer: { confidence: 0 }, Gamer: { confidence: 0 }, Positivo: { confidence: 0 }, Toxico: { confidence: 0 } };
    var isToxic = '';

    statsCohere.forEach(function (stats) {
        totalPercentage[stats.prediction] = (totalPercentage[stats.prediction] || 0) + 1;
        if (stats.prediction == 'Positivo') {
            if (tweetMore[stats.prediction].confidence < stats.confidence) {
                tweetMore[stats.prediction] = stats;
            }
        }
        if (stats.prediction == 'Toxico') {
            if (tweetMore[stats.prediction].confidence < stats.confidence) {
                tweetMore[stats.prediction] = stats;
            }
        }
        if (stats.prediction == 'Developer') {
            if (tweetMore[stats.prediction].confidence < stats.confidence) {
                tweetMore[stats.prediction] = stats;
            }
        }
        if (stats.prediction == 'Gamer') {
            if (tweetMore[stats.prediction].confidence < stats.confidence) {
                tweetMore[stats.prediction] = stats;
            }
        }

    });

    if (totalPercentage['Positivo'] >= totalPercentage['Toxico']) {
        isToxic = 'Negativo';
    } else { isToxic = 'Positivo'; }

    return { statsCohere, totalPercentage, isToxic: isToxic, tweetMore: tweetMore };
}

module.exports = { parseStats }
