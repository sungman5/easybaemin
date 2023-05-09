'use client';

import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'
import Head from 'next/head'
import { useState } from 'react';

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

  const zoomInit = () =>{
    setZoom(1);
  }


  return (
    <html style={{ zoom: zoom }} className='h-full font-Pretendard text-BMblack' lang="en">
      <Head>
        <title>쉬운 배달앱 사용법</title>
      </Head>
      <body className="h-full bg-BMwhite">
        {/* wrapper start */}
        <div className="flex flex-col h-full">
          <Header zoomInit={zoomInit} zoom={zoom} increaseZoom={increaseZoom} decreaseZoom={decreaseZoom} />
          <main className='pt-[60px] sm:pt-[68px] xl:pt-[70px] grow'>
            {children}
          </main>
          <Footer />
        </div>
        {/* wrapper end */}
      </body>
    </html>
  )
}
