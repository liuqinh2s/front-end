import "./register.css";

const Register = () => {
  return (
    <div className="Register">
      <header className="Register-header">合约量化交易机器人</header>
      <div className="Register-body">
        <form
          className="register-form"
          action="http://127.0.0.1:5000/register"
          method="post"
        >
          <input placeholder="api-key" type="text" name="api-key"></input>
          <input placeholder="secret-key" type="text" name="secret-key"></input>
          <input placeholder="wx-uid" type="text" name="wx-uid"></input>
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
      </div>
    </div>
  );
};

export default Register;
