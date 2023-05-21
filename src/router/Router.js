import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "./routers";
import HomePage from "pages/HomePage/HomePage";
import SeasonTicketsPage from "pages/SeasonTicketsPage/SeasonTicketsPage";
import SchedulePage from "pages/SchedulePage/SchedulePage";
import CoachPage from "pages/CoachPage/CoachPage";
import PersonalAccountPage from "pages/PersonalAccountPage/PersonalAccountPage";

function RouterCustom() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.seasonTickets} element={<SeasonTicketsPage />} />
        <Route path={ROUTES.schedule} element={<SchedulePage />} />
        <Route path={ROUTES.coach} element={<CoachPage />} />
        <Route path={ROUTES.account} element={<PersonalAccountPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default RouterCustom;
