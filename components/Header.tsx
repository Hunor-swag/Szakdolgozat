import { NextPage } from "next";
import LinkButton from "./LinkButton";

const Header: NextPage = () => {
  return (
    <div>
      <LinkButton route="/" text="Homepage" />
      <LinkButton route="/admin" text="Admin panel" />
      <LinkButton route="/user" text="User panel" />
    </div>
  );
};

export default Header;
