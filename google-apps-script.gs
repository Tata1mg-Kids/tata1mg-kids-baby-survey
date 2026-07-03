// Google Apps Script to collect GitHub Pages survey responses into Google Sheets.
// 1. Create a Google Sheet.
// 2. Extensions > Apps Script > paste this code.
// 3. Deploy > New deployment > Web app.
// 4. Execute as: Me. Who has access: Anyone.
// 5. Copy Web App URL and paste it into index.html as SUBMIT_URL.

const SHEET_NAME = 'Responses';

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  const data = JSON.parse(e.postData.contents || '{}');
  const keys = Object.keys(data);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(keys);
  }
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const row = headers.map(h => Array.isArray(data[h]) ? data[h].join('; ') : (data[h] || ''));
  sheet.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
}
