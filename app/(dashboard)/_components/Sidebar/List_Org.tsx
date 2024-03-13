"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Items } from "./Items";

const List_Org = () => {
    const {userMemberships} = useOrganizationList({
        userMemberships:{
            infinite:true
        }
    })

    // if empty array , then nothing will be printed 
    if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4 w-[60%] mt-4">
        {userMemberships.data?.map((mem)=>(
            <Items 
            key={mem.organization.id}
            id={mem.organization.id}
            name={mem.organization.name}
            imageUrl={mem.organization.imageUrl} />
        ))}
    </ul>
  )
}

export default List_Org
