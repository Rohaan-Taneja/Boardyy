const Loading = () => {
  return (
<div className="h-full w-full flex flex-col justify-center items-center">
  <img
    src="/logoo.svg"
    alt="loading logo hai"
    width={120}
    height={120}
    className="animate-pulse duration-700"
  />
</div>

  );
};

export default Loading;
