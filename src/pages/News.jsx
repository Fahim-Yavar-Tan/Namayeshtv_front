import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Title from "../components/Title";
import Article from "../components/Article";
import useAxios from "../hooks/useAxios";

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example items array

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageInputChange = (event) => {
    let pageNumber = Number(event.target.value);
    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-white w-full text-xl">
      <ul>
        {/* {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
      </ul>
      <div className="mx-auto flex justify-center gap-4">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            className={pageNumber === currentPage ? "active" : ""}
            style={{ position: "relative" }}
          >
            {pageNumber === currentPage ? (
              pageNumber
            ) : (
              <span
                className="dot"
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
                onMouseEnter={(e) => {
                  e.target.innerText = pageNumber;
                  e.target.style.backgroundColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.target.innerText = "";
                  e.target.style.backgroundColor = "white";
                }}
              ></span>
            )}
          </button>
        ))}
      </div>
      <div className="gap-4 rounded-tl-2xl rounded-br-2xl mt-4 sm:mr-8 mr-[50vw] translate-x-[25px] overflow-hidden hidden">
        <input
          type="number"
          value={currentPage}
          onChange={handlePageInputChange}
          min="1"
          max={totalPages}
          className="text-black text-center px-2 py-1 rounded-tl-2xl rounded-br-2xl "
        />
      </div>
    </div>
  );
};

const News = () => {
  const { data, loading, error } = useAxios("/news/news");
  const {
    data: topNews,
    loading: loadingTop,
    error: errorTop,
  } = useAxios("/news/top-news");
  console.log(topNews);

  return (
    <div className="bg-background w-full min-h-[100dvh]">
      <Navbar />
      <div className="relative w-[300px] h-[150px] mx-auto pt-[100px]">
        <h1 className="text-white text-center h-full align-middle text-2xl">
          اخبار سینما
        </h1>
        <motion.span
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 30, // Slower movement
            damping: 12, // Smoother stop
            duration: 1.5, // Ensures the animation runs for 1.5 seconds
          }}
          className="absolute right-0 left-0 bottom-0 h-[2px] origin-right bg-primary"
        ></motion.span>
      </div>

      <div className="w-full flex flex-col sm:flex-row min-h-[100dvh]">
        <div className="sm:w-3/4 w-full h-full">
          {/* Loading and Error Handling */}
          {loading && <p>Loading...</p>}
          {error && <p>Error loading data</p>}
          {/* News */}

          {data &&
            data.results.map((article) => (
              <Article
                key={article.id}
                img={article.image}
                header={article.title}
                text={article.text}
                link={`http://example.com/article/${article.id}`} // Adjust the link as necessary
                views={article.view}
              />
            ))}

          <PaginationComponent />
        </div>
        <div className="sm:w-1/4 w-full min-h-full flex flex-col">
          <div className="w-full sm:h-1/2">
            {/* Most Viewed */}
            <Title type={"small"} title={"پربازدید ترین اخبار"} />
            {topNews &&
              topNews.results.map((newsItem) => (
                <div
                  className="text-white h-[50px] sm:m-2 m-4 flex"
                  key={newsItem.id}
                >
                  {" "}
                  <img className="h-[50px]" src={newsItem.image} />
                  <h3 className="text-white text-center pt-3 pr-2">
                    {newsItem.title}
                  </h3>
                </div>
              ))}
          </div>
          <div className="w-full h-1/2">
            {/* Random News */}
            <Title type={"small"} title={"اخبار تصادفی"} />
          </div>
        </div>
      </div>
      <div className="h-[50px]" />
      <Footer />
    </div>
  );
};

export default News;
