import React, { useState } from "react";
import "./App.css";

export const App = () => {
  // 名前をセットする
  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);
  // メールアドレスをセット
  const [email, setEmail] = useState("");
  const onChangeEmail = (event) => setEmail(event.target.value);

  const onClickAdd = () => {
    const names = name;
    setName(names);
    localStorage.setItem("names", names);

    const emails = email;
    setEmail(emails);
    localStorage.setItem("emails", emails);
  };

  const onClickDelete = () => {
    localStorage.clear();
  };

  return (
    <div className="App">
      <h1>app.js</h1>
      <label>
        名前：
        <input
          placeholder="名前を入力"
          value={name}
          onChange={onChangeName}
          type="text"
          name="name"
        />
      </label>
      <br />
      <label>
        メールアドレス：
        <input
          placeholder="メールアドレスを入力"
          value={email}
          onChange={onChangeEmail}
          type="text"
          name="email"
        />
      </label>
      <br />
      <br />
      <button onClick={onClickAdd}>送信</button>
      <button onClick={onClickDelete}>削除</button>
    </div>
  );
};
