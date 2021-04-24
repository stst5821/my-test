import React, { useState } from "react";
import "./App.css";

export const App = () => {
  // 名前をセットする
  const [name, setName] = useState();
  const onChangeName = (event) => setName(event.target.value);
  // メールアドレスをセット
  const [email, setEmail] = useState("");
  const onChangeEmail = (event) => setEmail(event.target.value);

  const onClickAdd = () => {
    // localStorageにname,indexを保存
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  // localStorageの中身を削除。テスト用。不要になったら消す。
  const onClickDelete = () => {
    localStorage.clear();
  };

  return (
    <div className="App">
      <h1>app.js</h1>
      <p>{localStorage.getItem("name")}</p>
      <label>
        名前：
        <input
          placeholder="名前を入力"
          defaultValue={localStorage.getItem("name")}
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
          defaultValue={localStorage.getItem("email")}
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
