import React from "react";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white text-black px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            About TrendBazaar
          </h1>
          <p className="text-lg mb-6">
            Welcome to TrendBazaar! We are a leading e-commerce platform
            dedicated to providing a wide range of high-quality products to meet
            all your needs. Our mission is to offer an exceptional shopping
            experience with a diverse selection of items, from the latest
            fashion trends to essential household goods.
          </p>
          <p className="text-lg mb-6">
            At TrendBazaar, we pride ourselves on our commitment to customer
            satisfaction. Our user-friendly website and dedicated customer
            service team ensure that your shopping experience is smooth and
            enjoyable. We carefully curate our product selection to ensure that
            we offer only the best to our customers.
          </p>
          <p className="text-lg">
            Thank you for choosing TrendBazaar. We look forward to serving you
            and making your shopping experience extraordinary. If you have any
            questions or feedback, feel free to contact us at{" "}
            <a
              href="mailto:info@teandbazar.com"
              className="text-blue-600 hover:underline"
            >
              info@teandbazar.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
