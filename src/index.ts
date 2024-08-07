function main() {
  const sheet_id = PropertiesService.getScriptProperties().getProperty(
    "SHEET_1"
  ) as string;
  const dir = SpreadsheetApp.openById(sheet_id);
  const sheet = dir.getSheetByName("シート1");
  const fileName = dir.getName();
  const date = new Date();
  const current = date.toISOString().slice(0, 10);

  const libs = [
    "react-page-fitter",
    "react-magic-card",
    "react-text-scaler",
    "react-fukuwarai",
    "react-navigate-motion",
    "firemotion",
    "typedcssx",
    "@snowy-ui/react",
  ];
  let array = [];
  let totalAll = 0;

  for (const i of libs) {
    const response = UrlFetchApp.fetch(
      `https://api.npmjs.org/downloads/point/2023-04-07:${current}/${i}`
    );
    const data = JSON.parse(response.getContentText());
    const title = data.package;
    const total = data.downloads;
    // sheet?.appendRow([title, total]);
    array.push([title, total]);

    totalAll += total;
  }
  array.push(["Total-All", totalAll]);
  sheet?.getRange("A2:B10").setValues(array);

  return (
    "Function deployed and execution is successfully!! " +
    fileName +
    " is Updated"
  );
}
