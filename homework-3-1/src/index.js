import { RAW_DATA } from './data/raw-data';
import decodeRawData from './data/decode-raw-data';
import sumByColumn from './data/sum-by-column';
import avgByColumn from './data/avg-by-column';
import showTotal from './views/show-total';

let dataTable = decodeRawData(RAW_DATA);
let sum = sumByColumn(dataTable, null, 3);
let avgByDepartment = avgByColumn(dataTable, 1, 3);
let avgByMonth = avgByColumn(dataTable, 0, 3);

let container = document.getElementById("container");
showTotal(sum, container);
// showByDepartments(avgByDepartment, container);
// showByMonthes(avgByMonth, container);
