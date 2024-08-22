import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function Error(params) {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <>
      <Header />
      <div
        className={`p-5 mx-auto min-h-screen flex flex-col items-center mt-[83px] ${
          !theme && "bg-[#18191b] text-white"
        }`}
      >
        <h1 className="text-3xl font-bold">An Error Occurred</h1>
        <p className="text-2xl">Error Message</p>
      </div>
      <Footer />
    </>
  );
}
