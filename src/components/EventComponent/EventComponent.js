import React from "react";
import { useSelector } from "react-redux";
import st from "./EventComponent.module.scss";

function EventComponent({ event }) {
  const { text, title } = event;
  const eventActive = useSelector((state) => state?.auth?.eventActive) ?? {};
  const clientId = useSelector((state) => state?.auth?.user.id) ?? "";

  const currentEventActive = eventActive?.[event.id] || [];

  const isSubscribeUser = clientId && currentEventActive.includes(clientId);

  return (
    <div
      className={st.container}
      // onClick={() => {
      //   console.log("aaaaaaa");
      // }}
    >
      {isSubscribeUser && <div className={st.isSubscribeUser}>Вы записаны</div>}
      <div>{title}</div>
      <br />
      <div>{text}</div>
    </div>
  );
}

export default EventComponent;
