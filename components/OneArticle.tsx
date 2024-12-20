import Link from "next/link";
import Image from "next/image";
import Pic from "@/public/a.jpg";
import { LuClock, LuEye, LuMessageCircleMore, LuFolderOpen } from "react-icons/lu";

export default function OneArticle() {
    return (
        <div className="group">
        <article className="h-80 flex group-even:flex-row-reverse bg-white bg-opacity-90 rounded-xl shadow-custom">
            <div className="w-[55%] h-full float-left group-even:float-right">
                <Link href="/post">
                    <div className="h-full relative">
                        <Image
                            src={Pic}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="group-odd:rounded-l-xl group-even:rounded-r-xl"
                        ></Image>
                    </div>
                </Link>
            </div>
            <div className="p-7 flex-1 relative text-right group-even:text-left">
                <div className="ml-auto mr-0 group-even:ml-0 group-even:mr-auto px-2.5 py-1 flex items-center w-max rounded-md text-xs bg-gray-200">
                    <LuClock className="mr-1 text-sm" />
                    <p>發佈於 7 天前</p>
                </div>
                <div className="mt-4">
                    <Link href="/post">
                        <h3 className="text-lg font-bold">プロセカ冲榜纪念 ~傷だらけの手で、私達は~</h3>
                    </Link>
                </div>
                <div className="ml-auto mr-0 group-even:ml-0 group-even:mr-auto mt-3 w-max">
                    <ul className="flex list-none space-x-2.5">
                        <li className="flex items-center rounded-xl text-xs">
                            <LuEye className="mr-1 text-sm" />
                            <span>2525 觀看</span>
                        </li>
                        <li className="flex items-center rounded-xl text-xs">
                            <LuMessageCircleMore className="mr-1 text-sm" />
                            <span>評論</span>
                        </li>
                        <li className="flex items-center rounded-xl text-xs">
                            <LuFolderOpen className="mr-1 text-sm" />
                            <span>分類</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-4 text-justify line-clamp-3">CircleCrop Blog 正在將 Cosplay 內容遷移至獨立子站 cosplay.aiccrop.com，為讀者提供更專注的主題內容與體驗。</div>
                <div className="px-3 py-1 absolute group-odd:right-7 group-even:left-7 bottom-7  border w-max rounded-3xl">
                    <Link href="/post">Read More</Link>
                </div>
            </div>
        </article>
        </div>
    );
}