'use client';

import { basic } from '../../../../public/datas/basic'
import { usePathname } from "next/navigation";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import Basic_id_0 from "@/components/basic_pages/basic_id_0";
import Basic_id_1 from "@/components/basic_pages/basic_id_1";
import Basic_id_5 from "@/components/basic_pages/basic_id_5";



export default function BasicDetail() {
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    console.log(pageId)

    const showPage = () => {
        if (pageId === '1') {
            // 배달앱 용어사전
            return <Basic_id_1 />
        } else if (pageId === '5') {
            // 첫 화면 이해하기
            return <Basic_id_5 />
        }
    }

    return (
        <>
            {basic[pageId].isTutorial === false ?
                <>
                    {showPage()}
                </>
                :
                <>
                    <section className="leading-relaxed">
                        <h1 className="mb-4 text-2xl text-center lg:text-5xl font-hanna md:text-left md:text-3xl lg:mb-8">{basic[pageId].title}</h1>


                        {
                            basic[pageId].tutoContents.map((element) => {
                                return (
                                    <div className="py-5 border-b last:border-b-0 md:flex md:gap-5" key={element.id}>
                                        <Image className="w-56 mx-auto md:m-0" src={element.img} width={600} height={1060} alt="" />
                                        <div className='lg:pt-4 lg:grow md:translate-y-4 md:flex md:gap-4'>
                                            <p className="flex items-center justify-center w-8 h-8 mx-auto mb-2 font-bold text-center rounded-full text-BMwhite md:m-0 md:mb-2 lg:mb-4 lg:m-0 bg-BMprimary">{element.id}</p>
                                            <div className='flex flex-col text-center md:text-left md:text-2xl md:items-start md:leading-normal lg:items-start lg:text-2xl lg:text-left'>{HTMLReactParser(element.desc)}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </section>
                </>
            }
        </>

    )
}

