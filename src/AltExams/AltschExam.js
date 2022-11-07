import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Counter1 from './counterOne';
import Counter2 from './counterTwo';
import Error404 from './ErrorPage';
// import ErrorBoundary from "./ErrorBoundary";
import TestErrorPage from './TestErrorPage';
import { Helmet } from 'react-helmet-async';

function AltschExam() {
  return (
    <>
      <Helmet>
        <title>AltschExam</title>
        <meta name="discriction" content="Routes page " />
        <link rel="canonical" href="/" />
      </Helmet>
      <section class="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter1" element={<Counter1 />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="/error" element={<TestErrorPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </section>
    </>
  );
}

export default AltschExam;
