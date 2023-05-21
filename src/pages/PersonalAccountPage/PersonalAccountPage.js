import Layout from "layouts/Layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "router/routers";
import * as authActions from "store/auth/actions";
import st from "./PersonalAccountPage.module.scss";

function PersonalAccountPage() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const clientLogin = useSelector((state) => state?.auth?.user) ?? {};

  const data = {
    firstName: clientLogin?.firstName || "",
    lastName: clientLogin?.lastName || "",
    login: clientLogin?.login || "",
    subscription: clientLogin?.subscription || "",
    startSubscription: clientLogin?.startSubscription || "",
    endsSubscription: clientLogin?.endsSubscription || "",
  };

  const handleOut = () => {
    dispatch(authActions.signOut());
    history(ROUTES.home);
  };

  return (
    <Layout title="личный кабинет" classNameHeader={st.classNameHeader}>
      <div className={st.container}>
        <div>
          <div>
            <p>Логин</p>
            <input
              className={st.input}
              placeholder="Логин"
              value={data.login}
              readOnly
            />
          </div>
          <div className={st.holderInfoUser}>
            <div className={st.holderInfoUserContent}>
              <p>Имя</p>

              <input
                className={st.input}
                placeholder="Имя"
                value={data.firstName}
                readOnly
              />
            </div>
            <div className={st.holderInfoUserContent}>
              <p>Фамилия</p>

              <input
                className={st.input}
                placeholder="Фамилия"
                value={data.lastName}
                readOnly
              />
            </div>
          </div>
          <div className={st.containerAdditionalInfo}>
            <div className={st.holderAdditionalInfo}>
              <p>Ваш абонемент: {data.subscription}</p>
              <p>Начало абонемента: {data.startSubscription}</p>
              <p>Конец абонемента: {data.endsSubscription}</p>
            </div>
            <div className={st.holderBtn}>
              <button className={st.btnCoin} onClick={handleOut}>
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PersonalAccountPage;
