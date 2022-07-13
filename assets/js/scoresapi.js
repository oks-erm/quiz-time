const scoresApi = 'https://script.google.com/macros/s/AKfycbzIA1MZN9nf2StyYfkgo37jcFbo9KlVeoNhmdrDn-N7s58UxH1Ea8owr1w4TVX1AtVP/exec';

// Call scores from Google Spreadsheets
export async function callScores() {
    let scores = await jQuery.ajax({
        crossDomain: true,
        url: scoresApi,
        method: "GET",
        dataType: "json"
    });
    return scores;
}

// Post scores to Google Spreadsheets
export function postScores(currentScore, userName, utc) {
    let url = scoresApi + '?callback=&score=' + currentScore + '&name=' + userName + '&date=' + utc + '&action=insert';
    let request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}