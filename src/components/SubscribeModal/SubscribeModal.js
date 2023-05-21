import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "store/auth/actions";
import st from "./SubscribeModal.module.scss";

function SubscribeModal({ event = null, setShow = () => {}, clientId = "" }) {
  const dispatch = useDispatch();
  const eventActive = useSelector((state) => state?.auth?.eventActive) ?? {};

  const handleCloseModal = () => {
    setShow(false);
  };

  if (!event || !clientId) {
    return null;
  }

  if (eventActive?.[event.id] && eventActive[event.id].includes(clientId)) {
    return (
      <div className={st.containerModal}>
        <div className={st.wrapperModal}>
          <h3 className={st.title}>Вы записаны на занятие</h3>

          <h4>Занятие: {event.title}</h4>
          <h4>Инструктор: {event.text}</h4>

          <div className={st.pricingFooterInner}>
            <button
              className={st.btnCoin}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(
                  authActions.subscribeEvent({
                    userId: clientId,
                    eventId: event.id,
                  })
                );

                setShow(null);
              }}
            >
              Отписаться
            </button>
          </div>
          <div
            className={st.invisibleBlock}
            onClick={() => {
              handleCloseModal();
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={st.containerModal}>
      <div className={st.wrapperModal}>
        <h3 className={st.title}>Запись</h3>

        <h4>Занятие: {event.title}</h4>
        <h4>Инструктор: {event.text}</h4>

        <div className={st.pricingFooterInner}>
          <button
            className={st.btnCoin}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                authActions.subscribeEvent({
                  userId: clientId,
                  eventId: event.id,
                })
              );

              setShow(null);
            }}
          >
            Записаться
          </button>
        </div>
        <div
          className={st.invisibleBlock}
          onClick={() => {
            handleCloseModal();
          }}
        />
      </div>
    </div>
  );
}

export default SubscribeModal;
