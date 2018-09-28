module.exports = function check(str, bracketsConfig) {
  let conf =[];
  let ind = 1;
  if (str.length%2!=0){
  return false;
  }

  for (i = 0; i < bracketsConfig.length; i++) {
  let arr = bracketsConfig[i];
  conf[i] = arr.join("");
  }

while (str.length>0&&ind==1) {
  ind = 0;
  for (i = 0; i < conf.length; i++) {
  let str1 = conf[i];
  if (str.indexOf(str1)!=-1) {
  ind = 1;
  str = str.replace(str1, '');
  }
  }
}


  if (str.length==0) {
  return true;
  }
  else {
  return false;
  }
};