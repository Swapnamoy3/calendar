import { useState } from "react";

export default function () {
  let [reminder, setReminder] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });

  function changeHandeller(event) {
    let { name, value } = event.target;
    setReminder((reminder) => {
      return { ...reminder, [name]: value };
    });
  }

  function submitHandeller(event) {
    event.preventDefault();

    console.log(`reminder ${reminder.start} is submitted`);
  }

  return (
    <form action="">
      <input onChange={changeHandeller} name="title" type="text" />
      <textarea onChange={changeHandeller} name="description"></textarea>
      <input onChange={changeHandeller} type="time" name="start" id="" />
      <input onChange={changeHandeller} type="time" name="end" id="" />
      <button onClick={submitHandeller}>submit</button>
    </form>
  );
}
