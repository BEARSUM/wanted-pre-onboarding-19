import { useSelector } from "react-redux";
import * as S from "./index.styled";
import Item from "../Item";

interface Todo {
  id: string;
  text: string;
}

export default function List() {
  const todos = useSelector((state: Todo[]) => state);
  return (
    <S.Container>
      {todos?.map((todo) => (
        <Item key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </S.Container>
  );
}
