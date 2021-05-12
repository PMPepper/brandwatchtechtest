export default function roundTo(n, decimalPlaces) {
  const mag = Math.pow(10, decimalPlaces);

  return Math.round(n * mag)/mag;
}
