// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method == "POST") {
    const data = req.body;

    await setDoc(
      doc(db, data.tablename, data.firstname + " " + data.lastname),
      data
    );

    console.log(data.firstname + " " + data.lastname + " added to firestore!");
    res.status(200).json("good");
  }
}
