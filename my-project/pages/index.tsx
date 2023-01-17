import { Inter } from '@next/font/google'
import {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
    // <div className="">
    //   <div className="grid h-screen place-items-center relative">
    //     <div
    //         className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    //   <div>

    //   </div>
    //   </div>
    // </div>
      <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div
              className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>
          <div
              className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-2000"></div>
          <div
              className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-4000"></div>
          <div className="m-8 relative space-y-4">
            <div className=""><span
                className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-6xl font-extrabold">Gregorian to Saka Converter</span></div>
            <div>
              {value[0] && value[1] ? <p>{value[0].toDateString()} - {value[1].toDateString()}</p> : <p>{value.toDateString()}</p>}
              <Calendar onChange={setValue} value={value}/>
            </div>
            <div className="bg-white rounded-xl p-5 w-full shadow-xl border border-black">
              <p className="text-lg italic">
                DAY : {saka_days[value.getDay()]}
              </p>
              <p className="text-lg italic">
                DATE : {current_date >= month[current_month][3] ? current_date - month[current_month][3] + 1 : month[current_month][4] - month[current_month][3] + current_date }
              </p>
              <p className="text-lg italic">
                MONTH : {current_date >= month[current_month][3] ? (month[current_month][0]) : (month[current_month][1])}
              </p>
              <p className="text-lg italic">
                YEAR : {(current_month < 2 || (current_month === 2 && current_date < month[current_month][3])) ? (current_year - 79) : (current_year - 78)}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
