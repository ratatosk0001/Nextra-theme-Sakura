import Article from "./Acticle";
import Focus from "./Focus";
import { LuVolume2 } from "react-icons/lu";
import { FaAnchor, FaEnvira } from "react-icons/fa";

export default function MainPage() {
    return (
        <main>
            <div className="mx-auto px-5 max-w-[860px] border-t border-transparent">
                <div className="mt-14 p-5 flex items-center border border-dashed rounded-lg">
                    <LuVolume2 className="text-lg mr-2" />
                    <p>Notice: </p>
                </div>
                <div className="border-t border-transparent">
                    <div className="my-9 pb-1 flex items-center border-b border-dashed font-bold">
                        <FaAnchor className="mr-2" />
                        <h1>Focus: </h1>
                    </div>
                    <Focus></Focus>
                </div>
                <div className="border-t border-transparent">
                    <div className="my-9 pb-1 flex items-center border-b border-dashed font-bold">
                        <FaEnvira className="mr-2" />
                        <h1>Discovery: </h1>
                    </div>
                    <Article></Article>
                </div>
            </div>
        </main>
    );
}
