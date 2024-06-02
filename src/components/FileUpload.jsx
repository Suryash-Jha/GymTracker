import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { PDFDocument } from "pdf-lib";

const PdfUploader = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [email, setEmail] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setPdfFile(file);

    const reader = new FileReader();
    reader.onload = async function () {
      const arrayBuffer: any = this.result;
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      let extractedText = "";

      const numPages = pdfDoc.getPageCount();
      for (let i = 0; i < numPages; i++) {
        const page: any = pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        textContent.items.forEach((item) => {
          extractedText += item.str + " ";
        });
      }

      setPdfText(extractedText);
      extractEmail(extractedText);
    };
    reader.readAsArrayBuffer(file);
  };

  const extractEmail = (text) => {
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
    const match = text.match(emailRegex);
    if (match) {
      setEmail(match[0]);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <div>
        <h2>Extracted Text:</h2>
        <p>{pdfText}</p>
        <h2>Extracted Email:</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default PdfUploader;
