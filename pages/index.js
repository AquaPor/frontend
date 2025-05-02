import { useState } from 'react';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setPopoverVisible(true);
  };
  const closePopover = () => {
    setPopoverVisible(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="h-[20%] w-full bg-blue-600 flex justify-center items-center text-white text-3xl font-bold shadow-lg">
        <h1>Nest High School</h1>
      </div>

      <div className="h-[14%] w-full flex justify-center items-center text-5xl text-black font-bold px-6 py-4 shadow-md">
        <h1>Welcome to Nest School</h1>
      </div>

      <div className="h-[10%] pt-6 w-full flex justify-center items-center px-6 text-lg text-black font-medium">
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s 
          <br></br>
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="w-full flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          Click Me
        </button>

        <div className="text-xl text-black">
          <p>Clicked {clickCount} times!</p>
        </div>
      </div>

      {popoverVisible && (
        <div className="absolute top-[30%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 bg-white
         text-black px-6 py-4 rounded-lg shadow-lg w-72">
          <p className="text-lg font-bold">Button Clicked!</p>
          <p className="text-sm mb-4">You clicked the button {clickCount} times.</p>
          <button
            onClick={closePopover}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Close
          </button>
        </div>
      )}

      <div className="w-full flex flex-wrap justify-center gap-6 mt-12 px-6">
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-[300px] bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg p-6">
          <p className="text-2xl font-bold mb-4 text-black">Why Choose Us?</p>
          <p className="text-lg mb-2">High-quality service and products tailored to your needs.</p>
          <p className="text-lg mb-2">Fast delivery and easy returns to ensure customer satisfaction.</p>
          <p className="text-lg">24/7 customer support for all your inquiries and assistance.</p>
        </div>

        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-[300px] bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg p-6">
          <p className="text-2xl font-bold mb-4 text-black">Our Features</p>
          <p className="text-lg mb-2">User-friendly interface for seamless navigation.</p>
          <p className="text-lg mb-2">Secure payment options for peace of mind.</p>
          <p className="text-lg">Customizable settings to suit your preferences.</p>
        </div>

        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[30%] h-[300px] bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg p-6">
          <p className="text-2xl font-bold mb-4 text-black">Customer Reviews</p>
          <p className="text-lg mb-2">&quot;Amazing experience! I highly recommend this company.&quot; - Sarah</p>
          <p className="text-lg mb-2">&quot;Quick and reliable, I will definitely shop here again!&quot; - James</p>
          <p className="text-lg">&quot;Great service and fantastic products. 5 stars!&quot; - Emily</p>
        </div>
      </div>

      <div className="w-full bg-black py-4 flex justify-center items-center mt-8">
        <p className="text-white text-lg">&copy; 2025 Nest High School. All Rights Reserved.</p>
      </div>
    </div>
  );
}