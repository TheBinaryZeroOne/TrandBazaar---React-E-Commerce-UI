import React from "react";
import "./Home.css";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="w-screen h-[60vh] flex items-center justify-center flex-col sm:h-[80vh] 2xl:h-80vh">
          <h1 className="heading text-[3.5rem] leading-tight font-black tracking-tight sm:text-[8rem] lg:text-[9rem] lg:leading-[24vh] xl:text-[11rem] 2xl:text-[18rem] 2xl:leading-[28vh]">
            CLICK.
          </h1>
          <h1 className="heading text-[3.2rem] leading-tight font-black tracking-tight sm:text-[6.6rem] lg:text-[9rem] lg:leading-[24vh] xl:text-[11rem] 2xl:text-[17rem] 2xl:leading-[28vh]">
            SHOP. SMILE.
          </h1>
          <div className="mt-10 lg:hidden xl:hidden">
            <button className="bg-black text-white font-bold rounded-sm px-8 py-3 sm:py-5 sm:px-11 sm:text-xl"> Try Now</button>
          </div>
        </div>

        {/* paragraph */}
        <div className="text-white bg-black px-3 py-10 sm:text-2xl mx-4 rounded-md flex flex-col gap-8">
          <p className="font-semibold text-wrap">
            In the world of online shopping, the essence of a seamless and
            satisfying customer experience lies in the swiftness of delivery.
            Our commitment to fast delivery sets us apart, ensuring that your
            desired products reach your doorstep with unparalleled speed. From
            the moment you click "order" to the instant you unbox your package,
            our streamlined logistics network works tirelessly to minimize wait
            times. Our dedication to prompt delivery not only fulfills your
            expectations but also adds an extra layer of excitement to the
            entire shopping process.
          </p>
          <a href="#" className="underline decoration-2 hidden lg:block"><h1 className="font-bold">Try it Now!!..</h1></a>
        </div>
      </div>
    </>
  );
};

export default Home;
