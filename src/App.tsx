import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">合约量化交易机器人</header>
      <div className="App-body">
        <form
          className="register-form"
          action="http://127.0.0.1:5000/register"
          method="post"
        >
          <input placeholder="api-key" type="text" name="api-key"></input>
          <input placeholder="secret-key" type="text" name="secret-key"></input>
          <input placeholder="notify-uid" type="text" name="notify-uid"></input>
          <input
            placeholder="开仓数(多少个ETH)"
            type="text"
            name="quantity"
          ></input>
          <input placeholder="合约倍数" type="text" name="leverage"></input>
          <input
            placeholder="联系方式(电话或者邮箱)"
            type="text"
            name="contact"
          ></input>
          <input placeholder="用户名" type="text" name="username"></input>
          <input type="submit" value="提交"></input>
        </form>
        <form
          className="stop-form"
          action="http://127.0.0.1:5000/stop"
          method="post"
        >
          <input className="circle-button" type="submit" value="停机"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
