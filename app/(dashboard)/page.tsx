"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/EmptyOrg";
import BoardList from "./_components/BoardList";

interface DashboardProps {
  searchParams: {
    search?: string;
    favourite?: string;
  };
}

export default function Home({ searchParams }: DashboardProps) {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 p-8 h-[calc(100%-80px)]">
      {/* <p> hello {JSON.stringify(searchParams)}</p> */}

      {organization ? <BoardList orgId={organization.id} query={searchParams} /> : <EmptyOrg />}
    </div>
  );
}
