import Layout from "layouts/Layout";
import React from "react";
import caoch1 from "assets/images/1.webp";
import caoch2 from "assets/images/2.webp";
import caoch3 from "assets/images/3.webp";
import caoch4 from "assets/images/4.webp";
import caoch5 from "assets/images/5.webp";
import caoch6 from "assets/images/6.webp";
import caoch7 from "assets/images/7.webp";
import caoch8 from "assets/images/8.webp";

import st from "./CoachPage.module.scss";

const MOK_DATA = [
  {
    img: caoch1,
    name: "Игорь Муравьедов",
    prof: "Инструктор по аэробики",
  },
  {
    img: caoch2,
    name: "Кристина Амохамедова",
    prof: "Инструктор по стречингу",
  },
  {
    img: caoch3,
    name: "Кирилл Сахолинский",
    prof: "Инструктор по фитнесу",
  },
  {
    img: caoch4,
    name: "Вероника Соколовская",
    prof: "Инструктор по пилатесу",
  },
  {
    img: caoch5,
    name: "Виталий Курючкин",
    prof: "Инструктор по бодилбилдингу",
  },
  {
    img: caoch6,
    name: "Матвей Головач",
    prof: "Инструктор по кардио",
  },
  {
    img: caoch7,
    name: "Анастасия Упернюк",
    prof: "Инструктор по йоге",
  },
  {
    img: caoch8,
    name: "Мухамед Мамедов",
    prof: "Инструктор по кардио",
  },
];

function CoachPage() {
  return (
    <Layout title="наши команда инструкторов">
      <div>
        <div className={st.holder}>
          <div className={st.holderList}>
            {MOK_DATA.map(({ img, name, prof }) => {
              return (
                <div className={st.col}>
                  <div className={st.teamItem}>
                    <div className={st.teamMember}>
                      <div className={st.thumb}>
                        <img className={st.img} src={img} alt="Image" />
                      </div>
                      <div className={st.content}>
                        <div className={st.memberInfo}>
                          <h4 className={st.name}>{name}</h4>
                          <h6 className={st.designation}>{prof}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CoachPage;
