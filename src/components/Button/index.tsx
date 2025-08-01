import * as S from "./ButtonStyled";
type PropsButton = {
  type: "button" | "link";
  title: string;
  to?: string;
  children: string;
  onClick?: () => void;
};

const Button = ({ children, type, title, onClick, to }: PropsButton) => {
  if (type === "button") {
    return <S.Button type="button" title={title} onClick={onClick}>{children}</S.Button>
  };
  return <S.ButtonLink to={to as string} title={title}>{children}</S.ButtonLink>
};

export default Button;
