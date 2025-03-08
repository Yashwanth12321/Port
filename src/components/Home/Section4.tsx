import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionHead from "@/components/common/SectionHead";
import Link from "next/link";

const HomeSection4 = ({ id }: { id: string }) => {
    return (
      <ResponsiveBox
        classNames="dark-background odd min-h-screen flex items-center justify-center"
        id={id}
      >
        <ConstrainedBox classNames="p-4 py-16">
          <SectionHead>Projects</SectionHead>
          <div className="flex flex-col items-center text-center mt-4">
            <p>Visit my GitHub</p>
            <Link href="https://github.com/Yashwanth12321">
              <div className="underline cursor-pointer">Here</div>
            </Link>
          </div>
        </ConstrainedBox>
      </ResponsiveBox>
    );
  };
  
export default HomeSection4;
