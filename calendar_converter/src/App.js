import Calendar from 'react-calendar'
import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import './index.css';

function App() {
  const [value, setValue] = useState(new Date());
  const current_month = value.getMonth()
  const current_date = value.getDate()
  const current_year = value.getFullYear()
  const leap = (current_year % 4 === 0 && current_year % 100 !== 0) || current_year % 400 === 0

  const saka_days = [
    'Ravivara',
    'Somavara',
    'Mangalavara',
    'Budhavara',
    'Guruvara',
    'Shukravara',
    'Shanivara',
  ];

  const month = [
    // saka_month,previous saka_month,gregorian_month,saka_greg_start_date,greg_month_total_days
    ['Magha', 'Pausa', 'Jan', 21, 31],
    ['Phalguna', 'Magha', 'Feb', 20, leap? 29 : 28],
    ['Chaitra', 'Phalguna', 'Mar', leap? 21 : 22, 31],
    ['Vaisakha', 'Chaitra', 'Apr', 21, 30],
    ['Jyaistha', 'Vaisakha', 'May', 22, 31],
    ['Asadha', 'Jyaistha', 'Jun', 22, 30],
    ['Sravana', 'Asadha', 'Jul', 23, 31],
    ['Bhadra', 'Sravana', 'Aug', 23, 31],
    ['Asvina','Bhadra', 'Sep', 23, 30],
    ['Kartika', 'Asvina', 'Oct', 23, 31],
    ['Agrahayana', 'Kartika', 'Nov', 22, 30],
    ['Pausa', 'Agrahayana', 'Dec', 22, 31],
  ];


  return (
    <div>
      <div><h1>Gregorian to Saka</h1></div>
      <div className="text-right">
        {value[0] && value[1] ? <p>{value[0].toDateString()} - {value[1].toDateString()}</p> : <p>{value.toDateString()}</p>}
        <Calendar onChange={setValue} value={value}/>
      </div>
      <div>
        <div>
          <p>
            DAY : {saka_days[value.getDay()]}
          </p>
          <p>
            DATE : {current_date >= month[current_month][3] ? current_date - month[current_month][3] + 1 : month[current_month][4] - month[current_month][3] + current_date + 1}
          </p>
          <p>
          MONTH : {current_date >= month[current_month][3] ? (month[current_month][0]) : (month[current_month][1])}
          </p>
          <p>
            YEAR : {(current_month < 2 || (current_month === 2 && current_date < month[current_month][3])) ? (current_year - 79) : (current_year - 78)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
