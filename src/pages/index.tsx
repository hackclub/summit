import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <h1>
          Leaders Summit
        </h1>
        <img src="./HackClubLogo.svg"/>
        <p>
        A magical weekend of invention in San Francisco with the best club leaders from around the world
        </p>
        <button>
          Share Your Dream
        </button>
        <img src="./bridge.svg"/>
        <h2>You're At The Top Of Your Craft</h2>
        <img src="./plane.svg"/>
        <h2>50 Inventors</h2>
        <h3>a gathering of dreamers</h3>
        <img src="./dinos.svg"/>
        <h2>Feb. 23rd-25th</h2>
        <h3>a weekend of dreams</h3>
        <img src="./california.svg"/>
        <h2>San Francisco</h2>
        <h3>a city of dreams</h3>

      </div>
    </main>
  )
}
