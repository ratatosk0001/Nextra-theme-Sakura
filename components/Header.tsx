"use client"

import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";

export default function Header() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        });
    });

    return (
        <header className={`w-[95%] h-[75px] fixed left-[2.5%] top-[2.5%] rounded-2xl transition-all duration-700 ease-in-out bg-opacity-80 ${scrollY > 0 ? 'bg-white' : 'bg-transparent'} z-50 hover:bg-white hover:bg-opacity-80`}>
            <div className="px-5 h-full flex flex-row-reverse items-center space-x-5 space-x-reverse">
                <LuSearch className="text-2xl" />
                <div className="flex space-x-5">
                    <div>主頁</div>
                    <div>番組</div>
                    <div>分類</div>
                    <div>時光軸</div>
                    <div>關於</div>
                </div>
            </div>
        </header>
    );
}
