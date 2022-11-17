import Calendar from 'react-calendar'
import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import './index.css';

function App() {
  const [value, setValue] = useState(new Date());
  const something = value.toDateString().split(' ')
  const year = something[3]
  const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  // const days = [leap ? 31 : 30, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30]
  // const initialValue = 0;
  // const total_days = days.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initialValue
  // );
  const saka_months = [
    'Chaitra',
    'Vaisakha',
    'Jyaistha',
    'Asadha',
    'Sravana',
    'Bhadra',
    'Asvina',
    'Kartika',
    'Agrahayana',
    'Pausa',
    'Magha',
    'Phalguna',
  ];

  const saka_days = [
    'Somavara',
    'Mangalavara',
    'Budhavara',
    'Guruvara',
    'Shukravara',
    'Shanivara',
    'Ravivara',
  ];

  return (
    <div>
      <div><h1>Gregorian to Saka</h1></div>
      <div className="text-right">
        {value[0] && value[1] ? <p>{value[0].toDateString()} - {value[1].toDateString()}</p> : <p>{value.toDateString()}</p>}
        <Calendar onChange={setValue} value={value}/>
      </div>
      <div>
        {console.log(value.getMonth())}
        <p>{saka_days[value.getDay()]}-{(value.getMonth() > 2) ? (something[3] - 78) : (value.getMonth === 2 ? (leap ? (value.getDate() > 22 ? something[3] - 78 : something[3] - 79) : (value.getDate() > 21 ? something[3] - 78 : something[3] - 79)) : (something[3] - 79))}</p>
        <p>{value.getDate() > 20 ? (saka_months[(value.getMonth() < 2 ? value.getMonth() + 10  : (value.getMonth() - 2))% 12]) : (saka_months[(value.getMonth() < 2 ? value.getMonth() + 9  : (value.getMonth() - 3))% 12])}</p>


        <div>
          <p>{leap ? (value.getMonth() > 2 || (value.getMonth() === 2 && value.getDate() >= 22) ? (value.getFullYear() - 78) : (value.getFullYear() - 79)) : ((value.getMonth() > 2 || (value.getMonth() === 2 && value.getDate() >= 21) ? (value.getFullYear() - 78) : (value.getFullYear() - 79)))}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
