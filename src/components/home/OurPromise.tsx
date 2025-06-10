import { Check } from "lucide-react";
import { useMemo } from "react";

export default function OurPromise() {
  const listItems = useMemo(
    () => [
      "We manage your funds — You stay in control",
      "We use our proven strategies — You get the results",
      "You can monitor live trades — No secrets, full transparency",
    ],
    []
  );

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mt-2 mb-4 mx-4 md:mt-8 md:mb-12">
      <h2 className="text-3xl font-bold mb-6">The ACI Group Promise</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="w-6 h-6 flex-shrink-0 text-[#00B894]" />
            <p className="text-base md:text-lg text-gray-900">{item}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 font-bold text-gray-700 border-t pt-4 text-base md:text-lg">
        We don’t sell courses. We don’t make false promises. We only grow if you
        grow.
      </p>
    </section>
  );
}
