import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import SearchBody from "../components/SearchBody";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
      {/*    header function with */}
      {/*    middle page with the search function */}
          <SearchBody/>
      </div>
  )
}
