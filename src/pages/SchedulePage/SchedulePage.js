import React, { useState } from "react";
import Layout from "layouts/Layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ru";
import EventComponent from "components/EventComponent/EventComponent";
import st from "./SchedulePage.module.scss";
import { useSelector } from "react-redux";
import SubscribeModal from "components/SubscribeModal/SubscribeModal";

const localizer = momentLocalizer(moment);

export const eventData = [
  {
    id: 1,
    title: "СУСТАВНАЯ ГИМНАСТИКА (БК)",
    text: "Игорь Муравьедов",
    start: new Date(2023, 4, 15, 8, 0, 0),
    end: new Date(2023, 4, 15, 12, 0, 0),
  },
  {
    id: 2,
    title: "YOGA HATHA",
    text: "Кристина Амохамедова",
    start: new Date(2023, 4, 15, 14, 0, 0),
    end: new Date(2023, 4, 15, 17, 0, 0),
  },
  {
    id: 3,
    title: "ПЛОСКИЙ ЖИВОТ (БК)",
    text: "Игорь Муравьедов",
    start: new Date(2023, 4, 15, 18, 0, 0),
    end: new Date(2023, 4, 15, 21, 0, 0),
  },
  {
    id: 4,
    title: "LOWER BODY",
    text: "Кристина Амохамедова",
    start: new Date(2023, 4, 16, 8, 0, 0),
    end: new Date(2023, 4, 16, 11, 0, 0),
  },
  {
    id: 5,
    title: "PILATES",
    text: "Кирилл Сахолинский",
    start: new Date(2023, 4, 16, 14, 0, 0),
    end: new Date(2023, 4, 16, 17, 0, 0),
  },
  {
    id: 6,
    title: "SUPER SCULPT",
    text: "Кирилл Сахолинский",
    start: new Date(2023, 4, 16, 18, 0, 0),
    end: new Date(2023, 4, 16, 21, 0, 0),
  },
  {
    id: 7,
    title: "YOGA IYENGAR",
    text: "Анастасия Упернюк",
    start: new Date(2023, 4, 17, 9, 0, 0),
    end: new Date(2023, 4, 17, 12, 0, 0),
  },
  {
    id: 8,
    title: "KICK-BOXING KIDS",
    text: "Виталий Хренов",
    start: new Date(2023, 4, 17, 13, 0, 0),
    end: new Date(2023, 4, 17, 16, 0, 0),
  },
  {
    id: 9,
    title: "PORT DE BRAS",
    text: "Матвей Головач",
    start: new Date(2023, 4, 17, 18, 30, 0),
    end: new Date(2023, 4, 17, 21, 30, 0),
  },

  {
    id: 10,
    title: "СУСТАВНАЯ ГИМНАСТИКА (БК)",
    text: "Игорь Муравьедов",
    start: new Date(2023, 4, 18, 8, 0, 0),
    end: new Date(2023, 4, 18, 12, 0, 0),
  },
  {
    id: 11,
    title: "YOGA HATHA",
    text: "Кристина Амохамедова",
    start: new Date(2023, 4, 18, 14, 0, 0),
    end: new Date(2023, 4, 18, 16, 0, 0),
  },
  {
    id: 12,
    title: "ПЛОСКИЙ ЖИВОТ (БК)",
    text: "Игорь Муравьедов",
    start: new Date(2023, 4, 18, 18, 0, 0),
    end: new Date(2023, 4, 18, 21, 0, 0),
  },
  {
    id: 13,
    title: "LOWER BODY",
    text: "Кристина Амохамедова",
    start: new Date(2023, 4, 19, 8, 0, 0),
    end: new Date(2023, 4, 19, 11, 0, 0),
  },
  {
    id: 14,
    title: "PILATES",
    text: "Кирилл Сахолинский",
    start: new Date(2023, 4, 19, 14, 0, 0),
    end: new Date(2023, 4, 19, 17, 0, 0),
  },
  {
    id: 15,
    title: "SUPER SCULPT",
    text: "Кирилл Сахолинский",
    start: new Date(2023, 4, 19, 18, 0, 0),
    end: new Date(2023, 4, 19, 21, 0, 0),
  },
  {
    id: 16,
    title: "YOGA IYENGAR",
    text: "Анастасия Упернюк",
    start: new Date(2023, 4, 20, 9, 0, 0),
    end: new Date(2023, 4, 20, 11, 0, 0),
  },
  {
    id: 17,
    title: "KICK-BOXING KIDS",
    text: "Виталий Хренов",
    start: new Date(2023, 4, 20, 13, 0, 0),
    end: new Date(2023, 4, 20, 15, 0, 0),
  },
  {
    id: 18,
    title: "PORT DE BRAS",
    text: "Матвей Головач",
    start: new Date(2023, 4, 20, 18, 30, 0),
    end: new Date(2023, 4, 20, 21, 30, 0),
  },
];

const getCurrentEvent = () => {
  let data = [];

  for (let i = 0; i < 20; i++) {
    data = [
      ...data,
      ...eventData.map((item) => ({
        ...item,
        start: new Date(moment(item.start).add("days", i * 7)),
        end: new Date(moment(item.end).add("days", i * 7)),
        id: item.id * (i + 1),
        user: [],
      })),
    ];
  }

  return data;
};

function SchedulePage() {
  moment.locale();
  const eventActive = useSelector((state) => state?.auth?.eventActive) ?? {};
  const clientId = useSelector((state) => state?.auth?.user.id) ?? "";

  const eventList = getCurrentEvent();
  console.log("----------eventList", eventList);
  const [showSubscribeModal, setShowSubscribeModal] = useState(null);

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.date.setDate(toolbar.date.getDate() - 7);
      toolbar.onNavigate("prev");
    };

    const goToNext = () => {
      toolbar.date.setDate(toolbar.date.getDate() + 7);
      toolbar.onNavigate("next");
    };

    const goToCurrent = () => {
      const now = new Date();
      toolbar.date.setMonth(now.getMonth());
      toolbar.date.setYear(now.getFullYear());
      toolbar.onNavigate("current");
    };

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span>
          <b>{date.format("MMMM")}</b>
          <span> {date.format("YYYY")}</span>
        </span>
      );
    };

    return (
      <div className={st.containerCalendarToolbar}>
        <div className={st.holderCalendarToolbar}>
          <button className={st.calendarBtn} onClick={goToBack}>
            Предыдущая неделя
          </button>

          <label className={["label-date"]}>{label()}</label>

          <button className={st.calendarBtn} onClick={goToNext}>
            Следующая неделя
          </button>
        </div>
      </div>
    );
  };

  const eventClicked = (event) => {
    if (!clientId) {
      return;
    }
    setShowSubscribeModal(event);
  };

  return (
    <Layout
      title="Расписание"
      text="У нас есть подробное расписание, где вы можете записаться на любое занятие по вашему выбору"
    >
      <h2 className={st.title}>РАСПИСАНИЕ ГРУППОВЫХ ПРОГРАММ</h2>
      <div style={{ height: 900, marginBottom: "40px" }}>
        <Calendar
          events={eventList}
          localizer={localizer}
          step={60}
          //   views={allViews}
          defaultDate={new Date()}
          popup={false}
          onShowMore={(events, date) =>
            this.setState({ showModal: true, events })
          }
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          //   views={["month1", "week", "day"]}
          components={{
            toolbar: CustomToolbar,
            event: EventComponent,
          }}
          onSelectEvent={eventClicked}
        />
      </div>
      <SubscribeModal
        event={showSubscribeModal}
        setShow={setShowSubscribeModal}
        clientId={clientId}
      />
    </Layout>
  );
}

export default SchedulePage;
