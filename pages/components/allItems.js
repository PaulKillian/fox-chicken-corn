import fox from '../../public/images/fox.png'
import chicken from '../../public/images/chicken.png'
import corn from '../../public/images/corn.png'
import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import Image from 'next/image'

export const Fox = () => {
  return (
    <Image 
        src={fox} 
        alt="fox" 
        width={130}
        height={150}
    />
  )
}

export const Chicken = () => {
  return (
    <Image 
        src={chicken} 
        alt="Chicken" 
        width={130}
        height={150}
    />
  )
}

export const Corn = () => {
  return (
    <Image 
        src={corn} 
        alt="Corn" 
        width={130}
        height={150}
    />
  )
}

export const Boat = () => {
  return (
    <Image 
        src={boat} 
        alt="Boat" 
        width={130}
        height={150}
    />
  )
}

export const Farmer = () => {
  return (
    <Image 
        src={farmer} 
        alt="Farmer" 
        width={130}
        height={150}
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
  },
  {
    src: boat,
    alt: "boat",
    width: 130,
    height: 150
  },
  {
    src: farmer,
    alt: "farmer",
    width: 130,
    height: 150
  }
];