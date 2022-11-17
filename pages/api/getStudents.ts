// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentData>
) {
  const docRef = collection(db, "students");
  const docSnap = await getDocs(docRef);
  const docList = docSnap.docs.map((doc) => doc.data());

  if (docList.length > 0) {
    res.status(200).json(docList);
  } else {
    console.log("No students!");
    res.status(500).end();
  }
}
