import Image from "next/image";

export default function Usage_1_Options() {
    return (
        <section className="py-8 leading-relaxed">
            <h3 className="mb-4 text-xl text-center xl:text-3xl xl:text-left lg:text-2xl font-hanna">메뉴 옵션 선택하기</h3>
            <p className="mb-8 text-center xl:text-left lg:text-xl">선택한 메뉴의 맛을 고르거나<br className="xl:hidden"/> 소스 등을 추가할 수 있다.</p>
            <Image className="mb-6 xl:w-full lg:w-[640px]" width={1200} height={521} src="/assets/usage/rg-2-option.jpg" alt="" />
            <p className="text-center xl:text-left lg:text-xl"><strong className="block font-hanna text-BMprimary lg:text-2xl lg:mb-2">사이드 메뉴</strong>식사 메뉴와 같이 먹으면 좋은 음식. <br className="lg:hidden"/>식사 메뉴보다 양이 적은 편이다.</p>
        </section >

    )
}

