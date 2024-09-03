import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Donate from "./components/Donate";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Glimpses from "./components/Glimpses";
import Header from "./components/Header";
import MessageFromFounder from "./components/MessageFromFounder";
import OurProjects from "./components/OurProjects";
import SlideShow from "./components/SlideShow";
import Sponsors from "./components/Sponsors";
import SuccessStories from "./components/SuccessStories";
import Vocational from "./components/Vocational";

export default function Home() {
  return (
    <div className="overflow-hidden">
    <Header/>
    <SlideShow/>
    <MessageFromFounder/>
    <SuccessStories/>
    <About/>
    <Donate/>
    <Sponsors/>
    <Event />
    <Glimpses />
    <Vocational />
    <OurProjects/>
    <ContactUs/>
    <Footer/>
    </div>
  );
}
