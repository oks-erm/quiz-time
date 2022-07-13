const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
const sheet = spreadsheet.getSheetByName('Sheet1')

// get values of the range and output this data
function json(Sheet1) {
  const data = sheet.getDataRange().getValues()
  const jsonData = convertToJson(data)
  return ContentService
        .createTextOutput(JSON.stringify(jsonData))
        .setMimeType(ContentService.MimeType.JSON)
}

// convert data to json
function convertToJson(data) {
  const headers = data[0]
  const raw_data = data.slice(1,)
  let json = []
  raw_data.forEach(d => {
      let object = {}
      for (let i = 0; i < headers.length; i++) {
        object[headers[i]] = d[i]
      }
      object.Date = Utilities.formatDate(object.Date, "Europe/London", "MMM dd yyyy")
      json.push(object)
  });
  return json
}

// handle get request
function doGet(e) {
  const action = e.parameter.action;
  const path = e.parameter.path
  // to insert scores to the sheet
  if(action == "insert") {
    return insert_value(e,sheet);
  }
  // to send data from the sheet
  return json(path)
}

//Recieve parameter and pass it to function to handle
function insert_value(request,sheet){
  const score = request.parameter.score;
  const name = request.parameter.name;
  const date = request.parameter.date;
  // add received data to the sheet
  let rowData = sheet.appendRow([score, name, date]);  
  let result="Insertion successful";
  result = JSON.stringify({
  "result": result
  });  

  return ContentService
  .createTextOutput(request.parameter.callback + "(" + result + ")")
  .setMimeType(ContentService.MimeType.JAVASCRIPT);   
  }

