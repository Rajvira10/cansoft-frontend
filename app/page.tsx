import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Posts />
      <div className="container2" style={{ paddingBottom: "20px" }}>
        <hr />© Company 2017-2019
      </div>
    </main>
  );
}
