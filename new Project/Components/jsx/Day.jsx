import { useState } from "react";
import "../css/DayStyles.css";
import ReminderForm from "./ReminderForm.jsx";
export default function (props) {
  let [visible, SetVisible] = useState(false);
  function setReminder() {
    SetVisible((v) => !v);
  }

  return (
    <span className="day">
      <h1 onClick={setReminder}>{props.date}</h1>
      <h5>{props.day}</h5>
      {visible ? <ReminderForm /> : null}
    </span>
  );
}
