export default function sumByColumn(table, groupIdx, sumIdx) {
  let result = {};

  for (let rowIdx = 0; rowIdx < table.length; rowIdx++) {
    let row = table[rowIdx];
    let key = (groupIdx !== null) ? row[groupIdx] : 'Total';
    let value = new Number(row[sumIdx]);

    if (!(key in result)) {
      result[key] = value;
    }
    else {
      result[key] += value;
    }
  }
  return result;
}
