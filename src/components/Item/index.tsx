import * as S from "./index.styled";
import { useDispatch } from "react-redux";
import { DELETE_TODO } from "../../store/actions";

interface ItemProps {
  text: string;
  id: string;
}
export default function Item({ text, id }: ItemProps) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(DELETE_TODO(id));
  };

  return (
    <S.Container>
      <span>{text}</span>
      <button onClick={handleDelete}>Delete</button>
    </S.Container>
  );
}
