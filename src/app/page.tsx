import Navigation from "../components/(layouts)/Navbar";
import HeroSection from "../components/Hero";
import bg1 from "../../public/bg1.jpg";

export default function Page() {
  return (
    <main>
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white">
        <div>
          <Navigation />
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url(${bg1.src})`,
            width: "100%",
            height: "100%",
          }}
        ></div>

        <div className="relative h-full flex flex-col justify-end items-center text-center pb-16">
          <h1 className="text-5xl font-bold mb-4 fadeInUp">
            Find Your Dream Home
          </h1>
          <p className="text-lg mb-6 fadeInUp-delay">
            Explore the best properties tailored to your needs.
          </p>
        </div>
      </section>

      <section>
        <HeroSection />
      </section>
    </main>
  );
}
