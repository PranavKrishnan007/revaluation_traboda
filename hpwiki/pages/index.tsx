import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import SearchBody from "../components/SearchBody";
import Topbar from "../components/topbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      {/*    header function with */}
          <Topbar/>
      {/*    middle page with the search function */}
          <SearchBody/>
      </div>
  )
}
