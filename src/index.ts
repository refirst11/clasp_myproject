function main() {
  const sheet_id = PropertiesService.getScriptProperties().getProperty('SHEET_1') as string;
  const dir = SpreadsheetApp.openById(sheet_id);
  const sheet = dir.getSheetByName('シート1');
  const fileName = dir.getName();

  // Input enter from here
  const title = '';
  sheet?.appendRow([title, '199']);

  return 'Function deployed and execution is successfully!! ' + fileName + ' is Updated';
}
