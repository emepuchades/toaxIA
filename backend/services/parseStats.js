
async function parseStats(statsCohere) {

    var percentageTotal = { Developer: 0, Gamer: 0, Positivo: 0, Toxico : 0};
    var isToxic = '';

    statsCohere.forEach(function (stats) {
        percentageTotal[stats.prediction] = (percentageTotal[stats.prediction] || 0) + 1;
    });
    
     if (percentageTotal['Positivo'] >= percentageTotal['Toxico']) {
         isToxic = 'Positivo'; 
     } else {  isToxic = 'Toxico'; }
    

    console.log({ statsCohere, percentageTotal, isToxic: isToxic });
    return { statsCohere, percentageTotal, isToxic: isToxic };

}

module.exports = { parseStats }
