import React, { useRef } from "react";
import * as S from "./index.styled";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../store/actions";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  text: string;
  id: string;
}
export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputRef.current) return;

    const newTodo: Todo = {
      text: inputRef.current.value,
      id: uuidv4(),
    };

    dispatch(ADD_TODO(newTodo));
    inputRef.current.value = "";
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Add</button>
    </S.Form>
  );
}
