import React, { useState } from "react";
import footerImg from "assets/images/footer.webp";
import logoImg from "assets/images/logo.webp";

import st from "./Footer.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "router/routers";

function Footer() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [showTextSucess, setTextSucess] = useState(false);

  return (
    <div className={st.footerMain}>
      <img className={st.footerImg} src={footerImg} alt="Footer" />
      <div className={st.container}>
        <div className={st.row}>
          <div className={st.col6}>
            <div className={st.widgetItem}>
              <div className={st.aboutWidget}>
                <div className={st.footerLogo}>
                  <img src={logoImg} alt="Logo" className={st.logo} />
                </div>
                <p>
                  Zymzoo имеет вcе неoбхoдимoе oбoрудoвaние и инвентaрь для
                  рaзнooбрaзных кoмaндных видoв cпoртa, в нем мoгут быть
                  прoведены кaк индивидуaльные тренирoвки, тaк и кoрпoрaтивные
                  cocтязaния и дaже чемпиoнaты.
                </p>
                <div className={st.openingTime}>
                  <h4 className={st.title}>Время работы</h4>
                  <ul>
                    <li>Понедельник - Пятница: с 7 до 22</li>
                    <li>Суббота - Воскресенье: с 8 до 23 </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={st.col6}>
            <div className={st.widgetItem}>
              <h4 className={st.usefullLink}>Навигация</h4>
              <nav className={st.widgetMenuWrap}>
                <ul className={st.navMenuNav}>
                  <li>
                    <span onClick={() => history(ROUTES.home)}>О клубе</span>
                  </li>
                  <li>
                    <span onClick={() => history(ROUTES.seasonTickets)}>
                      Абонементы
                    </span>
                  </li>
                  <li>
                    <span onClick={() => history(ROUTES.schedule)}>
                      Расписание
                    </span>
                  </li>
                  <li>
                    <span onClick={() => history(ROUTES.coach)}>
                      Инструкторы
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={st.col6}>
            <div className={st.widgetItem}>
              <h4>Контактная информация</h4>
              <div className={st.widgetContactInfo}>
                <div className={st.contactInfoItem}>
                  <div className={st.content}>
                    <h4 className={st.title}>Адрес</h4>
                    <p>г. Таганрог, ул. Дипломная, д. 555</p>
                  </div>
                </div>
                <div className={st.contactInfoItem}>
                  <div className={st.content}>
                    <h4 className={st.title}>Телефон</h4>
                    <ul>
                      <li>
                        <p>+7(123)456-7893</p>
                      </li>
                      <li>
                        <p>+7(987)654-3213</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={st.col6}>
            <div className={st.widgetItem}>
              <h4>Новостная рассылка</h4>
              <div className={st.widgetNewsletter}>
                <p>
                  Подпишитесь на нашу рассылку новостей и получайте последние
                  обновления предложений, продуктов и рекламных акций, которые
                  мы предоставляем каждую неделю
                </p>
                <form className={st.newsletterForm}>
                  <input
                    className={st.formControl}
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setTextSucess(false);
                    }}
                  />
                  <button
                    className={st.btn}
                    type="button"
                    onClick={() => {
                      setEmail("");
                      setTextSucess(true);
                    }}
                  >
                    Отправить
                  </button>

                  {showTextSucess && (
                    <p className={st.textSuccess}>Сообщение отправлено</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
