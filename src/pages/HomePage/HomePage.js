import Header from "components/Header/Header";
import React from "react";
import homeMain from "assets/images/home-main.webp";
import homeMan from "assets/images/home-man.webp";
import homeImg1 from "assets/images/homeImg1.webp";

import st from "./HomePage.module.scss";
import Footer from "components/Footer/Footer";

const MOCK_DATA = [
  {
    icon: "https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f1.png",
    title: "Лучшая тренировка",
    text: "Лучшая команда по обучению",
  },
  {
    icon: "https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f3.png",
    title: "Новейшее оборудование",
    text: "Новейшее оборудование оснащено усовершенствованными экологическими технологиями",
  },
  {
    icon: "https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f2.png",
    title: "Квалифицированный инструктор",
    text: "Квалифицированный инструктора, которые смогу помочь вам в любом вопросе",
  },
  {
    icon: "https://htmldemo.net/zymzoo/zymzoo/assets/img/icons/f4.png",
    title: "Лауреаты премии",
    text: "Лауреат премии 'Победители' - основная программа по всей России",
  },
];

function HomePage() {
  return (
    <>
      <div className={st.container}>
        <div className={st.homeMainContainer}>
          <img className={st.homeMain} src={homeMain} alt="Logo" />
          <div className={st.homeTriangle}></div>
          <Header></Header>
          <div className={st.homeMainContent}>
            <div className={st.homeMainContentInfo}>
              <h2 className={st.homeMainTitle}>
                Время <span className={st.textWhite}>привести </span>
                себя
                <span className={st.textWhite}> в форму</span>
              </h2>
              <p className={st.homeMainText}>
                Не откладывайте свое здоровье и красоту на потом! Приходите к
                нам уже сегодня и получите бесплатный пробный день! Запишитесь
                по телефону или на сайте и приготовьтесь к преображению!
              </p>
            </div>
            <div className={st.homeMainContentImg}>
              <img className={st.homeMan} src={homeMan} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className={st.wrapperTrainers}>
        <div className={st.holderTrainers}>
          <div className={st.containerTrainers}>
            <div className={st.holderImg1}>
              <img className={st.img1} src={homeImg1} alt="Img" />
            </div>
            <div>
              <div className={st.sectionTitle}>
                {/* <div className={st.subtitle}>SCIENCE 2005</div> */}
                <h2 className={st.title}>
                  ЛУЧШИЕ{" "}
                  <span>
                    ОБОРУДОВАНИЯ <br />
                    &amp; ФИТНЕС-
                  </span>
                  ТРЕНЕРЫ
                </h2>
                <div className={st.desc}>
                  <p>
                    Тренажерный зал необходим для того, чтобы поддержать
                    здоровье. Мышечная нагрузка необходима нашему телу не только
                    для того, чтобы мышцы не были дряблыми. Мышечная нагрузка
                    активизирует работу всех систем организма, нормализует обмен
                    веществ и работу гормональной системы. Мышечная нагрузка
                    требуется не только взрослым, но и детям. Движение – основа
                    жизни. И так в чём же польза тренажёрного зала? Поехали!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={st.featuresArea}>
        <div className={st.holderFeatures}>
          <div className={st.row}>
            <div className={st.col12}>
              <div className={st.featuredColumnsWrap}>
                <div
                  className={st.featuredItemsStyle2}
                  data-bg-img="assets/img/photos/bg-f2.jpg"
                >
                  <div className={st.row2}>
                    {MOCK_DATA.map((item) => {
                      return (
                        <div className={st.col66}>
                          <div className={st.featuredItem}>
                            <div className={st.featuredIcon}>
                              <img src={item.icon} alt="Image" />
                            </div>
                            <div className={st.featuredInfo}>
                              <h4>{item.title}</h4>
                              <p>{item.text}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={st.featuredDiscountItem}>
                  <div className={st.thumb} src={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
