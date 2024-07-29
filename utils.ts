import * as XLSX from 'xlsx';
import * as path from 'path';


export const getAllHeaders = (filename: string): string[] => {
    console.log("reading started")
  const filePath: string = path.resolve(__dirname, `./${filename}`);
  console.log("filePath", filePath)

  // Read the Excel file
  const workbook: XLSX.WorkBook = XLSX.readFile(filePath);

  // Get the first sheet name
  const sheetName: string = workbook.SheetNames[0];

  // Get the worksheet
  const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

  // Get the headers
  const headers: string[] = [];
  const range: XLSX.Range = XLSX.utils.decode_range(worksheet['!ref']!);
  for (let col = range.s.c; col <= range.e.c; col++) {
    const cellAddress: string = XLSX.utils.encode_cell({ r: 0, c: col });
    const cell: XLSX.CellObject | undefined = worksheet[cellAddress];
    headers.push(cell ? String(cell.v) : `UNKNOWN ${col}`);
  }

  console.log(headers);
  return headers;
}
