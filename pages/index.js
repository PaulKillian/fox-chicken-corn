import { useEffect, useState } from 'react'
import Image from 'next/image'
import nearShore from '../public/images/near-shore.png'
import farShore from '../public/images/far-shore.png'
import fox from '../public/images/fox.png'
import chicken from '../public/images/chicken.png'
import corn from '../public/images/corn.png'
import $, { event } from "jquery";
import 'bootstrap/dist/css/bootstrap.css'
import Popover from './components/popover'
import MoveItem from './components/moveItem'
// import ItemsOnNearShore from './components/itemsOnNearShore'
import EmptyBoat from './components/emptyBoat'
import CornInBoat from './components/cornInBoat'

export default function Home() {
  const [boatState, setBoatState] = useState('')
  useEffect(() => {
    Popover();
  })

//   function BoatState(item) {
//     console.log(item)
//     switch(item) {
//       case 'fox':
//         return <FoxInBoat />;
//       case 'chicken':
//         return <ChickenInBoat />;
//       case 'corn': 
//         return <CornInBoat />;
//       default:
//         return <EmptyBoat />;
//   }
// }

const moveItem = (item) => {
  if(item === 'corn') {
    setBoatState('corn')
    const cornItem = document.getElementById('corn');
    cornItem.classList.add('hidden')
  }
}

  const ItemsOnNearShore = () => {
    return (
      <>
        <div id={'fox'} aria-describedby="tooltip" onClick={() => setBoatState('fox')}>
          <Image 
              src={fox} 
              alt="The fox" 
              width={130}
              height={150}
          />
        </div>
        <div id={'chicken'} aria-describedby="tooltip" onClick={() => setBoatState('chicken')}>
          <Image 
              src={chicken} 
              alt="The chicken"
              width={130}
              height={180}
          />
        </div>
        <div id={'corn'} aria-describedby="tooltip" onClick={() => moveItem('corn')}>
        <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          <Image 
              src={corn} 
              alt="The corn"
              width={110}
              height={150} 
          />
        </div>
      </>
    )
  }

  if(boatState === '') {
    return (
      <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
        <ItemsOnNearShore />
        <EmptyBoat />
        {/* <Image src={farShore} alt="The far shore" /> */}
      </main>
    ) 
  } else {
    return (
      <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
        <div id={'fox'} aria-describedby="tooltip" onClick={() => setBoatState('fox')}>
          <Image 
              src={fox} 
              alt="The fox" 
              width={130}
              height={150}
          />
        </div>
        <div id={'chicken'} aria-describedby="tooltip" onClick={() => setBoatState('chicken')}>
          <Image 
              src={chicken} 
              alt="The chicken"
              width={130}
              height={180}
          />
        </div>
        <div id={'corn'} className={'hidden'} aria-describedby="tooltip" onClick={() => moveItem('corn')}>
        <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          <Image 
              src={corn} 
              alt="The corn"
              width={110}
              height={150} 
          />
        </div>
        <CornInBoat />
        {/* <Image src={farShore} alt="The far shore" /> */}
      </main>
    ) 
  }
}