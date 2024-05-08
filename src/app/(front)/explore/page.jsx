import DyanmicNavBar from "@/components/common/DyanmicNavBar";
import React from "react";

import ExploreSearchBar from "@/components/explore/ExploreSearchBar";
import { searchUser } from "@/lib/serverMethods";
import UserListCard from "@/components/common/UserListCard";


export const metadata= {
  title: "Explore",
  description: "Search users here and show there profile...",
};

export default async function Explore({
  searchParams,
}) {
  const users = await searchUser(searchParams?.query);
  return (
    <div>
      <DyanmicNavBar title="Explore" />
      <ExploreSearchBar />

      <div className="mt-5">
        {users?.length > 0 &&
          users.map((item) => <UserListCard user={item} key={item.id} />)}
        {users?.length < 1 && searchParams?.query?.length > 1 && (
          <div className="text-center">
            <h1 className="font-bold">No User found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
