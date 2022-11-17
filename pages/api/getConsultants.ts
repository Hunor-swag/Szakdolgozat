// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, doc, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../../firebase";

// type Data = {
//   academic_degree: string;
//   consultant_title: string;
//   email: string;
//   faculty: string;
//   firstname: string;
//   institution_name: string;
//   lang: string;
//   lastname: string;
//   professorship: string;
//   status: string;
//   tablename: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentData>
) {
  const docRef = collection(db, "consultants");
  const docSnap = await getDocs(docRef);
  const docList = docSnap.docs.map((doc) => doc.data());

  if (docList.length > 0) {
    res.status(200).json(docList);
  } else {
    console.log("No consultants!");
    res.status(500).end();
  }
}
