export default function ProblemSection() {
  return (
    <section className="p-5 mt-2.5 text-[var(--text-black)]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center text-center md:text-left px-4 py-6 text-white">
          <h2 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-lg lg:text-fluid-xl xl:text-fluid-2xl font-bold mb-4 text-[var(--primary-color)] leading-tight">
            Feeling overwhelmed by trading, losses, or unreliable “tips”?
          </h2>
          <p className=" text-fluid-sm sm:text-fluid mb-4 Karla leading-7 md:leading-8">
            You’re not alone. Most people don’t have the time or experience to
            trade smartly. The wrong move can wipe out months of savings.
          </p>
          <p className="text-fluid-sm sm:text-fluid Karla leading-7 md:leading-8 ">
            What if someone skilled could trade for you — with your money, your
            control, and your peace of mind?
          </p>
        </div>
        <div className="flex items-center justify-center xl:p-3">
          <img
            src="https://images.pexels.com/photos/6964138/pexels-photo-6964138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Problem Illustration"
            className="max-w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
