import React from "react";
import Navbar from "../Navbar";
import Footer from "../Sections/Footer";
import SeventhSection from "../Sections/SeventhSection";
import {
  APIProvider,
  Map,
  Pin, useMapsLibrary
} from "@vis.gl/react-google-maps";

const offices = [
  {
    title: "Cochin (Our Corporate Office)",
    lines: [
      "1 St Floor - Saniya Tower, Metro Pillar No. 550, Palarivattom, Kochi",
      "Tel: 0484 4128 000",
      "Mob: +91 813 690 7444, +91 99467 35011",
      "Email: Info@Somansleisuretours.Com",
    ],
  },
];

const img =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80";
const network = [
  {
    title: "Cochin",
    lines: [
      "1 St Floor - Saniya Tower, Metro Pillar No. 550, Palarivattom, Kochi",
      "Mob: +91 813 690 7444, +91 99467 35011",
      "Email: Info@Somansleisuretours.Com",
    ],
  },
  {
    title: "Trivandrum",
    lines: [
      "Varuvilakathu Veedu, Sasthamangalam",
      "Mob: +91 97450 620 11",
      "Tel: 0471 4000 460 - 63",
    ],
  },
  {
    title: "Thrissur",
    lines: [
      "Ground Floor, Sun Tower, East Fort, Thrissur",
      "Mob: +91 97786 39113, +91 70341 17771",
    ],
  },
  {
    title: "Palakkad",
    lines: ["1st Floor, Door No: 41/966(9)SH Arcade", "Mob: +91 95495 97691"],
  },
  {
    title: "Kozhikode",
    lines: [
      "AKS Enclave, Puthiyara Junction, Kozhikode",
      "Mob: +91 9388 6053 21",
    ],
  },
  {
    title: "Coimbatore",
    lines: [
      "2nd Floor, A.M.L Midtown, Diwan Bahadur Rd, R.S. Puram",
      "Mob: 9995969622",
    ],
  },
  {
    title: "Pathanamthitta",
    lines: [
      "2nd Floor, Kunnithottathil Tower, St. Peters Junction",
      "Mob: +91 97784 20068",
    ],
  },
];

export default function Enquire() {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      {/* Main content */}
      <main className="max-w-6xl mt-32 mx-auto px-6 lg:px-8 ">
        {/* Title */}
        <section className="text-center mt-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In Touch With Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Have questions or are you ready to book your next adventure? Get in
            touch with us! Our team is eager to assist you in planning your
            dream trip.
          </p>
        </section>

        {/* Map + corporate office */}
        <section className="mt-10">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Make sure container has height */}
            <APIProvider apiKey={key || "YOUR_API_KEY"}>
              <div className="w-full h-96"> {/* tailwind height, change as needed */}
                <Map
                  /* removed mapId unless you have a valid Map ID */
                  defaultZoom={12}
                  defaultCenter={{ lat: 10.007056, lng: 76.298798 }} // Kochi
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                  /* If the Map component accepts style prop, you can pass it too:
                     style={{ width: '100%', height: '100%' }}
                  */
                />
                
              </div>
            </APIProvider>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Cochin <span className="text-gray-500 font-medium">(Our Corporate Office)</span>
              </h3>
              <p className="mt-2 text-gray-700">
                1 St Floor - Saniya Tower, Metro Pillar No. 550, Palarivattom, Kochi
              </p>
              <ul className="mt-3 text-gray-600 space-y-1 text-sm">
                <li>Tel: 00000000</li>
                <li>Mob: +91 00000000, +91 0000000</li>
                <li>Email: Info@abc.Com</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Office Network heading */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold">Our Office Network</h2>
        </section>

        {/* Network grid */}
        <section className="mt-8 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {network.map((n, idx) => (
              <div key={idx} className="p-6 border rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">{n.title}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {n.lines.map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* small attribution/footer placeholder - intentionally excluded the full footer & contact form as requested */}
      <SeventhSection image={img} />
      <div className="text-center  text-xs text-gray-400">
        <Footer />
      </div>
    </div>
  );
}
