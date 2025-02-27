import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

export default function RootPage(params) {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        !theme && "bg-[#18191b]"
      } duration-500 transition-colors`}
    >
      <>
        <Header />
        <main className="flex-grow">
          <div className="p-5 mx-auto max-w-[1600px] mt-[90px]">
            <Outlet />
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
}
