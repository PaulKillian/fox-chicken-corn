import { useEffect } from 'react'
import Image from 'next/image'
import nearShore from '../public/images/near-shore.png'
import farShore from '../public/images/far-shore.png'
import topWave from '../public/images/top-wave.png'
import boat from '../public/images/boat.png'
import fox from '../public/images/fox.png'
import chicken from '../public/images/chicken.png'
import corn from '../public/images/corn.png'
import farmer from '../public/images/farmer.png'
import $, { event } from "jquery";
import 'bootstrap/dist/css/bootstrap.css'
import Popover from './components/popover'
import MoveItem from './components/moveItem'

export default function Home() {
  useEffect(() => {
    Popover();
  })

  const moveBoat = () => {
    const boatImg = document.getElementById('boat')
    boatImg.classList.toggle('boat-animation')
  }

  return (
    <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
      {/* <Image src={nearShore} alt="The near shore" /> */}
      <div>
        <Image 
          src={fox} 
          alt="The near shore" 
          width={130}
          height={150}
        />
      </div>
      <div> 
        <Image 
          src={chicken} 
          alt="The near shore"
          width={130}
          height={180}
        />
      </div>
      <div id={'corn'} aria-describedby="tooltip" onClick={MoveItem}>
      <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
        <Image 
          src={corn} 
          alt="The near shore"
          width={110}
          height={150} 
        />
      </div>
      <div id={'boat'} className={'d-flex flex-column justify-content-end'} onClick={moveBoat}>
        <div className={'position-relative'}>
          <Image 
            src={farmer} 
            alt="The farmer" 
            width={200}
            height={280}
          />
        </div>
        <div className={'position-absolute'}>
          <Image 
            src={boat} 
            alt="The row boat" 
            width={300}
            height={100}
          />
        </div>
      </div>
      {/* <Image src={farShore} alt="The far shore" /> */}
    </main>
  )
}