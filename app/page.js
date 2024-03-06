import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessageFromFounder from "./components/MessageFromFounder";
import OurProjects from "./components/OurProjects";
import SlideShow from "./components/SlideShow";
import Sponsors from "./components/Sponsors";
import SuccessStories from "./components/SuccessStories";

export default function Home() {
  return (
    <>
    <Header/>
    <SlideShow/>
    <MessageFromFounder/>
    <SuccessStories/>
    <About/>
    <Donate/>
    <Sponsors/>
    <OurProjects/>
    <ContactUs/>
    <Footer/>
    </>
  );
}
