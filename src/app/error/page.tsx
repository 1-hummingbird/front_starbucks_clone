import React from 'react';

function error({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <p className="text-lg font-extrabold text-[#333]">{searchParams.msg}</p>
    </div>
  );
}

export default error;
