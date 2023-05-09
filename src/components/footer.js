'use client'
/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

export default function Footer({ increaseZoom, decreaseZoom, zoomInit, handleContrast, zoom }) {
    return (
        <footer aria-label="최하단에 위치한 푸터" className="flex items-center justify-between p-5 text-sm bg-gray-100 text-BMgray500 sm:text-lg lg:py-2">
            <p>배달의민족과 소소한소통이 만들었습니다.</p>
            {/* 모바일 기능 버튼 */}
            <div id="mobile-option-set" className="fixed font-Pretendard text-sm font-semibold right-0 flex flex-col items-start w-24 gap-[1px] shadow-md top-[40%] lg:hidden">
                <button onClick={increaseZoom} id="zoomIn" className="flex items-center w-24 h-8 border-0">
                    <span className="flex items-center justify-center w-10 h-8 bg-BMtertiary">+</span>
                    <span className="flex items-center justify-center h-8 w-14 bg-BMwhite">크게</span>
                </button>
                <button onClick={zoomInit} id="zoomInit" className="flex items-center w-24 h-8 border-0">
                    <span className="flex items-center justify-center w-10 h-8 tracking-tighter bg-BMtertiary ">{`${parseInt(zoom * 100)}%`}</span><span className="flex items-center justify-center h-8 w-14 bg-BMwhite">초기화</span>
                </button>
                <button onClick={decreaseZoom} id="zoomOut" className="flex items-center justify-start w-24 h-8 border-0">
                    <span className="flex items-center justify-center w-10 h-8 bg-BMtertiary">-</span>
                    <span className="flex items-center justify-center h-8 w-14 bg-BMwhite">작게</span>
                </button>
                <button onClick={handleContrast} className="flex items-center justify-start w-24 h-8 border-0">
                    <span className="flex items-center justify-center w-10 h-8 bg-BMtertiary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                    <span className="flex items-center justify-center h-8 w-14 bg-BMwhite">고대비</span>
                </button>
            </div>
        </footer>
    )
}