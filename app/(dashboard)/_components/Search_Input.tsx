"use client";

import { Search } from "lucide-react";
import { useState, useEffect, ChangeEvent } from "react";
import qs from "query-string";
import { useDebounce } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

// this is the search bar 
const Search_Input = () => {
  const router = useRouter();

  // usestate to store the text in the searchbar
  const [searchbarvalue, setsearchbarvalue] = useState("");

  //   in this debounce , whenver something is written in searchbar , it comes to debounce ,
  //   this debounce will start a timer of 500ms , if any change happens befor 500ms ends ,
  //   a new timer willstart again, if nothing new happens , and 500ms is completed , this debounnce
  //   will give the latest value in the searchbar to the debouncevalue variable
  const debouncevalue = useDebounce(searchbarvalue, 500);

  //   here we are telling => what is the event , to be told while using typescript
  const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
    setsearchbarvalue(event.target.value);
  };

  useEffect(() => {
    // building url => taking url and adding query to it
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncevalue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncevalue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-2 left-1" />
      <Input
        className="w-full max-w-[530px] pl-9"
        onChange={handlechange}
        value={searchbarvalue}
        placeholder="search board"
      />
    </div>
  );
};

export default Search_Input;
