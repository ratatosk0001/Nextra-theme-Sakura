import Image from "next/image";
import arrowPic from "@/public/arrow.svg";

export default function Information() {
    return (
        <div className="relative p-0 px-5 w-full max-w-[860px] text-center z-10">
            <h1 className="text-white text-8xl font-black">Valed's Blog</h1>
            <div className="m-auto mt-6 p-4 w-[65%] bg-white bg-opacity-80 rounded-2xl">给时光以生命，给岁月以文明</div>
            <div className="mx-auto mt-6 w-auto inline-block list-none space-x-2.5">
                <li className="p-2 w-10 h-10 box-border float-left rounded-full bg-white bg-opacity-80">
                    <Image src={arrowPic} alt="" className="-scale-x-100" />
                </li>
                <li className="p-2 w-10 h-10 box-border float-left rounded-full bg-white bg-opacity-80"></li>
                <li className="p-2 w-10 h-10 box-border float-left rounded-full bg-white bg-opacity-80"></li>
                <li className="p-2 w-10 h-10 box-border float-left rounded-full bg-white bg-opacity-80"></li>
                <li className="p-2 w-10 h-10 box-border float-left rounded-full bg-white bg-opacity-80">
                    <Image src={arrowPic} alt="" />
                </li>
            </div>
        </div>
    );
}
