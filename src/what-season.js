module.exports = function getSeason(date ) {
  if (!date) {
    return 'Unable to determine the time of year!'
}
if(date.hasOwnProperty('toString'|| 'getMonth' || 'getFullYear' || 'getDate' || 'getHours' || 'getMinutes' || 'getSeconds' || 'getMilliseconds' || 'getDay')){
  throw new Error;
}
let m = date.getMonth();
  if(m == 11 || m == 0 || m == 1){
    return 'winter';
  }
  if(m == 2 || m == 3 || m == 4){
    return 'spring';
  }
  if(m == 5 || m == 6 || m == 7){
    return 'summer'
  };
  if(m == 8 || m == 9 || m == 10){
    return 'autumn'
  };

return m;
};
