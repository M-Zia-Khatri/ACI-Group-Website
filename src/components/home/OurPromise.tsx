import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurPromise() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 4000);
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
        {/*heading*/}
        <div className="w-full mb-10 md:mb-12">
          <h2 className="text-fluid-xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-6xl xl:text-fluid-7xl font-extrabold text-center tracking-wide leading-7 ">
            The ACI Group Promise
          </h2>
          <hr className="relative top-6 md:top-9 xl:top-10 border-t border-[1.5px] border-[#23272b]" />
        </div>

        {/*Listing*/}
        <div className="flex flex-col md:flex-row w-full gap-10 tracking-wide">
          {/* Left: List */}
          <div className="flex-1 flex flex-col justify-center pl-4">
            <ul>
              {listItems.map((item, idx) => {
                const [main, sub] = item.split(" — ");
                const isActive = idx === activeIndex;
                return (
                  <li
                    key={item}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-start mb-6 cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "font-bold text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                    style={{ height: "90px" }}
                  >
                    <motion.span
                      layout
                      className={`w-2 h-[80%] mr-4 rounded-full my-auto ${
                        isActive ? "bg-green-400" : "bg-gray-700"
                      }`}
                      transition={{ duration: 0.4 }}
                    />

                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="self-center"
                    >
                      <span className="block text-fluid sm:text-fluid-xl md:text-fluid-md lg:text-fluid-lg leading-6">
                        {main.trim()}
                      </span>
                      {sub && (
                        <span className="block text-fluid-sm sm:text-fluid lg:text-fluid-md text-gray-300">
                          {sub.trim()}
                        </span>
                      )}
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Card */}
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-[var(--background)] rounded-2xl shadow-xl p-4 w-full border flex flex-col items-center transition-all duration-500 ease-in-out">
              <AspectRatio ratio={1}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={`/promise${activeIndex + 1}.png`}
                    alt={`Promise ${activeIndex + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
              </AspectRatio>
            </div>
          </div>
        </div>

        {/*To inspire trust*/}
        <div className="w-full text-center mt-10">
          <p className="font-bold text-gray-400 border-t border-[1.5px] border-[#23272b] pt-6 text-fluid-md sm:text-fluid-lg md:text-fluid-lg lg
          :text-fluid-2xl">
            We don’t sell courses. We don’t make false promises. We only grow if
            you grow.
          </p>
        </div>
      </div>
    </section>
  );
}
