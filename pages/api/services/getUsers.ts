import { User } from "../models/User";

export default async function getUsers() {
  const user = await User.findAll();
  return user;
}
