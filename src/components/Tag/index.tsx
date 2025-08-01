import * as S from "./TagStyled";

export type PropsTag = { size?: "small" | "big"; children: string };

const Tag = ({ size = "small", children }: PropsTag) => <S.TagContainer size={size}>{children}</S.TagContainer>

export default Tag;
