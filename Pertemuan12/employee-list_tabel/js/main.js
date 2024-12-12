import { employees, columnNames } from "./data.js";
import { calculateTotalSalary, formatRupiah } from "./functions.js";

// mencari element html dengan id "column-names"
const columNamesRow = document.getElementById('column-names');

columnNames.forEach(columnNames => {
    // membuat element html th
    const th = document.createElement('th');

    //mengisi data ke dalam element th
    th.innerText = columnNames;

    //menambhakan element th ke dalam element tr dengan id "column-names"
    columNamesRow.appendChild(th);

});

   //mencari element html dengan "table-body"
const tableBody = document.getElementById('table-body')

employees.forEach((employee, index)=> {
    //menghitung salary karyawan
   const data = calculateTotalSalary(employee)

    //membuat element tr
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
    <td>${index = index + 1}</td>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.position}</td>
    <td>${data.isMarride ? "Menikah": "Belum"}</td>
    <td>${data.religion}</td>
    <td>${data.gajiPokok}</td>
    <td>${data.tunjanganJabatan}</td>
    <td>${data.bpjs}</td>
    <td>${data.tunjanganKeluarga}</td>
    <td>${data.zakat}</td>
    <td>${data.gajiBersih}</td>
    
    `
    // menambah element tr ke dalam element tbody
    tableBody.appendChild(tr); 
});