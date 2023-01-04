import React, { useCallback, useRef, useState } from "react";

const Home = () => {
  const [todo, setTodo] = useState<(string | null)[]>([]);
  const [text, setText] = useState("");
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setTodo((prev) => [...prev, text]);
      setText("");
    },
    [text]
  );
  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }, []);
  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="text" value={text} onChange={onChange} />
      </form>
      {todo?.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </>
  );
};

export default Home;
