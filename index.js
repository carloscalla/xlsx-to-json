const xlsx = require("xlsx");

try {
  var workbook = xlsx.readFile("us-states-final.xlsx");
  var sheet_name_list = workbook.SheetNames;
  var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log(xlData);
} catch (e) {
  console.log(e);
}
