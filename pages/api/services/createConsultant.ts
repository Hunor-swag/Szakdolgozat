import { Consultant } from "../models/Consultant";

export default async function createConsultant(
  firstname: string,
  lastname: string,
  email: string,
  role: string,
  faculty: string,
  professorship: string,
  title: string,
  status: string,
  academic_degree: string
) {
  const consultant = await Consultant.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
    role: role,
    faculty: faculty,
    professorship: professorship,
    title: title,
    status: status,
    academic_degree: academic_degree,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
    });
}
