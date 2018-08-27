export default function avgByColumn(table, groupIdx, avgIdx) {
  let result = {};

  for (let rowIdx = 0; rowIdx < table.length; rowIdx++) {
    let row = table[rowIdx];
    let key = (groupIdx !== null) ? row[groupIdx] : 'Total';
    let value = new Number(row[avgIdx]);

    if (!(key in result)) {
      result[key] = [value, 1];
    }
    else {
      result[key] = [result[key][0] + value, result[key][1] + 1];
    }
  }

  for (let key in result) {
    let value = result[key];
    value = value[0] / value[1];
    result[key] = value;
  }
  return result;
}
