import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportToExcel(data, filename) {
  // Check if data is not empty
  if (!data || !data.length) {
    console.error("No data provided for export.");
    return;
  }

  // Create a worksheet from the data
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Format headers
  const headers = Object.keys(data[0]);
  headers.forEach((header, index) => {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: index });
    if (!worksheet[cellAddress]) {
      worksheet[cellAddress] = {
        v: header.toUpperCase(),
        s: { font: { bold: true } },
      }; // Capitalize headers and make them bold
    } else {
      worksheet[cellAddress].v = header.toUpperCase(); // Capitalize headers
      worksheet[cellAddress].s = { font: { bold: true } }; // Make headers bold
    }
  });

  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Write the workbook and download as a file
  const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
  const buffer = new ArrayBuffer(wbout.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < wbout.length; ++i) {
    view[i] = wbout.charCodeAt(i) & 0xff;
  }

  saveAs(
    new Blob([buffer], { type: "application/octet-stream" }),
    `${filename}.xlsx`
  );
}
