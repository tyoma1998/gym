import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "assets/images/logo.webp";
import st from "./Header.module.scss";
import { useSelector } from "react-redux";
import { ROUTES } from "router/routers";
import { Icon } from "@blueprintjs/core";
import LoginModal from "components/LoginModal/LoginModal";
import RegisterModal from "components/RegisterModal/RegisterModal";

function Header() {
  const history = useNavigate();

  const clientLogin = useSelector((state) => state?.auth?.user.login) ?? "";

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <header className={st.header}>
      <div className={st.container}>
        <div className={st.row}>
          <div className={st.col4}>
            <div className={st.header_logo_area}>
              <div onClick={() => history(ROUTES.home)}>
                <img className={st.logo} src={logoImg} alt="Logo" />
              </div>
            </div>
          </div>
          <div className={st.col8}>
            <div className={st.header_align}>
              <div className={st.header_navigation_area}>
                <ul className={st.main_menu}>
                  <li>
                    <span onClick={() => history(ROUTES.home)}>о клубе</span>
                  </li>
                  <li>
                    <span onClick={() => history(ROUTES.seasonTickets)}>
                      абонементы
                    </span>
                  </li>
                  <li>
                    <span onClick={() => history(ROUTES.schedule)}>
                      расписание
                    </span>
                  </li>
                  <li>
                    <span onClick={() => history(ROUTES.coach)}>
                      Инструкторы
                    </span>
                  </li>
                </ul>
              </div>
              <div className={st.header_action_area}>
                <div className={st.header_action_cart}>
                  {clientLogin ? (
                    <Icon
                      icon="user"
                      size={30}
                      className={st.personIcon}
                      onClick={() => history(ROUTES.account)}
                    />
                  ) : (
                    <ul className={st.main_menu}>
                      <li>
                        <span onClick={() => setShowLoginModal(true)}>
                          Вход
                        </span>
                      </li>
                      <li>
                        <span onClick={() => setShowRegisterModal(true)}>
                          Регистрация
                        </span>
                      </li>
                    </ul>
                  )}

                  {/* <button
                    className="btn-cart cart-icon"
                    onclick="window.location.href='shop.html'"
                  >
                    <span className="cart-count">2</span>
                    <i className="pe-7s-shopbag"></i>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
      <RegisterModal show={showRegisterModal} setShow={setShowRegisterModal} />
    </header>
  );
}

export default Header;
