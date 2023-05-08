import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'


/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 * 3xl 1920px @media (min-width: 1920px) { ... }
 */

export const metadata = {
  title: '쉬운 배달앱 설명서',
  description: '소소와 배민이 만들었습니다.',
}



export default function RootLayout({ children }) {
  return (
    <html className='h-full font-Pretendard text-BMblack' lang="en">
      <body className="h-full bg-white">
        {/* wrapper start */}
        <div className="flex flex-col h-full">
          <Header />
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
