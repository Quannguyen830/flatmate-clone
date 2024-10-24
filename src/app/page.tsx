'use client'

import Link from "next/link";

import Banner from "./_components/Bar/Banner";
import NavBar from "./_components/Bar/NavBar";
import CtaContainer from "./_components/Container/CtaContainer";
import PaginationContainer from "./_components/Container/PaginationContainer";
import PostContainer, { PropertyItem } from "./_components/Container/PostContainer";
import SearchContainer from "./_components/Container/SearchContainer";
import { log } from "console";
import PostBox from "./_components/Box/PostBox";
import { useState } from "react";
import { api } from "~/trpc/react";

export default function Home() {
  const { data, isLoading } = api.list.getAllPropertyListings.useQuery()
  const postItems: PropertyItem[] = []

  if (isLoading) return <div>Loading....</div>

  data?.map((listing, index) => {
    postItems.push({
      id: index,
      content: (
        <PostBox
          price={listing.price}
          location={listing.location}
          description={listing.description}
          features={listing.features}
          images={listing.images}
          imagesLength={listing.imagesLength}
          timeForAvailable={listing.timeForAvailable}
          link={listing.description}
          key={index}
        >
        </PostBox>
      )
    });
  });

  return (
    <div>
      <Banner></Banner>

      <NavBar></NavBar>

      <div>
        <CtaContainer></CtaContainer>
      </div>

      <div>
        <PostContainer items={postItems} className="pb-[4rem]"></PostContainer>
      </div>

      <nav className="flex flex-col items-center justify-center p-0 w-auto mx-auto">
        <PaginationContainer></PaginationContainer>

        <div className="text-[#2f3a4a] text-[0.875rem] mb-20">
          Viewing 1-12 of 43105 results
        </div>
      </nav>
    </div>
  );
}