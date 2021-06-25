import fox from '../../public/images/fox.png'
import chicken from '../../public/images/chicken.png'
import corn from '../../public/images/corn.png'
import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import Image from 'next/image'

export const Fox = () => {
  return (
    <Image className={'shadow'}
        src={fox} 
        alt="fox" 
        width={130}
        height={150}
    />
  )
}

export const Chicken = () => {
  return (
    <Image className={'shadow'}
        src={chicken} 
        alt="Chicken" 
        width={130}
        height={150}
    />
  )
}

export const Corn = () => {
  return (
    <Image className={'shadow'}
        src={corn} 
        alt="Corn" 
        width={130}
        height={150}
    />
  )
}

export const Boat = () => {
  return (
    <Image className={'shadow'}
        src={boat} 
        alt="Boat" 
        width={200}
        height={50}
    />
  )
}

export const Farmer = () => {
  return (
    <Image className={'shadow'}
        src={farmer} 
        alt="Farmer" 
        width={200}
        height={280}
    />
  )
}


export const items = [
  {
    src: fox,
    alt: "fox",
    width: 130,
    height: 150
  },
  {
    src: chicken,
    alt: "chicken",
    width: 130,
    height: 150
  },
  {
    src: corn,
    alt: "corn",
    width: 130,
    height: 150
  }
];