import Link from "next/link";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Home() {
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
          <Image width={402} height={305} src={"/hero.svg"} />
        </div>
      </div>
      <div className=" w-full h-1 bg-purple-400 my-20"></div>

      <div class="overflow-x-auto">
        <table class="table table-xs">
          <thead>
            <tr>
              <th>Home Team</th>
              <th>Home TeamId</th>
              <th>Home Actual</th>
              <th>Home Predicted</th>
              <th>Away Team</th>
              <th>Away TeamId</th>
              <th>Away Actual</th>
              <th>Away Predicted</th>
              <th>Home Error</th>
              <th>Away Error</th>
              <th>Home Accuracy (%)</th>
              <th>Away Accuracy (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tottenham</td>
              <td>30</td>
              <td>0</td>
              <td>1.225698195</td>
              <td>Arsenal</td>
              <td>13</td>
              <td>2</td>
              <td>3.274325594</td>
              <td>1.225698195</td>
              <td>1.274325594</td>
              <td>22.57</td>
              <td>57.52</td>
            </tr>
            <tr>
              <td>Wolverhampton</td>
              <td>161</td>
              <td>0</td>
              <td>0.471875167</td>
              <td>Arsenal</td>
              <td>13</td>
              <td>2</td>
              <td>2.113740612</td>
              <td>0.471875167</td>
              <td>0.113740612</td>
              <td>52.81</td>
              <td>96.21</td>
            </tr>
            <tr>
              <td>Arsenal</td>
              <td>13</td>
              <td>2</td>
              <td>3.073317778</td>
              <td>Aston Villa</td>
              <td>24</td>
              <td>1</td>
              <td>1.532271777</td>
              <td>1.073317778</td>
              <td>0.532271777</td>
              <td>64.22</td>
              <td>73.39</td>
            </tr>
            <tr>
              <td>Liverpool</td>
              <td>26</td>
              <td>2</td>
              <td>1.998809449</td>
              <td>Arsenal</td>
              <td>13</td>
              <td>2</td>
              <td>2.251096232</td>
              <td>0.001190551</td>
              <td>0.251096232</td>
              <td>99.96</td>
              <td>91.63</td>
            </tr>
            <tr>
              <td>Arsenal</td>
              <td>13</td>
              <td>0</td>
              <td>0.251586871</td>
              <td>Brighton</td>
              <td>211</td>
              <td>3</td>
              <td>3.360324958</td>
              <td>0.251586871</td>
              <td>0.360324958</td>
              <td>74.84</td>
              <td>90.99</td>
            </tr>
            <tr>
              <td>Arsenal</td>
              <td>13</td>
              <td>3</td>
              <td>3.19578083</td>
              <td>Bournemouth</td>
              <td>183</td>
              <td>2</td>
              <td>1.551858771</td>
              <td>0.19578083</td>
              <td>0.448141229</td>
              <td>95.11</td>
              <td>85.06</td>
            </tr>
            <tr>
              <td>Brentford</td>
              <td>189</td>
              <td>0</td>
              <td>0.641199738</td>
              <td>Arsenal</td>
              <td>13</td>
              <td>3</td>
              <td>3.211637449</td>
              <td>0.641199738</td>
              <td>0.211637449</td>
              <td>35.88</td>
              <td>94.71</td>
            </tr>
            <tr>
              <td>Fulham</td>
              <td>170</td>
              <td>0</td>
              <td>0.251352416</td>
              <td>Arsenal</td>
              <td>13</td>
              <td>3</td>
              <td>3.495279738</td>
              <td>0.251352416</td>
              <td>0.495279738</td>
              <td>74.86</td>
              <td>87.62</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Home Team</th>
              <th>Home TeamId</th>
              <th>Home Actual</th>
              <th>Home Predicted</th>
              <th>Away Team</th>
              <th>Away TeamId</th>
              <th>Away Actual</th>
              <th>Away Predicted</th>
              <th>Home Error</th>
              <th>Away Error</th>
              <th>Home Accuracy (%)</th>
              <th>Away Accuracy (%)</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}
