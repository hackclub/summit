import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Akaya_Kanadaka } from "next/font/google";

const akaya = Akaya_Kanadaka({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={akaya.className}>
      <Navbar/>
      <Hero />
      <h2>You're At The Top Of Your Craft</h2>
      <img src="./plane.svg" />
      <h2>50 Inventors</h2>
      <h3>a gathering of dreamers</h3>
      <img src="./dinos.svg" />
      <h2>Feb. 23rd-25th</h2>
      <h3>a weekend of dreams</h3>
      <img src="./california.svg" />
      <h2>San Francisco</h2>
      <h3>a city of dreams</h3>
      <img src="./triangles.svg" />
      <h2>Here's Your Story</h2>
      <img src="./slide1.svg" />
      <img src="./slide2.svg" />
      <img src="./slide3.svg" />
      <img src="./slide4.svg" />
      <h1>Your First Step Begins... now</h1>
      <h2>Dreams are projects ideas in your heart waiting to come to life</h2>
      <div>
        <h2>Share Your Dream</h2>
        <div>
          <p>Dream Code Name (flexible)</p>
          <input placeholder="orpheusMaps" />
        </div>
        <div>
          <p>Collaborators (github usernames)</p>
          <input placeholder="orpheus, zrl, zsh" />
        </div>
        <div>
          <p>Dream Code Name (flexible)</p>
          <textarea
            placeholder="Imagine a map with every club, hackathon, and
community event full of content from club meets,
hackathons, and project ships."
          />
          <div>
            <p>Upload a sketch of your dream</p>
            <input type="file" />
          </div>
          <button>Download yourDream.md</button>
          <button>leaders-summit repo</button>
          <p>To register, share your dream in a PR. Here’s a video on how to make your dream PR</p>
        </div>
      </div>

      <h2>here are some dreams (from the repo)</h2>
      <p>//populate dream chips here</p>
      <h3>additional information</h3>
      <p>//populate Q&A here</p>
      <p>Have any other questions? Reach out to thomas@hackclub.com</p>
      <div>
        <p>dream with us in #leaders-summit on Hack Club Slack</p>
      </div>
    </main>
  );
}
