import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import pdfFile from './sample.pdf';
import './style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com";
import { redirect, useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const PDFViewer = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageThumbnails, setPageThumbnails] = useState([]);
  const [formActive, setFormActive] = useState("");
  const [getLoading, setLoading] = useState(true); 
  const [pdfVisible, setPdfVisible] = useState(false);
  const defaultPageView = 3;


    let navigate = useNavigate();

    function redirectAfterSubmit() {
      navigate('/thank-you-for-download')
    }

  const handlePageClick = (pageNum) => {
    if (pageNum <= defaultPageView && pageNum > 0) {
      setPageNumber(pageNum);
      formActive == 'active' && setFormActive('deactive')
    } else if (pageNum > defaultPageView) {
      setFormActive('active')
    }
  };

  const functionsendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs.sendForm('service_1zfatsb', 'template_aak2bzj', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
      .then((result) => {
        setLoading(false)
        redirectAfterSubmit(); 
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }

  const ld = ()=>{
    setLoading(true)
    setPdfVisible(false)
  }

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false)
    setPdfVisible(true)
  }

  return (
    <div id='pdfViewBodyWrap' className="fwidth">

     {getLoading == true && <Loading/> } 

      <div className={`pdfview_wrap  ${pdfVisible == true && 'active'}`}>
        <div className='viewPdfBody fwidth'>
          <div className='viewPdf fwidth'>
              <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}  loading={ld} className="pdfViewcon_wrap">
                <Page width={500} devicePixelRatio={2} pageNumber={pageNumber} renderTextLayer={false} className="pdfViewFile" />
              </Document>
          </div>
        </div>

        <div className='pdf_nav_wrap fwidth'>
          <div className='pdf_nav'>
            <button onClick={() => handlePageClick(pageNumber - 1)} className='pdfBtn'><i className="fa fa-long-arrow-left" aria-hidden="true"></i></button>
            <p id="pageInfo">
              {pageNumber} of <span className="glyphicon glyphicon-asterisk"></span> {numPages}
            </p>
            <button onClick={() => handlePageClick(pageNumber + 1)} className='pdfBtn'><i className="fa fa-long-arrow-right" aria-hidden="true"></i></button>

          </div>
        </div>
      </div>

      
      <div id='submitInfoWrap' className={formActive}>
        <div className='pdfFormSubmit'>

          <Form onSubmit={functionsendEmail}>
            <Form.Text className="text-muted pdfInfoForm">
              Please give us your Email Id to send you the Download Link!
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required name='name' type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check required type="checkbox" label="I'm not a robot" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>


    </div>
  );
}

export default PDFViewer;