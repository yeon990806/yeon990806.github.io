'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className="relative flex flex-col justify-center flex-1 w-full h-full max-w-6xl gap-4 px-6 mx-auto lg:max-w-6xl lg:px-8">
      <h1 className="inline-flex gap-2 text-5xl font-bold text-light-gray800 dark:text-dark-gray800">
        <span className="text-light-blue500 dark:text-dark-blue500">404</span>
        NOT FOUND
      </h1>
      <p className="text-xl text-light-gray700 dark:text-dark-gray700 leading-relax">
        페이지를 찾을 수 없어요. <br />
        <span className="underline cursor-pointer text-light-blue400" onClick={() => router.back()}>이전 페이지</span>로 이동하거나, &nbsp;
        <Link className="underline text-light-blue400" href="/">홈</Link>으로 이동해보는건 어떨까요?
      </p>
    </div>
  );
};
export default NotFound;