import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/about.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function Home() {





  console.log(data);
  const [information, setInformation] = useState([...data])

  return (
    <>
     
     <div className={styles.homebtn}>
     <a href="http://localhost:3001/">Home</a>
     </div>

      <div className={styles.main}>
        <div className={styles.name}>Computing Employees:</div>
        <div className={styles.section}>
          {
            information && information.map((info, index) => {
              if (info.job.toLowerCase() == "it") {
                return (
                  <Card key={index}
                    firstName={info.firstName}
                    job={info.job}
                    number={info.number} colour="floralwhite" font="15px" />
                )
              }
            })
          } </div>

        <div className={styles.name}>Business Employees:</div>
        <div className={styles.section}>
          {
            information && information.map((info, index) => {
              if (info.job.toLowerCase() == "marketer") {
                return (
                  <Card key={index}
                    firstName={info.firstName}
                    job={info.job}
                    number={info.number}
                    colour="white" font="15px" />
                )
              }
            })
          } </div>
      </div>
    </>
  )
}

 
