import { User } from "../models/User";

export default async function getUsers() {
  const users = await User.findAll();
  return users;
}
