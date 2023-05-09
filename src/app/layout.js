'use client';

import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'
import Head from 'next/head'
import { useState } from 'react';
import html2canvas from 'html2canvas';

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 * 3xl 1920px @media (min-width: 1920px) { ... }
 */


export default function RootLayout({ children }) {

  // 줌앤아웃 
  const [zoom, setZoom] = useState(1);
  const increaseZoom = () => {
    setZoom((prevZoom) => prevZoom + 0.1);
  };

  const decreaseZoom = () => {
    setZoom((prevZoom) => prevZoom - 0.1);
  };

  const zoomInit = () => {
    setZoom(1);
  }


  // const getScreenShot = () => {
  //   const isCanvas = document.getElementById('canvas')
  //   console.log('onCapture!');
  //   html2canvas(document.body).then(function (canvas) {
  //     document.body.appendChild(isCanvas);
  //   });
  // }


  return (
    <html style={{ zoom: zoom }} className='h-full font-Pretendard text-BMblack' lang="ko">
      <Head>
        <title>쉬운 배달앱 사용법</title>
      </Head>
      <body id="captureTarget" className="h-full bg-BMwhite">
        {/* wrapper start */}
        <div className="flex flex-col h-full">
          <Header zoomInit={zoomInit} zoom={zoom} increaseZoom={increaseZoom} decreaseZoom={decreaseZoom} />
          <main className='pt-[60px] sm:pt-[68px] xl:pt-[70px] grow'>        
            {children}
            {/* <canvas id="canvas" width={900} height={900} className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-green-100"></canvas> */}
          </main>
          <Footer />
        </div>
        {/* wrapper end */}
      </body>
    </html>
  )
}
