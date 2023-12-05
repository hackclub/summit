import Link from "next/link";

const Chip = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="border-2 border-secondary rounded-full px-10 py-2 flex items-center justify-between gap-5 text-2xl text-secondary"
    >
      {text}
    </Link>
  );
};

const Examples = () => {
  return (
    <div id="dream" className="bg-primary relative py-10">
      <div className="flex items-center justify-between gap-5 pl-14 mb-6">
        <h2 className="text-center text-secondary text-4xl">Here are some dreams</h2>
      </div>
      <div className="flex flex-wrap gap-5 px-14">
        <Chip text="Hack Club Trading Card Game" link="https://hackclub.com/dream-chip" />
        <Chip text="Magical First Code Game" link="https://hackclub.com/dream-chip" />
        <Chip text="Orpheus Maps" link="https://hackclub.com/dream-chip" />
        <Chip text="Slack Invite Cannon" link="https://hackclub.com/dream-chip" />
      </div>
    </div>
  );
};

export default Examples;
