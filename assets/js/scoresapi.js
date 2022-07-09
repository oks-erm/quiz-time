const scoresApi = 'https://script.google.com/macros/s/AKfycbzmhHsObl3D2T5_ucf7EuBo4ZqTvuCpF4byF-2Vhtx0aYHcoQQHe7ZZCShl8O2Gwjp0/exec';

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