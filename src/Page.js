import About from "./components/About";
import Advantage from "./components/Advantage";
import Delivery from "./components/Delivery";
import Diet from "./components/Diet";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";

function Page() {

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <Intro /> */}
        <Advantage />
        {/* <Diet /> */}
        <About />
        <Delivery />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Page;
