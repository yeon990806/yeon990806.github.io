import { ReactNode } from "react";
import RootFooter from "~/components/Root/RootFooter";
import RootHeader from "~/components/Root/RootHeader";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({
  children
}: RootLayoutProps) => {
  return (
    <div className="w-screen min-h-screen">
      <main className="max-w-3xl px-6 mx-auto lg:max-w-8xl lg:px-8">
        <RootHeader />
        <div>
          {children}
        </div>
      </main>
      <RootFooter />
    </div>
  );
};
export default RootLayout;