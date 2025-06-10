export default function ProblemSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[var(--background)] text-[var(--text-black)]">
      <div className="flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/6964138/pexels-photo-6964138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Problem Illustration"
          className="max-w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-center text-center md:text-left px-4 py-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--primary-color)]">
          Feeling overwhelmed by trading, losses, or unreliable “tips”?
        </h2>
        <p className="mb-4 text-base md:text-lg text-gray-700">
          You’re not alone. Most people don’t have the time or experience to
          trade smartly. The wrong move can wipe out months of savings.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          What if someone skilled could trade for you — with your money, your
          control, and your peace of mind?
        </p>
      </div>
    </section>
  );
}
