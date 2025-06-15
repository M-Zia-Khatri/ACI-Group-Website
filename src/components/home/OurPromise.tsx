import { Users } from "lucide-react";
import { useMemo, useState } from "react";

export default function OurPromise() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-10">
      <h2 className="text-3xl md:text-4xl font-extrabold col-span-2 mb-8 text-center tracking-tight">
        The ACI Group Promise
      </h2>
      {/* Left: List */}
      <div className="pr-0 md:pr-14 flex flex-col justify-center col-span-1">
        <ul>
        {listItems.map((item, idx) => (
          <li
          key={item}
          className={`flex items-start mb-6 text-lg cursor-pointer transition-colors duration-200 ${
            idx === activeIndex
            ? "font-bold text-white"
            : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveIndex(idx)}
          >
          <span
            className={`w-2 h-8 mr-4 rounded-full mt-1 transition-colors duration-200 ${
            idx === activeIndex ? "bg-green-400" : "bg-gray-700"
            }`}
          />
          <div>
            <span className="block">{item.split(" — ")[0].trim()}</span>
            <span className="block text-base text-gray-300">
            {item.split(" — ")[1].trim()}
            </span>
          </div>
          </li>
        ))}
        </ul>
      </div>
      {/* Right: Card */}
      <div className="flex items-center justify-center col-span-1">
        <div className="bg-[#16181c] rounded-2xl shadow-xl p-10 w-full max-w-md border border-[#23272b]">
        <Users className="w-10 h-10 text-green-400 mb-5" />
        <div className="flex items-center mb-3">
          <span className="bg-green-500 text-xs px-3 py-1 rounded-full text-black mr-3 font-bold uppercase tracking-wide shadow">
          zoe
          </span>
          <span className="text-xl font-semibold text-white">
          Collaborate on <span className="text-green-400">ideas</span>
          </span>
        </div>
        <p className="text-gray-300 text-base leading-relaxed">
          Write down product ideas and work together on feature specs in
          realtime, multiplayer project documents. Add <b>style</b> and{" "}
          <b>structure</b> with rich-text formatting options.
        </p>
        </div>
      </div>
      </div>
    </section>
  );
}
