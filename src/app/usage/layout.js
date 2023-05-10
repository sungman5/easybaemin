'use client';

import AllAside from "@/components/asides/all_aside";
import UsageAside from "@/components/asides/usage_aside";

export default function Layout({ children }) {
    return (
        <section className="lg:mx-auto xl:container lg:h-full">   
            {/* <div className="lg:flex lg:h-full"> */}
            <div className="lg:flex lg:mx-auto lg:h-full">
                <AllAside />
                <div className="p-8 lg:flex-none lg:grow lg:pt-20 lg:border-x">{children}</div>
            </div>
        </section>
    )
}