import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <h1
            className={cn(
              "text-3xl font-bold md:text-6xl text-center text-neutral-800 mb-6"
            )}
          >
            Use taskhelp for your tasks
          </h1>
          <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-500 to-violet-600 text-white px-4 p-2 rounded-md pb-4 w-fit font-bold">
            work efficiently
          </div>
        </div>
        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Collaborate, manage projects, and reach productivity peaks. Allow your
          team to collborate with pinch perfect combination.
        </div>
        <Button
          variant="outline"
          className="mt-6 border-slate-500 "
          size="lg"
          asChild
        >
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>
    </>
  );
};

export default MarketingPage;
