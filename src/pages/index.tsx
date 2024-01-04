import { Akaya_Kanadaka } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import YouTube from "react-youtube";
const akaya = Akaya_Kanadaka({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [player, setPlayer] = useState<any>();
  const cookieRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cookieRef.current) {
      cookieRef.current.style.display = "block";
    }
  }, []);

  return (
    <main
      className={
        akaya.className + " relative flex items-center flex-col justify-center min-h-screen gap-2"
      }
    >
      <Toaster />
      <h1 className="text-3xl">what you seek is seeking you</h1>
      <div ref={cookieRef} className="text-center text-xl">
        <p>
          This website uses cookies to provide necessary website functionality, improve your
          experience and analyze our traffic.
          <br />
          By using our website, you agree to our Privacy Policy and our Cookies Policy.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
          onClick={() => {
            if (!player) return toast.error("Something went wrong. Try again.");
            if (cookieRef.current && videoRef.current) {
              cookieRef.current.style.display = "none";
              videoRef.current.style.display = "block";
            }
            player.playVideo();
          }}
        >
          ACCEPT
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => {
            if (!player) return toast.error("Something went wrong. Try again.");
            if (cookieRef.current && videoRef.current) {
              cookieRef.current.style.display = "none";
              videoRef.current.style.display = "block";
            }
            player.playVideo();
          }}
        >
          DENY
        </button>
      </div>
      <div ref={videoRef} style={{ display: "none" }}>
        <YouTube
          videoId={"fUy78IYJNMI"}
          onReady={(e) => {
            setPlayer(e.target);
          }}
        />
        <h1>Happy Leeking ;)</h1>
      </div>
    </main>
  );
}
