'use client';

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import Image from "next/image";
// import BasicAside from "../asides/basic_aside";

export default function Basic_id_0() {
    return (
        <>
            <section>
                <h1 className="mb-8 text-2xl font-hanna lg:text-5xl md:text-3xl lg:mb-14">쉬운 배달앱 사용법</h1>
                <p className="mb-8 text-base leading-relaxed lg:text-xl md:text-lg">
                    장애, 나이 상관없이 누구나 배달앱을 사용할 수 있도록 어려운 용어는 쉽게 바꾸고,<br className="hidden md:block" />설명이 필요한 부분은 친절하게 안내했습니다.<br className="hidden md:block"/> 사람들에게 많이 알려져있는 배달앱 <Image className="inline -translate-y-0.5" width={70} height={20} src="/assets/basic_imgs/bm-logo.png" alt="배달의민족" />을 기준으로 만들어졌습니다.
                </p>
                <ul className="flex flex-col py-4 mb-8 leading-relaxed border-y lg:text-xl ">
                    <li className="py-2 md:py-3">
                        <h4 className="text-lg md:text-2xl font-hanna text-BMprimary md:mb-1">준비하기</h4> <p className="md:text-lg">배달의민족 회원가입하기, 로그인하기, 주소 등록하기를 안내합니다.</p>
                    </li>
                    <li className="py-2 md:py-3">
                        <h4 className="text-lg md:text-2xl font-hanna text-BMsecondary md:mb-1">이용하기</h4> <p className="md:text-lg">배달의민족 음식 주문하기, 결제하기를 안내합니다.</p>
                    </li>
                    <li className="py-2 md:py-3">
                        <h4 className="text-lg md:text-2xl font-hanna text-BMtertiary md:mb-1">활용하기</h4> <p className="md:text-lg">배달의민족을 상황에 맞게 더 잘 사용하는 법을 안내합니다.</p>
                    </li>
                </ul>
                <div className="flex gap-2">
                    <Image className="w-24 mb-2 md:w-32" width={100} height={100} src="/assets/basic_imgs/qr.jpg" alt="쉬운배달앱사용법 다운로드받기 QR코드" />
                    <div>
                        <p>휴대폰 카메라로 찍어보세요!</p>
                        <h4 className="mb-2 text-xl font-hanna text-BMprimary">쉬운 배달앱 사용법</h4>
                        <a className="px-3 py-2 text-sm font-medium text-white rounded-full bg-BMprimary" href="https://mandao-prod-cdn.baemin.com/assets/%EB%B0%B0%EB%8B%AC%EC%9D%98%EB%AF%BC%EC%A1%B1X%EC%86%8C%EC%86%8C%ED%95%9C%EC%86%8C%ED%86%B5_%EC%89%AC%EC%9A%B4%EB%B0%B0%EB%8B%AC%EC%95%B1%EC%82%AC%EC%9A%A9%EB%B2%95_20211203.pdf">앱 다운로드 받기</a>
                    </div>
                </div>
                <p className="text-sm font-medium text-gray-400">이 자료는 삼성, LG 등 안드로이드 스마트폰을 기준으로 설명합니다.</p>
            </section>
        </>
    )
}