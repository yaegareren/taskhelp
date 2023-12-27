import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
          <Image src="/logoipsum.svg" alt="logo" height={30} width={30} />
          <p className="tetx-lg text-neutral-700 pb-1 font-bold">Taskhelp</p>
        </div>
      </Link>
    </>
  );
};

export default Logo;
