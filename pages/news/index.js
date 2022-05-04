import Link from 'next/link'
import {Fragment} from 'react'

const news = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/AppleSucks'>Apple is tanking</Link></li>
        <li><Link href='/news/sunsWin'>Suns Win the ship</Link></li>
      </ul>
    </Fragment>

  )
}

export default news