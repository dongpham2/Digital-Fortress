const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-primary">
      <h1 className="text-9xl font-extrabold tracking-widest text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-orange-primary px-2 text-sm font-medium">
        Page Not Found
      </div>
      <a className="mt-5 w-max" href="/">
        <div className="group relative inline-block text-sm font-medium text-orange-primary focus:outline-none focus:ring active:text-orange-primary">
          <span className="relative block border border-current bg-gray-primary px-8 py-3">
            Go Home
          </span>
        </div>
      </a>
    </div>
  );
};

export default NotFound;
