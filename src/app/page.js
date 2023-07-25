import Link from "next/link";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { getMatches } from "../../lib/mongo/matches";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const fetchMatches = async () => {
  const data = await getMatches();
  if (!data) {
    throw new Error("Error fetching data");
  }
  return data || [];
};

export default async function Home() {
  const matchesList = await fetchMatches();
  const matches = matchesList.matchesList;
  return (
    <main className={`${roboto.className} flex flex-col min-h-screen  p-24`}>
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-3xl mb-5">FootyForecast</h1>
        <div className="flex gap-5">
          <Link href="/">
            <p className="hover:text-purple-700 transition-all">Home</p>
          </Link>
        </div>
      </div>
      <div className="flex min-h-full justify-between items-center py-10 mt-10">
        <div className="w-1/3">
          <p className=" mb-3">
            Footy Forecast will create a Big Data model that can forecast
            football players and teams performances in forthcoming games based
            on how they performed in previous games.
          </p>
          <button className="btn btn-primary">Enquire</button>
        </div>
        <div className="mb-5">
          <Image
            alt=""
            priority=""
            width={402}
            height={305}
            src={"/hero.svg"}
          />
        </div>
      </div>
      <div className=" w-full h-1 bg-purple-400 my-20"></div>

      <div className="text-3xl text-neutral font-bold">Predicted Matches </div>
      {matches.map((match, index) => (
        <div key={index} className="stats shadow my-5">
          <div className="stat">
            <div className="stat-figure text-secondary">
              {match["Home Accuracy (%)"]} %
            </div>
            <div className="stat-title">{match["Home Team"]}</div>
            <div className="stat-value">{match["Home Actual"]}</div>
            <div className="stat-desc text-accent">
              {match["Home Predicted"]}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              {match["Away Accuracy (%)"]} %
            </div>
            <div className="stat-title">{match["Away Team"]}</div>
            <div className="stat-value">{match["Away Actual"]}</div>
            <div className="stat-desc text-accent">
              {match["Away Predicted"]}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
