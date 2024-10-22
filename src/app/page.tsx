import Link from "next/link";

import Banner from "./_components/Bar/Banner";
import NavBar from "./_components/Bar/NavBar";
import CtaContainer from "./_components/Container/CtaContainer";
import PaginationContainer from "./_components/Container/PaginationContainer";
import PostContainer from "./_components/Container/PostContainer";
import SearchContainer from "./_components/Container/SearchContainer";
import { scrapeList } from "~/server/scapeMigration";
import { log } from "console";

export default async function Home() {
  return (
    <div>
      <Banner></Banner>

      <NavBar></NavBar>

      <div>
        <CtaContainer></CtaContainer>
      </div>

      <div>
        <PostContainer></PostContainer>
      </div>

      <nav className="flex flex-col items-center justify-center p-0 w-auto mx-auto">
        <PaginationContainer></PaginationContainer>

        <div className="text-[#2f3a4a] text-[0.875rem]">
          Viewing 1-12 of 43105 results
        </div>
      </nav>
    </div>
  );
}
