const data = require("./data.json")
const {tas, teachers} = data


console.log("The Tas are:")
for (let i = 0; i < tas.length; i++) {
  let teachersAssistant = tas[i];
  console.log(teachersAssistant.name);
}

console.log("The Teachers are:")
for (let i = 0; i < teachers.length; i++) {
console.log(teachers[i].name);
}