const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  if(typeof sampleActivity != 'string' || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15 || /[A-Za-z]/.test(sampleActivity)){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
