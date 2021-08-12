import { useState } from "react";
import "./controller.css";

const Stop = () => {
  return (
    <div className="Controller">
      <header className="Controller-header">合约量化交易机器人</header>
      <div className="Controller-body">
        <div className="register-form">
          <form
            className="stop-form"
            action="http://127.0.0.1:5000/stop"
            method="post"
          >
            <input placeholder="wx-uid" type="text" name="wx-uid"></input>
            <input className="circle-button" type="submit" value="停机"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stop;
