// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";

type Data = {
  email: string;
  password: string;
  role: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "POST") {
    const email = req.body.email;
    const password = req.body.password;

    const usersCol = collection(db, "users");

    const usersSnapshot = await getDocs(usersCol);

    const usersList = usersSnapshot.docs.map((doc) => doc.data());

    const user = usersList.find((data: DocumentData) => {
      return data.email === email && data.password === password;
    });

    const role = user!.role;

    res.status(200).json({ email, password, role });
  }
}
