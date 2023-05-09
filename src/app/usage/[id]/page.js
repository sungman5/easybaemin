'use client';

import Image from "next/image"
import { usePathname } from "next/navigation";
import { usage } from "../../../../public/datas/usage";
import Usage_0_filter from "@/components/usage_pages/usage_0_filter";
import Usage_1_Options from "@/components/usage_pages/usage_1_option";
import HTMLReactParser from "html-react-parser";

export default function UsageDetail() {
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    console.log(pageId)

    const showUsagePage = () => {
        if (pageId === '0') {
            return <Usage_0_filter />
        } else if (pageId === '1') {
            return <Usage_1_Options />
        }
    }

    return (
        <section className="leading-relaxed">
            <h1 className="mb-4 text-2xl text-center lg:text-5xl font-hanna md:text-3xl md:text-left">{usage[pageId].title}</h1>
            <ul>
                {
                    usage[pageId].content.map((element) => {
                        return (
                            <li className="py-5 border-b md:flex md:gap-4 " key={element.id}>
                                <Image className="w-56 mx-auto md:m-0" src={element.img} width={600} height={1060} alt={element.alt} />
                                <div className="md:translate-y-4 md:flex md:gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 font-bold rounded-full text-BMwhite bg-BMprimary">
                                        {element.id}
                                    </div>
                                    <p className="text-center md:text-left md:text-2xl md:items-start md:leading-normal md:justify-start">{HTMLReactParser(element.desc)}</p>
                                    
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {console.log(showUsagePage())}
            {
                
                showUsagePage()
            }
        </section>
    )
}