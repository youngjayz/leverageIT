import React, { useEffect, useRef, useState } from "react";
import NextIcon from "../assets/next_icon.svg";
import PrevIcon from "../assets/prev_icon.svg";

const ContentSlider = () => {
  const carouselRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutDuration = useRef(15000);
  const [isVideo, setIsVideo] = useState(false);

  const autoPlay = useRef(true);

  const resetSlide = () => {
    carouselRef.current?.scroll({ left: 0 });
    setCurrentIndex(0);
    timeoutDuration.current = 15000;
  };

  const nextSlide = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current?.scrollLeft + carouselRef.current?.clientWidth,
    });
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    carouselRef.current?.scroll({
      left: carouselRef.current?.scrollLeft - carouselRef.current?.clientWidth,
    });
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const content = [
    { id: 0, isVideo: true, videoURL: "video.mp4" },
    {
      id: 1,
      title: "Social Trading",
      description:
        "Social trading: Replicate successful traders, learn from a collaborative community, and improve investment performance in a transparent environment. Sharing financial insights and strategies for collective gains.",
    },
    {
      id: 2,
      title: "Built-in Analytics",
      description:
        "Built-in analytics provides integrated data analysis tools, offering insights and performance metrics to optimize decision-making and enhance business strategies.",
    },
    {
      id: 3,
      title: "Earn by copy trading",
      description:
        "Earn by copy trading: Profit by mirroring successful traders, leveraging expertise for potential investment gains. Profit by mirroring successful traders' strategies.",
    },
    {
      id: 4,
      title: "Stock trading API.",
      description:
        "Stock trading API: Real-time market data and trade execution for seamless stock trading integration and custom application development.",
    },
    {
      id: 5,
      title: "Smart order routing",
      description:
        "Smart order routing: Automated system intelligently routes orders across multiple liquidity sources to optimize execution quality and minimize trading costs.",
    },
    // Add more content items as needed
  ];

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("timout");
      if (autoPlay.current) {
        console.log("autplay");
        if (
          Math.ceil(
            carouselRef?.current?.scrollLeft + carouselRef?.current?.clientWidth
          ) < carouselRef?.current?.scrollWidth
        ) {
          console.log("next");
          nextSlide();
          timeoutDuration.current = 5000;
        } else {
          resetSlide();
        }
      }
    }, timeoutDuration.current);
    if (currentIndex === 0) {
      setIsVideo(true);
    } else {
      setIsVideo(false);
    }
    console.log("Current index:::", currentIndex, "is Video:::", isVideo);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  const renderLargeContent = () => {
    const itemsToShow = content;

    return itemsToShow.map((item) => (
      <div className="flex-none flex-shrink-0 w-full md:w-1/2 p-2">
        <div
          key={item.id}
          className="w-full h-[250px] md:h-full border-grad p-[3px] rounded-[24px]"
        >
          {item.isVideo ? (
            <div
              className={`w-full h-full text-center rounded-[22px] 
             bg-sidebar text-white`}
            >
              <img
                src="/video.gif"
                alt=""
                className={`rounded-[22px] h-full`}
              />
            </div>
          ) : (
            <div
              className="w-full h-full text-center rounded-[22px] 
            py-7 px-8 bg-sidebar text-white overflow-y-scroll md:overflow-y-hidden"
            >
              <p className={`font-Mont font-bold text-[28px] mb-5`}>
                {item.title}
              </p>
              <p className={`font-Lato text-[18px]`}>{item.description}</p>
            </div>
          )}
        </div>
      </div>
    ));
  };

  const cannotGoNext =
    Math.ceil(
      carouselRef?.current?.scrollLeft + carouselRef?.current?.clientWidth
    ) === carouselRef?.current?.scrollWidth;

  const cannotGoPrev = Math.ceil(carouselRef?.current?.scrollLeft) === 0;

  return (
    <div className="mx-auto md:p-4 flex items-center w-full mb-[20px]">
      <button
        className={`p-2 bg-transparent text-white rounded ${
          cannotGoPrev && "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => {
          autoPlay.current = false;
          prevSlide();
        }}
        disabled={cannotGoPrev}
      >
        <img src={PrevIcon} alt="" />
      </button>

      <div
        ref={carouselRef}
        className="flex items-center overflow-x-auto scrollbar-hide w-full"
      >
        {renderLargeContent()}
      </div>

      <button
        className={`p-2 bg-transparent text-white rounded ${
          cannotGoNext && "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => {
          autoPlay.current = false;
          nextSlide();
        }}
        disabled={cannotGoNext}
      >
        <img src={NextIcon} alt="" />
      </button>
    </div>
  );
};

export default ContentSlider;
