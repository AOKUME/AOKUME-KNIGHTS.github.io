// Each Knight has 30 stat points to spend //

// Silver Knight //
var attackSlv = knightAtt(5);
console.log("Silver Att: " + attackSlv);
var defenseSlv = knightDef(10);
console.log("Silver Def: " + defenseSlv);
var speedSlv = knightSpd(10);
console.log("Silver Spd: " + speedSlv);
var luckSlv = knightLck(5);
console.log("Silver Lck: " + luckSlv);

function silverKnight(){
  var totalPower = attackSlv + defenseSlv + speedSlv + luckSlv;
  return totalPower;
}
console.log("Silver Knight Power: " + silverKnight());


// Dark Knight //
var attackDrk = knightAtt(10);
console.log("Dark Att: " + attackDrk);
var defenseDrk = knightDef(5);
console.log("Dark Def: " + defenseDrk);
var speedDrk = knightSpd(5);
console.log("Dark Spd: " + speedDrk);
var luckDrk = knightLck(10);
console.log("Dark Lck: " + luckDrk);

function darkKnight(){
  var totalPower = attackDrk + defenseDrk + speedDrk + luckDrk;
  return totalPower;
}
console.log("Dark Knight Power: " + darkKnight());


// Stat Generator Functions //
function knightAtt(att) {
  return Math.floor(Math.random() * (60 - att) + 5);
}
function knightDef(def) {
  return Math.floor(Math.random() * (80 - def) + 5);
}
function knightSpd(spd) {
  return Math.floor(Math.random() * (30 - spd) + 5);
}
function knightLck(lck) {
  return Math.floor(Math.random() * (100 - lck) + 5);
}


// Fight Simulator Function //
if (silverKnight() === darkKnight()) {
  alert ("Tie!");
} else if (silverKnight() < darkKnight()) {
  alert ("Dark Knight Wins!");
} else {
  alert ("Silver Knight Wins!");
}
