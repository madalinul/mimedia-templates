const testFolder = "./emails/";
const fs = require("fs");

fs.readdirSync(testFolder).forEach((file) => {
  if (fs.statSync(testFolder + file).isDirectory()) {
    return;
  }
  console.log(file);
});
