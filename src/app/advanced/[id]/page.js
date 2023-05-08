'use client';

import Image from "next/image";
import Link from "next/link";
import { advanced } from "../../../../public/datas/advanced";
import { usePathname } from "next/navigation";
import HTMLReactParser from "html-react-parser";

/**
 * sm	640px	@media (min-width: 640px) { ... }
 * md	768px	@media (min-width: 768px) { ... }
 * lg	1024px	@media (min-width: 1024px) { ... }
 * xl	1280px	@media (min-width: 1280px) { ... }
 * 2xl	1536px	@media (min-width: 1536px) { ... }
 */

export default function AdvancedDetail() {
    const pathname = usePathname();
    const pageId = pathname.split('/')[pathname.split('/').length - 1]
    
    return (
        <section className="leading-relaxed">
            <h1 className="mb-4 text-2xl text-center 2xl:mb-20 md:text-4xl text-BMprimary lg:text-5xl font-hanna md:text-left lg:mb-8">{HTMLReactParser(advanced[pageId].title)}</h1>
            <div className="2xl:flex 2xl:gap-4 2xl:border-b 2xl:mb-16">
                <Image className="lg:w-[640px] 2xl:w-[560px]" src={advanced[pageId].cover_img_url} width={800} height={800} alt={''} />
                <div>
                    <div className="py-4 border-b 2xl:border-0">
                        <div className="flex items-center justify-center gap-2 mb-4 2xl:justify-start">
                            <h2 className="text-3xl font-hanna md:text-5xl md:mb-4">{HTMLReactParser(advanced[pageId].desc.title)}</h2>
                            {
                                advanced[pageId].desc.icon === null ? '' : <Image className="-translate-y-0.5 rounded-full shadow-md" src={advanced[pageId].desc.icon} width={48} height={48} alt={advanced[pageId].desc.icon_alt} />
                            }
                        </div>
                        <ul>
                            {advanced[pageId].desc.body.map((element)=>{
                                return(
                                    <li className="md:text-xl md:mb-2">{HTMLReactParser(element.item)}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="py-4 mb-4 border-b 2xl:border-0">
                        <h3 className="mb-4 text-xl md:text-2xl font-hanna">{HTMLReactParser(advanced[pageId].tips.title)}</h3>
                        <ul>
                            {advanced[pageId].tips.body.map((element)=>{
                                return (
                                    <li className="pl-5 mb-1 tracking-tight list-disc list-inside md:mb-3 md:text-xl -indent-5" key={element.item}>{element.item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <h2 className="text-2xl text-center md:text-3xl 2xl:text-left 2xl:leading-snug 2xl:mb-8 font-hanna">{HTMLReactParser(advanced[pageId].tutorial_title)}</h2>
                <ul>
                    {
                        advanced[pageId].content.map((element)=>{
                            
                            return(
                                <li className="py-4 border-b 2xl:gap-8 md:text-xl md:py-8 last:border-0 2xl:flex" key={element.id}>
                                    <Image className="w-56 mx-auto 2xl:m-0" src={element.img} width={600} height={1060} alt={element.alt}/>
                                    <div className="2xl:flex 2xl:gap-2">
                                        <span className="flex items-center justify-center w-8 h-8 mx-auto mb-2 font-bold text-white rounded-full bg-BMprimary">{element.id}</span>
                                        <p className="text-center 2xl:text-left">{HTMLReactParser(element.desc)}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}