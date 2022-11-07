import React from "react";
import { Helmet } from "react-helmet-async";

const Error404 = () => {
    return (
      <>  
       <Helmet>
      <title>counter1</title>
      <meta name="discriction" content="page does not exist. "/>
      <link rel="canonical" href="/error"/>
    </Helmet>
        <hr/>
        
           <h1>404 Error, page Not Found</h1>
              </>
      );
    }
    
  export default Error404;