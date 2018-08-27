import { createTable, createRow, createCell } from './create-table';

export default function showByDepartments(data, parent) {
  let th1 = createCell('th', 'Department');
  let th2 = createCell('th', 'Avg. Payment');
  let rows = [createRow([th1, th2])];

  for (let key in data) {
    let value = data[key];
    let td1 = createCell('td', key);
    let td2 = createCell('td', (value).toFixed(2));
    rows.push(createRow([td1, td2]));
  }
  parent.appendChild(createTable(rows));
  parent.appendChild(document.createElement('br'));
}
