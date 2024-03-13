import Image from "next/image";

const Empty_Search = () => {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
        src="/empty-search.svg"
        alt="no organization selected"
        width={140}
        height={140}
      />

      <h2 className="text-2xl font-semibold mt-6">No Results found!</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Try seacrhing for something else
      </p>

    </div>
  );
};

export default Empty_Search;
