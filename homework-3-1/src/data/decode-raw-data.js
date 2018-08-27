export default function decodeRawData(rawData) {
  let table = [];
  let rows = rawData.split('\n');

  for (let rowIdx = 1; rowIdx < rows.length; rowIdx++) {
    let cells = rows[rowIdx].trim().split(',');

    if (cells.length < 4) {
      continue;
    }
    table.push(cells);
  }
  return table;
}
