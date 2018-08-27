export function createTable(rows) {
  let table = document.createElement('table');

  for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
    table.appendChild(rows[rowIdx]);
  }
  return table;
}

export function createRow(cells) {
  let row = document.createElement('tr');

  for (let cellIdx = 0; cellIdx < cells.length; cellIdx++) {
    row.appendChild(cells[cellIdx]);
  }
  return row;
}

export function createCell(type, text) {
  let cell = document.createElement(type);
  let content = document.createTextNode(text);
  cell.appendChild(content);
  return cell;
}
