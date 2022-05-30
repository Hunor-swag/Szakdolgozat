import { User } from "./models/User";

export default async function getUserByEmail(email: string) {
  const user = await User.findOne({ where: { email: email } });
  return user;
}
