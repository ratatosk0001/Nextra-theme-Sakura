import Link from "next/link";
import Header from "@/components/Header";
import Cover from "@/components/Cover";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Cover></Cover>
      <MainPage></MainPage>
      <div className="h-[1080px]">Hello World</div>
      <ul>
        <li>
          <Link href="/post">切換至 app/post/page.tsx</Link>
        </li>
        <li>
          <Link href="/about">切換至 app/about/page.tsx</Link>
        </li>
      </ul>
    </>
  );
}
