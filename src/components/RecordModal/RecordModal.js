import React, { useState } from "react";

import st from "./RecordModal.module.scss";

function RecordModal({ show = false, setShow = () => {} }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
        <h3 className={st.title}>Тренируйся вместе с нами</h3>
        <input
          className={st.input}
          placeholder="Имя"
          value={name}
          onChange={(e) => {
            setShowError(false);
            setName(e.target.value);
          }}
        />
        <input
          className={st.input}
          placeholder="Номер телефона"
          value={phone}
          onChange={(e) => {
            setShowError(false);
            setPhone(e.target.value);
          }}
        />
        <div className={st.pricingFooterInner}>
          <button
            className={st.btnCoin}
            onClick={(e) => {
              e.stopPropagation();
              if (!name || !phone) {
                return setShowError(true);
              }
              setShow(false);
            }}
          >
            УЗНАТЬ ЦЕНУ
          </button>
        </div>
        <div
          className={st.invisibleBlock}
          onClick={() => {
            handleCloseModal();
          }}
        />
        {showError && <div className={st.holderError}>Заполните все поля</div>}
      </div>
    </div>
  );
}

export default RecordModal;
