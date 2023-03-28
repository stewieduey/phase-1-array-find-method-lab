function superbowlWin(records) {
const foundObject = records.find(record => record.result === "W")
if (foundObject) { //to return the year of the object 
return foundObject.year
}
}
