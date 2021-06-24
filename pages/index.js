import { useEffect, useState } from 'react'
import Image from 'next/image'
import nearShore from '../public/images/near-shore.png'
import farShore from '../public/images/far-shore.png'
import {Fox, Chicken, Corn, Boat, Farmer, items} from './components/allItems'
import $, { event } from "jquery";
import 'bootstrap/dist/css/bootstrap.css'
import Popover from './components/popover'
import MoveItem from './components/moveItem'
// import ItemsOnNearShore from './components/itemsOnNearShore'
import EmptyBoat from './components/emptyBoat'
import CornInBoat from './components/cornInBoat'

export default function Home() {
  const [clickedItem, setClickedItem] = useState('')
  const [itemInBoat, setItemInBoat] = useState({})
  useEffect(() => {
    Popover();
  })

const moveItem = (item) => {
  setClickedItem(item)
  const currentItem = document.getElementById(item);
  currentItem.classList.add('hidden')
}

const placeItemInBoat = (item) => {
  items.forEach(currentItem =>{
    if(item === currentItem.alt) {
      setBoatItem(currentItem)
    }
  })
  console.log(boatItem)
}

const moveBoat = () => {
  const boatImg = document.getElementById('boat')
  boatImg.classList.toggle('boat-animation')
}

  if(clickedItem === '') {
    return (
      <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
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
      </main>
    ) 
  } else {
    return (
      <main className={'d-flex main-height justify-content-start align-items-end landscape'}>
        <div id={'fox'} aria-describedby="tooltip" onClick={() => setBoat('fox')}>
          <Fox />
        </div>
        <div id={'chicken'} aria-describedby="tooltip" onClick={() => setBoat('chicken')}>
          <Chicken />
        </div>
        <div id={'corn'} aria-describedby="tooltip" onClick={() => moveItem('corn')}>
        <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          <Corn />
        </div>
        <div id={'boat'} className={'d-flex flex-column justify-content-end'} onClick={moveBoat}>
        <div className={'position-relative'}>
          <Farmer />
        </div>
        <div className={'position-absolute'}>
          {items.map(item => {
            if(item.alt === clickedItem) {
              <Image 
                src={item.src} 
                alt={item.alt} 
                width={item.width}
                height={item.height}
            />
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