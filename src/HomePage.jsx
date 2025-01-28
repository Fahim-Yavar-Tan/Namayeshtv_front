import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import Slider from "./components/Slider";
import Table from "./components/Table";

function HomePage() {
  return (
    <>
      <div className="min-h-[100dvh] w-full bg-background">
        <Navbar />
        <Header />
        <Title title={"امروز در شبکه نمایش"} />
        <Table />
        <Slider />
        <Banner type={1} />
        <Title title={"به زودی"} />
        <Slider />
        {/* <Title title={"یه تایتل"} /> */}
        <Banner type={2} />
        {/* <div className="h-[300px] w-[20px] bg-white "></div> */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
