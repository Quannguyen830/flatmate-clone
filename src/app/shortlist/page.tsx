'use client'

import { initList } from '~/server/scrape/scapeMigration';
import NavBar from '../_components/Bar/NavBar';
import BreadcrumbsItem from '../_components/Item/BreadcrumbsItem';
import PostContainer from '../_components/Container/PostContainer';
import { api } from '~/trpc/react';
// import { scrapeList } from '~/server/scapeMigration';

const Page = () => {
    const { data, isLoading } = api.list.getShortlistListings.useQuery();

    if (isLoading) return <div>Loading....</div>

    return (
        <div>
            <NavBar></NavBar>

            <div className='mx-auto max-w-[1200px] min-h-[calc(100vh-436px)] px-4 pb-16'>
                <div className="mx-auto max-w-[1200px]">
                    <div className="block">
                        <ol className="list-none m-0 p-0">
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                            <BreadcrumbsItem>Home</BreadcrumbsItem>
                        </ol>
                    </div>
                </div>

                <div className='px-0 py-4'>
                    <h1 className="border-b border-[#eaebec] m-0 pb-1 text-[#2f3a4a] text-[28px] block leading-[42px]">
                        Shortlist
                    </h1>
                </div>

                
            </div>
        </div>
    );
};

export default Page;
