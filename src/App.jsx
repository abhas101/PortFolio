import Features from "./Sections/Features";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Tape from "./Sections/Tape";

export default function App() {
  return (
    <>

    <div className="overflow-x-clip">
      <Header/>
      <Hero/>
      <Features/>
      <Tape/>
      
    </div>
    
    </>
  )
}