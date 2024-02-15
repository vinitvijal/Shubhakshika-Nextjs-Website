import About from "./components/About";
import Header from "./components/Header";
import MessageFromFounder from "./components/MessageFromFounder";
import SlideShow from "./components/SlideShow";
import SuccessStories from "./components/SuccessStories";

export default function Home() {
  return (
    <>
    <Header/>
    <SlideShow/>
    <MessageFromFounder/>
    <SuccessStories/>
    <About/>
    </>
  );
}
