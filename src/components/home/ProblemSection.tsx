export default function ProblemSection() {
  return (
    <section className=" m-4 py-4 md:py-6 ">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center text-center md:text-left  text-white">
          <h2 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-md lg:text-fluid-lg xl:text-fluid-xl font-bold mb-4 text-[var(--primary-color)] leading-tight">
            Feeling overwhelmed by trading, losses, or unreliable “tips”?
          </h2>

          <p className=" text-fluid-sm sm:text-fluid md:text-fluid-sm xl:text-fluid  mb-4 Karla leading-snug ">
            You’re not alone. Most people don’t have the time or experience to
            trade smartly. The wrong move can wipe out months of savings.
          </p>

          <p className="text-fluid-sm sm:text-fluid md:text-fluid-sm xl:text-fluid Karla leading-snug ">
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
