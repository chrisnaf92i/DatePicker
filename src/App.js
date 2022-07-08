import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const today = new Date;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const [date, setDate] = useState("");
  const [daySelected, setDaySelected] = useState("");
  const [monthSelected, setMonthSelected] = useState("");
  const [yearSelected, setYearSelected] = useState("");
  const [timeSelected, setTimeSelected] = useState("");


  useEffect(() => {
    setDate(`${today.getDay()}/${today.getMonth()}/${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`);
    setDaySelected(today.getDay());
    setMonthSelected(today.getMonth());
    setYearSelected(today.getFullYear());
  }, [])

  const reset = () => {
    setDate(`${today.getDay()}/${today.getMonth()}/${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`);
  }

  return (
    <main className="App">
      <h1> Schedule Response </h1>

      <header>
        <p> Date <span> {daySelected}/{monthSelected}/{yearSelected} </span> </p>
        <p> Time <span> HH/MM </span> </p>
      </header>

      <section>
        <article>
          <div>
            <p> {months[monthSelected]} {yearSelected} </p>

            <p>
              <button>Back</button>
              <button>Next</button>
            </p>
          </div>

          
        </article>
        

        <aside>
          <div>
            <p> Time <span> Heure selectionner </span> </p>
          </div>
          
          
          

        </aside>

      </section>

      <button onClick={() => {
        console.log(date);
      }}> Schedule </button>
      <button onClick={reset}> Cancel </button>
    </main>
  );
}

export default App;
