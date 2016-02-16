module.exports = {
  calcTax: function (n) {
  var bracket = (Math.floor(n/10));

  if ( bracket < 1) return (n * 0.1);
  if ( bracket < 2) return (((n-10) * 0.07) +1);
  if ( bracket < 3) return (((n-20) * 0.05) + 1.7);
  if ( bracket >= 3) return (((n-30) * 0.03) + 2.2)
}

}
