import { createTable, createRow, createCell } from './create-table';

export default function showTotal(data, parent) {
  let th = createCell('th', 'Total');
  let rows = [createRow([th])];
  let total = (('Total' in data) ? data['Total'] : 0).toFixed(2);
  let td = createCell('td', total);
  rows.push(createRow([td]));
  parent.appendChild(createTable(rows));
  parent.appendChild(document.createElement('br'));
}
