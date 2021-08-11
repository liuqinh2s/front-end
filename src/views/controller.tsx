import { useState } from "react";
import "./controller.css";

const Controller = () => {
  const [wxUid, setWxUid] = useState("");

  const start = () => {
    fetch("/start", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //请求的参数
        wxUid,
      }),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data); //请求到的数据
      });
  };

  const stop = () => {
    fetch("/stop", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //请求的参数
        wxUid,
      }),
    })
      .then((req) => req.json())
      .then((data) => {
        console.log(data); //请求到的数据
      });
  };

  const handleChange = (evt: any) => {
    setWxUid(evt.target.value);
  };

  return (
    <div className="Controller">
      <header className="Controller-header">合约量化交易机器人</header>
      <div className="Controller-body">
        <div className="register-form">
          <form>
            <input
              placeholder="wx-uid"
              type="text"
              value={wxUid}
              name="wx-uid"
              onChange={handleChange}
            ></input>
            <input
              className="circle-button"
              type="submit"
              value="停机"
              onClick={stop}
            ></input>
            <input
              className="circle-button"
              type="submit"
              value="开机"
              onClick={start}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Controller;
