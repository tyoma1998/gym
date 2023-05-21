import React, { useState } from "react";
import { Icon } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "store/auth/actions";
import st from "./LoginModal.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "router/routers";

function LoginModal({ show = false, setShow = () => {} }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const clientList = useSelector((state) => state?.auth?.clientList) ?? [];

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const [showError, setShowError] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  const loginUser = () => {
    const findSickPeople = clientList.find(
      (item) => item.login === login && password === item.password
    );

    if (findSickPeople) {
      dispatch(authActions.loginSick(findSickPeople));
      setShow(false);
      history(ROUTES.home);
    } else {
      setShowError("Неправильный логин или пароль");
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className={st.containerModal}>
      <div className={st.wrapperModal}>
        <h3 className={st.title}>Авторизация</h3>
        <input
          className={st.input}
          placeholder="Email"
          value={login}
          onChange={(e) => {
            setShowError(false);
            setLogin(e.target.value);
          }}
        />
        <div className={st.holderPassword}>
          <input
            className={st.input}
            placeholder="Пароль"
            value={password}
            type={passwordShown ? "text" : "password"}
            onChange={(e) => {
              setShowError(false);
              setPassword(e.target.value);
            }}
          />
          <Icon
            icon={passwordShown ? "unlock" : "lock"}
            minimal={true}
            onClick={() => setPasswordShown((prev) => !prev)}
            className={st.iconPassword}
            size="35"
          />
        </div>
        <div className={st.pricingFooterInner}>
          <button
            className={st.btnCoin}
            onClick={(e) => {
              e.stopPropagation();
              if (!login || !password) {
                return setShowError("Заполните все поля");
              }
              loginUser();
            }}
          >
            Войти
          </button>
        </div>
        <div
          className={st.invisibleBlock}
          onClick={() => {
            handleCloseModal();
          }}
        />
        {showError && <div className={st.holderError}>{showError}</div>}
      </div>
    </div>
  );
}

export default LoginModal;
