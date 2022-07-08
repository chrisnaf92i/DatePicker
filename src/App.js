import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const today = new Date();
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
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTime, setSelectedTime] = useState("");


  useEffect(() => {
    setSelectedDay(today.getDay());
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
    setSelectedTime("00:00 AM")
    setDate(`${selectedDay}/${selectedMonth}/${selectedYear} | ${selectedTime} `);

  }, [])

  const resetSelectedDate = () => {
    setSelectedDay(today.getDay());
    setSelectedMonth(today.getMonth());
    setSelectedYear(today.getFullYear());
    setDate(`${selectedDay}/${selectedMonth}/${selectedYear}`);
  }
  const handleClickGoToNextMonth = () => {
    
      setSelectedMonth(selectedMonth + 1);
    
    if(selectedMonth >= 11){
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1)

    }

    setDate(`${selectedDay}/${selectedMonth + 1}/${selectedYear}`);

  }
  const handleClickGoToPreviousMonth = () => {
    
    setSelectedMonth(selectedMonth - 1);
  
  if(selectedMonth <= 0){
    setSelectedMonth(11);
    setSelectedYear(selectedYear - 1);
  }

  setDate(`${selectedDay}/${selectedMonth + 1}/${selectedYear}`);

  
}

  
  return (
    <main className="App">
      <h1 className='Title'> Schedule Response </h1>

      <header className="HeaderResult">
        <p className="Result"> Date <span className="ResultData"> {selectedDay}/{selectedMonth + 1}/{selectedYear} </span> </p>
        <p className="Result"> Time <span className="ResultData"> HH/MM </span> </p>
      </header>

      <section>
        <article className='Calendar'>
          <div className="MonthSelector">
            <p className='MonthSelected'> {months[selectedMonth]} {selectedYear} </p>

            <p>
              <button className='NavMonth' onClick={handleClickGoToPreviousMonth}> {"<"} </button>
              <button className='NavMonth' onClick={handleClickGoToNextMonth}>{">"}</button>
            </p>
          </div>

          
        </article>
        

        <aside>
          <div>
            <p> Time <span> Heure selectionner </span> </p>
          </div>



        </aside>

      </section>

      <button className='btn--validate' onClick={() => {
        console.log(date);
      }}> Schedule </button>
      <button className='btn--cancel' onClick={resetSelectedDate}> Cancel </button>
    </main>
  );
}

export default App;
