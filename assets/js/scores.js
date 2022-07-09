// Sort array of objects by highest score
export function sortScores(array) {
    array.sort((a, b) => {
        return b.Score - a.Score;
    });
}