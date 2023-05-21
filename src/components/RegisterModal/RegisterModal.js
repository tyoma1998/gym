import React, { useState } from "react";
import { Icon } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "store/auth/actions";
import st from "./RegisterModal.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "router/routers";

function RegisterModal({ show = false, setShow = () => {} }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const clientList = useSelector((state) => state?.auth?.clientList) ?? [];

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);

  const handleCloseModal = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className={st.containerModal}>
      <div className={st.wrapperModal}>
        <h3 className={st.title}>Регистрация</h3>
        <h4>
          Отправьте нам свой номер телефона и емаил и мы свяжемся с вами, когда
          ваша карта члена клуба будет готова
        </h4>
        <input
          className={st.input}
          placeholder="Email"
          value={login}
          onChange={(e) => {
            setShowError(false);
            setLogin(e.target.value);
          }}
        />
        <input
          className={st.input}
          placeholder="Номер телефона"
          value={password}
          onChange={(e) => {
            setShowError(false);
            setPassword(e.target.value);
          }}
        />

        <div className={st.pricingFooterInner}>
          <button
            className={st.btnCoin}
            onClick={(e) => {
              e.stopPropagation();
              if (!login || !password) {
                return setShowError("Заполните все поля");
              }
              handleCloseModal();
            }}
          >
            Отправить
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

export default RegisterModal;
