import img1 from "../../../public/images/img1small.png";

export default function VisaRequirements({image,title,disc}) {
  return (
    <section
      className="relative h-[482px] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      <div className="relative z-10 text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          {disc}
        </p>
        <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
          Enquire
        </button>
      </div>
    </section>
  );
}
