import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const formDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
};

export const LoginPage = () => {
  // email
  // şifre
  // beni hatırla
  const [formData, setFormData] = useState(formDataInitial);

  const reset = () => {
    setFormData(formDataInitial);
  };

  const inputChangeHandler = (event) => {
    const { value, name, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // login request
    axios
      .post("http://myweb.com/api/login", formData)
      .then((res) => {
        console.log(res);
        // todo: ana sayfaya yönlendir
      })
      .catch((err) => {
        console.error("AXIOS ERR: ", err);
      });
  };

  useEffect(() => {
    console.warn(" ****** FORM DATA STATE UPDATED ****** ");
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <div className="form-container">
        <div className="form-bg"></div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="login-pass">Password</label>
            <input
              id="login-pass"
              type="password"
              name="password"
              value={formData.password}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="login-remember">Remember me</label>
            <input
              id="login-remember"
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label></label>
            <div>
              <button className="btn" type="submit">
                Login
              </button>
              <button className="btn" type="button" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
