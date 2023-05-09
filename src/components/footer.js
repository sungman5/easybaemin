'use client'
/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import { useState } from "react";

export default function Footer() {
    const [isContrast, setIsContrast] = useState(false);
    console.log(isContrast)

    return (
        <footer aria-label="최하단에 위치한 푸터" className="flex items-center justify-between p-5 text-sm bg-gray-100 text-BMgray500 sm:text-lg lg:py-2">
            <p>배달의민족과 소소한소통이 만들었습니다.</p>
            <div className="flex">
                {/* <button
                    className="px-4 py-2 font-bold rounded-full text-BMwhite bg-BMprimary border-BMprimary lg:hidden"
                    role="고대비 스위치"
                    aria-checked={isContrast}
                >
                    고대비&nbsp;
                    {isContrast === false ? '끔' : '켬'}
                </button> */}
            </div>
        </footer>
    )
}