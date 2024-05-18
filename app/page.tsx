import Image from "next/image";
import Hero from "./component/hero";
import SearchBar from "./component/searchBar";
import CustomFilter from "./component/customFilter";
import Footer from "./component/footer";
import NavBar from "./component/navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
