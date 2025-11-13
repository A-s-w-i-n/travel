import React from "react";

const SeventhSection = () => {
  return (
    <div
      className="relative min-h-screen flex items-end justify-center   bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Envelope Container */}
      <div
        className="rounded-t-2xl p-20   z-20 shadow-xl"
        style={{
          backgroundImage: "url('/images/footerImg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" px-8  mb-36 gap-10  text-center  rounded-lg">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-bold  text-gray-800">Contact Us</h2>

            {/* Form */}
            <form className="text-left  ">
              {/* Name and Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 mb-3 gap-6">
                <div>
                  <label className="block text-gray-600 text-sm font-semibold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block  text-gray-600 text-sm font-semibold mb-1">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Email and Select */}
              <div className="grid grid-cols-1 mt-3  md:grid-cols-2 gap-6">
                <div>
                  <label className="block  text-gray-600 text-sm font-semibold mb-1">
                    Email Id
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm font-semibold mb-1">
                    Select Type
                  </label>
                  <select className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500">
                    <option>General</option>
                    <option>Support</option>
                    <option>Feedback</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mt-3 text-gray-600 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  rows="1"
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              {/* Send Button */}
              <div className="flex justify-center cursor-pointer mt-4">
                <button
                  type="submit"
                  className="px-8 py-2 bg-gray-200 rounded-full text-gray-800 font-medium hover:bg-gray-300 transition-all"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Envelope bottom */}
      </div>
    </div>
  );
};

export default SeventhSection;
