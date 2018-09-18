module.exports = function warmup(temperature) {
  let foreinheit =  Math.round(temperature * 9 / 5 + 32);
  return foreinheit;
};
