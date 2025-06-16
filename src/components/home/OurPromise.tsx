import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useEffect, useMemo, useState } from "react";

export default function OurPromise() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const listItems = useMemo(
    () => [
      "We manage your funds — You stay in control",
      "We use our proven strategies — You get the results",
      "You can monitor live trades — No secrets, full transparency",
    ],
    []
  );

  return (
    <section className="min-h-[400px] m-4 flex items-center justify-center text-white py-16 bg-gradient-to-br from-[#181c20] to-[#23272b] rounded-2xl shadow-2xl">
      <div className="w-full max-w-5xl px-2 lg:px-0 flex flex-col items-center">
        <div className="w-full border-b border-[#23272b] mb-10">
          <h2 className="text-fluid-2xl font-extrabold text-center tracking-widest">
            The ACI Group Promise
          </h2>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-10 tracking-wide">
          {/* Left: List */}
          <div className="flex-1 flex flex-col justify-center">
            <ul>
              {listItems.map((item, idx) => (
                <li
                  key={item}
                  className={`flex items-start mb-6 text-fluid cursor-pointer transition-colors duration-200 ${
                    idx === activeIndex
                      ? "font-bold text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    transition: "color 0.4s cubic-bezier(0.4,0,0.2,1)",
                    height: "90px", // Set a fixed height for li
                  }}
                >2
                  <span
                    className={`w-2 h-[80%] mr-4 rounded-full my-auto transition-colors duration-200 ${
                      idx === activeIndex ? "bg-green-400" : "bg-gray-700"
                    }`}
                    style={{
                      transition: "background-color 0.4s cubic-bezier(0.4,0,0.2,1)",
                      display: "inline-block",
                    }}
                  />
                  <div>
                    {(() => {
                      const parts = item.split(" — ");
                      return (
                        <>
                          <span className="block">{parts[0].trim()}</span>
                          {parts[1] && (
                            <span className="block text-fluid-sm text-gray-300">
                              {parts[1].trim()}
                            </span>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Card */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-[var(--background)] rounded-2xl shadow-xl p-4 w-full border flex flex-col items-center transition-all duration-500 ease-in-out">
              <AspectRatio ratio={1}>
                <img
                  src={`/promise${activeIndex + 1}.png`}
                  alt={`Promise ${activeIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                  style={{
                    opacity: 1,
                    transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              </AspectRatio>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-10">
          <p className="font-bold text-gray-400 border-t border-[#23272b] pt-6 text-fluid">
            We don’t sell courses. We don’t make false promises. We only grow if
            you grow.
          </p>
        </div>
      </div>
    </section>
  );
}
