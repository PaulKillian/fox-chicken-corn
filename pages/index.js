import { useEffect } from 'react'
import Image from 'next/image'
import nearShore from '../public/images/near-shore.png'
import farShore from '../public/images/far-shore.png'
import topWave from '../public/images/top-wave.png'
import boat from '../public/images/boat.png'
import bottomWave from '../public/images/bottom-wave.png'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  const moveBoat = () => {
    const boatImg = document.getElementById('boat')
    boatImg.classList.toggle('boat-animation')
}

  return (
    <main className={'d-flex main-height justify-content-center align-items-end'}>
      {/* <Image src={nearShore} alt="The near shore" /> */}
      <div className={'d-flex flex-column'}>
        <div className={'position-relative col-12'}>
          <Image src={topWave} alt="The top wave" />
        </div>
        <div id={'boat'} className={'position-absolute'} onClick={moveBoat}>
          <Image src={boat} alt="The row boat" />
        </div>
        <div className={'position-absolute'}>
          <Image src={bottomWave} alt="The bottom wave" />
        </div>
      </div>
      {/* <Image src={farShore} alt="The far shore" /> */}
    </main>
  )
}