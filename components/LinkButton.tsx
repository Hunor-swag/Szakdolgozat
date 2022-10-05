import { NextPage } from "next";

type Props = {
  text: string;
  route: string;
};

const LinkButton: NextPage<Props> = ({ text, route }) => {
  return (
    <a href={route}>
      <button>{text}</button>
    </a>
  );
};

export default LinkButton;
