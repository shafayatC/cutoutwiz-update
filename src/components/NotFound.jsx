import React, { Component } from "react";
 
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

 function NotFound(props) {

    return(

    <div className="postphoto">
         <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>
        <p style={{fontWeight:"900",fontSize:"180px",textAlign:"center",color:"#000000"}}>Oops!</p>
        <p style={{fontWeight:"900",fontSize:"20px",textAlign:"center",color:"#000000"}}>404 - PAGE NOT FOUND</p>
        <p style={{fontWeight:"900",fontSize:"12px",textAlign:"center",color:"#000000"}}>The page you are looking for might have been removed<br/> had it's name changed or is temporary unavilable</p>
        <br/>
        <div className="text-center">
        <Link to="/"><button id="button-opps"style={{padding:"10px",fontSize:"13px",color:"#000000",fontWeight:"900"}}>GO TO HOMEPAGE</button></Link>
        </div>
    </div>
        );

    }
   
    export default NotFound;