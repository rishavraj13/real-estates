import { Footer } from "@/components/(layouts)/Footer";
import Navigation from "@/components/(layouts)/Navbar";
import Hero from "@/components/Hero";

export default function Hero() {
    return (
      <main className="flex-1 container mx-auto px-4 py-6">
        <Navigation />
        <section className="my-8"><Hero /></section>
        <Footer />
      </main>
    );
}
