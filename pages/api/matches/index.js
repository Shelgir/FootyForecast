import { getMatches } from "../../../lib/mongo/matches";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { matchesList, error } = await getMatches();
      if (error) {
        return res.status(500).json({ error });
      }

      return res.status(200).json({ matchesList });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  res.setHeader("Allow", ["GET"]);
  res.status(405).json({ error: "Method not allowed" });
};

export default handler;
