module.exports = function check(str, bracketsConfig) {
var OpenBracketsStack = [];
var CountOfBrackets = bracketsConfig.length;
var lastBr = -1;

for(var i=0;i<str.length;i++)
{
var charType;
var curChar = str[i];
var BracketID;

for(BracketID=0;BracketID<CountOfBrackets;BracketID++)
{
if(curChar==bracketsConfig[BracketID][0]) {charType = 0; break;}
if(curChar==bracketsConfig[BracketID][1]) {charType = 1; break;}
}

if(bracketsConfig[BracketID][0]==bracketsConfig[BracketID][1] && lastBr==BracketID)
   charType=1;

if(charType==0)
{
  OpenBracketsStack.push(BracketID);
  lastBr = BracketID;
}
else
{
  if(OpenBracketsStack.length==0 || lastBr!=BracketID) return false;
  OpenBracketsStack.pop();
  lastBr = OpenBracketsStack[OpenBracketsStack.length-1];
}
}

if(OpenBracketsStack.length==0) return true;
return false;
}
