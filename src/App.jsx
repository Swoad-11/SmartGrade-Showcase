import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <body className="bg-[#172227] font-[Inter] text-white">
        <Navbar />
        <Hero />
      </body>
    </>
  );
}
