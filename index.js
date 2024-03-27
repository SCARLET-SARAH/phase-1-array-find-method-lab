function superbowlWin(record) {
    const win = record.find(entry => entry.team === 'Denver Broncos');
      console.log("Denver Broncos")  
}
function superbowlWin(record) {
    const winRecord  = record.find(element=> element.result === "W");
    return winRecord ? winRecord.year: undefined; 
      console.log(superbowlWin(record));
}