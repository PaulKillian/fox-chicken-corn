import { useEffect, useState } from 'react'
import Image from 'next/image'
import nearShore from '../public/images/near-shore.png'
import farShore from '../public/images/far-shore.png'
import poof from '../public/images/poof.png'
import {Fox, Chicken, Corn, Boat, Farmer, items} from './components/allItems'
import $, { event } from "jquery";
import 'bootstrap/dist/css/bootstrap.css'
import Popover from './components/popover'
import EmptyBoat from './components/emptyBoat'
import { Constraints } from './components/constraints'

export default function Home() {
  const [clickedItem, setClickedItem] = useState('')
  const [itemInBoat, setItemInBoat] = useState('')
  useEffect(() => {
    Popover();
  })

  const moveItem = (item) => {
    setClickedItem(item)
    const currentItem = document.getElementById(item);
    currentItem.classList.add('hidden')
  }

  const moveBoat = () => {
    if(clickedItem === 'corn') {
      setItemInBoat('corn')
      const deadChicken = document.getElementById('chicken');
      deadChicken.classList.add('dead')
    }
    if(clickedItem === 'fox') {
      setItemInBoat('fox')
      const deadChicken = document.getElementById('corn');
      deadChicken.classList.add('dead')
    }
    const boatImg = document.getElementById('boat')
    boatImg.classList.toggle('boat-animation')
  }

  if(clickedItem === '') {
    return (
      <main className={'landscape main-height'}>
        <Constraints />
        <div className={'d-flex justify-content-start align-items-end'}>
          <div id={'fox'} aria-describedby="tooltip" onClick={() => moveItem('fox')}>
            <Fox />
          </div>
          <div id={'chicken'} aria-describedby="tooltip" onClick={() => moveItem('chicken')}>
            <Chicken />
          </div>
          <div id={'corn'} aria-describedby="tooltip" onClick={() => moveItem('corn')}>
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <EmptyBoat />
          {/* <Image src={farShore} alt="The far shore" /> */}
        </div>
      </main>
    ) 
  } else if (clickedItem !== '' && itemInBoat === 'corn') {
    return (
      <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
          <div id={'fox'} aria-describedby="tooltip">
            <Fox />
          </div>
          <Image className={'grow'}
              src={poof} 
              alt="Poof" 
              width={200}
              height={200}
            />
          <div id={'chicken'} aria-describedby="tooltip" >
            <Chicken />
          </div>
          <div id={'corn'} aria-describedby="tooltip">
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          </div>
          <div id={'boat'} className={'d-flex flex-column justify-content-end float'} >
          <div className={'position-relative farmer-position'}>
            <Farmer />
          </div>
          <div className={'position-absolute'}>
            <Corn />
          </div>
          <div className={'position-absolute'}>
            <Boat />
          </div>
        </div>
          {/* <Image src={farShore} alt="The far shore" /> */}
        </main>
      )
  } else if (clickedItem !== '' && itemInBoat === 'fox') {
    return (
      <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
          <div id={'fox'} aria-describedby="tooltip">
            <Fox />
          </div>
          <div id={'chicken'} aria-describedby="tooltip" >
            <Chicken />
          </div>
          <Image className={'grow'}
              src={poof} 
              alt="Poof" 
              width={200}
              height={200}
            />
          <div id={'corn'} aria-describedby="tooltip">
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          </div>
          <div id={'boat'} className={'d-flex flex-column justify-content-end float'} >
          <div className={'position-relative farmer-position'}>
            <Farmer />
          </div>
          <div className={'position-absolute'}>
            <Fox />
          </div>
          <div className={'position-absolute'}>
            <Boat />
          </div>
        </div>
          {/* <Image src={farShore} alt="The far shore" /> */}
        </main>
      )
  } else {
    return (
      <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
        <div id={'fox'} aria-describedby="tooltip">
          <Fox />
        </div>
        <div id={'chicken'} aria-describedby="tooltip" >
          <Chicken />
        </div>
        <div id={'corn'} aria-describedby="tooltip">
        <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          <Corn />
        </div>
        <div id={'boat'} className={'d-flex flex-column justify-content-end float'} onClick={moveBoat}>
        <div className={'position-relative farmer-position'}>
          <Farmer />
        </div>
        <div className={'position-absolute'}>
          {items.map(item => {
            if(item.alt === clickedItem) {
              return (
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={item.width}
                  height={item.height}
              />
            )
          }
        })}
        </div>
        <div className={'position-absolute'}>
          <Boat />
        </div>
      </div>
        {/* <Image src={farShore} alt="The far shore" /> */}
      </main>
    )
  }
}

//   function Boat(item) {
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