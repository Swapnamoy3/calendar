// import daysInMonth from "./daysInMonth"
import Day from "./Day.jsx";
import "../css/MonthStyles.css";
// import days from daysInMonth
import { useState } from "react";
import { useEffect } from "react";
export default function (props) {
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "friday",
    "Saturday",
  ];

  let daysInMonth = {
    January: 31,
    Feburary: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  let time = new Date(`1 ${props.month} 2024`);
  let list = [];
  let st = time.getDay();
  for (let i = 0; i < daysInMonth[props.month]; i++) {
    list.push(<Day date={i + 1} day={day[st]} />);
    st = (st + 1) % 7;
    if (st === 0) list.push(<br></br>);
  }

  let [days, setDays] = useState([list]);
  //   setDays(list);
  function fillDAys(noOfDays) {}

  useEffect(() => {
    fillDAys();
  }, []);

  return <div className="month">{days}</div>;
}
