import Layout from "layouts/Layout";
import React, { useState } from "react";
import pricing1 from "assets/images/pricing1.webp";
import pricing2 from "assets/images/pricing2.webp";
import pricing3 from "assets/images/pricing3.webp";
import st from "./SeasonTicketsPage.module.scss";
import RecordModal from "components/RecordModal/RecordModal";

const MOK_DATA = [
  {
    title: "АБОНЕМЕНТ 1 МЕСЯЦ",
    img: pricing1,
    text: "Безлимитное посещение клуба в течении 1 месяца",
    isFree: false,
  },
  {
    title: "АБОНЕМЕНТ 6 МЕСЯЦЕВ",
    img: pricing2,
    text: "Безлимитное посещение клуба в течение 6 месяцев",
    isFree: false,
  },
  {
    title: "АБОНЕМЕНТ 12 МЕСЯЦЕВ",
    img: pricing3,
    text: "Безлимитное посещение клуба в течение 12 месяцев",
    isFree: false,
  },
];

function SeasonTicketsPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout
      title="АБОНЕМЕНТЫ"
      text="Тренажерный зал - лучший способ поддержать свое здоровье"
    >
      <div className={st.container}>
        <div className={st.holderTitle}>
          {/* <h4 className={st.titleAdditional}>ДОБРО ПОЖАЛОВАТЬ В ZYMZOO</h4> */}
          <h2 className={st.title}>
            <span className={st.textYellow}> ВЫБЕРИТЕ </span>
            СВОЙ
            <span className={st.textYellow}> ТАРИФ </span>
          </h2>
          <span className={st.titleAdditional}>
            Занятия в тренажерном зале - это одно из средств физического
            воспитания, направленное на всестороннее физическое развитие и
            оздоровление путем использования упражнений с отягощениями и
            сопротивлениями различных мышечных групп.
          </span>
        </div>
        <div className={st.holderList}>
          {MOK_DATA.map(({ title, img, text, isFree }) => {
            return (
              <div className={st.holderCard}>
                <div className={st.pricingItem}>
                  <div className={st.pricingTitle}>
                    <h2 className={st.textCenter}>{title}</h2>
                  </div>
                  <div className={st.pricingThumb}>
                    <img src={img} alt="Image" />
                  </div>
                  <div className={st.pricingAmount}>
                    <h4>{text}</h4>
                    <h3 className={st.textCenter}>
                      {isFree ? "БЕСПЛАТНО" : ""}
                    </h3>
                  </div>
                  <div className={st.ricingFooter}>
                    <div className={st.pricingFooterInner}>
                      <button
                        className={st.btnCoin}
                        onClick={() => setShowModal(true)}
                      >
                        УЗНАТЬ ЦЕНУ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <RecordModal show={showModal} setShow={setShowModal} />
    </Layout>
  );
}

export default SeasonTicketsPage;
