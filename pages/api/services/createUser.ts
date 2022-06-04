import { User } from "../models/User";

export default async function createUser(
  firstname: string,
  lastname: string,
  password: string,
  email: string,
  role: string
) {
  const user = User.create({
    firstname: firstname,
    lastname: lastname,
    password: password,
    email: email,
    role: role,
  });
}
