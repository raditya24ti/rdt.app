import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import MenuSection from "../components/MenuSection";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

export default function GuestPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <MenuSection />
            <ReviewSection />
            <Footer />
        </div>
    );
}