import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { NextPage } from "next";

type Props = {
  text: string;
  route: string;
};

const LinkButton: NextPage<Props> = ({ text, route }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(route);
      }}
    >
      {text}
    </button>
  );
};

export default LinkButton;
