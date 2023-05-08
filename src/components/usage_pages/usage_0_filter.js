'use client';

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

import Image from "next/image";
import { usePathname } from "next/navigation";
import { usage } from "../../../public/datas/usage";

export default function Usage_0_filter() {
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    console.log(pageId)

    return (
        <section className="leading-relaxed">
            <h1 className="mb-4 text-2xl text-center font-hanna">{usage[pageId].tilte}</h1>

            <div className="py-5 mb-4 border-b md:mb-14 lg:pb-20">
                <h3 className="mb-4 text-xl text-center lg:text-3xl md:text-3xl md:text-left font-hanna">필터 사용하기</h3>
                <div className="xl:flex xl:gap-1">
                    <Image className="mb-2 lg:w-[640px] xl:w-[600] lg:h-auto" width={1370} height={786} src="/assets/usage/rg-1-5-filter.jpg" alt="" />
                    <div className="xl:grow">
                        <ul className="px-5 mb-4 list-disc list-inside -indent-5">
                            <li className="md:text-xl md:leading-relaxed break-keep">필터를 선택하면 내가 원하는 조건의 가게만 모아 볼 수 있다.</li>
                            <li className="md:text-xl md:leading-relaxed break-keep">배민1, 쿠폰, 1인분, 배달팁, 별점, 최소주문금액 필터를 선택할 수 있다.</li>
                            <li className="md:text-xl md:leading-relaxed break-keep">맨 처음에는 항상 기본순으로 되어 있다.</li>
                        </ul>
                        <ul className="px-4 py-2 text-sm border rounded shadow-md border-BMprimary bg-slate-50">
                            <li className="py-2 border-b md:text-lg border-BMprimary"><strong className="block lg:mr-2 lg:inline font-hanna text-BMprimary">배민1</strong> 배달 시간이 빠른 가게만 모아볼 수 있다.</li>
                            <li className="py-2 border-b md:text-lg border-BMprimary"><strong className="block lg:mr-2 font-hanna lg:inline text-BMprimary">쿠폰</strong> 할인 쿠폰을 제공하는 가게만 모아 볼 수 있다.</li>
                            <li className="py-2 border-b md:text-lg border-BMprimary"><strong className="block lg:mr-2 lg:inline font-hanna text-BMprimary">1인분</strong> 1인분을 배달해주는 가게만 모아 볼 수 있다.</li>
                            <li className="py-2 border-b md:text-lg border-BMprimary"><strong className="block lg:mr-2 lg:inline font-hanna text-BMprimary">배달팁</strong> 배달팁 금액이 싼 가게만 모아 볼 수 있다.</li>
                            <li className="py-2 border-b md:text-lg border-BMprimary"><strong className="block lg:mr-2 lg:inline font-hanna text-BMprimary">별점</strong> 별점이 높은 가게만 모아 볼 수 있다.</li>
                            <li className="py-2 md:text-lg"><strong className="block lg:inline lg:mr-2 font-hanna text-BMprimary">최소주문금액</strong> 최소주문금액이 싼 가게만 모아 볼 수 있다.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="mb-4 text-xl text-center md:text-3xl lg:text-3xl md:text-left font-hanna">가게 정보 보기</h3>
                <div className="xl:flex xl:gap-8">
                    <Image className="lg:w-[640px] xl:w-[600px] xl:h-[349px] xl:m-0  lg:mx-auto" width={1236} height={720} src="/assets/usage/rg-1-6-info.jpg" alt="" />
                    <div className="xl:grow">
                        <ol className="list-decimal list-inside md:text-xl">
                            <li className="py-2 font-medium tracking-tight border-y border-BMprimary md:py-4">가게이름</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">새로 생긴 가게</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">쿠폰 주는 가게</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">바로 사용할 수 있는 쿠폰을 주는 가게</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">별점, 리뷰 개수</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">가장 인기 있는 메뉴</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">우리 집 주변에 있는 집들만 들러서 배달하는 가게</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">우리집으로 바로 배달해 주는 가게</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">음식이 도착하는 데 걸리는 시간</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">배달비</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">최소 주문 금액</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">깨끗하다고 인정받은 가게</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">포장할 수 있는 가게</li>
                            <li className="py-2 font-medium tracking-tight border-b border-BMprimary md:py-4">예약할 수 있는 가게</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

    )
}