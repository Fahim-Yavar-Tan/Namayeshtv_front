import Article from "./components/Article";
import Card from "./components/Card";
import EpisodeCard from "./components/EpisodeCard";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Slider from "./components/Slider";

function HomePage() {
  return (
    <>
      <div className="min-h-[100dvh] w-full bg-[#0d0d0d]">
        <Navbar />
        <Header />
        {/* <EpisodeCard name={"قسمت اول"} link={"/live"} /> */}
        {/* <Card
          img={
            "https://www.attualita.it/wp-content/uploads/2023/08/robert-de-niro-foto-e1692266660946.webp"
          }
          name={"رابرت دنیرو"}
          link={"/live"}
        /> */}
        {/* <MovieCard
          img={
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAY2xsJVIZxm3K0gNtOMr9CSCvLdr5kdo3V3pv2HMuUkTBhFzRe5-b8NDRmO1mt5S5Xp_YyQ"
          }
          name={"پدر خوانده"}
          year={1990}
          duration={"2:20"}
        /> */}
        <Article
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg"
          }
          header={"عنوان"}
          text={
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          }
        />
        <Slider />
        <Banner type={1} />
        <Title title={"یه تایتل"} />
        <Banner type={2} />
        {/* <div className="h-[300px] w-[20px] bg-white "></div> */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
