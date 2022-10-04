import React from 'react'
//  import resume from "../../public/images/resume.pdf"
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function Resume() {
  return (
    // <div>
    //     <Document>
    //     file = {src = "/images/resume.pdf"}
    //     onLoadError={console.error}
    //     style={{width: '100%', height: 'auto'}}

    //     </Document>
    //    <Page pageIndex={0}/>
    // </div>
     <iframe src='/images/resume.pdf' width={1250} height={975}/>

  )
}

export default Resume