const formatNumbers = (number) {
  let strngNum = String(Math.floor(number);

  for (let i = strngNum.length - 3; i -= 3){
    strngNum = strngNum.slice(0, i) + "," + strngNum.slice(i);
  }

  return strngNum;
};

export default formatNumbers;
