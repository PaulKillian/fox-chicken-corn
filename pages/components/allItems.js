import fox from '../../public/images/fox.png'
import chicken from '../../public/images/chicken.png'
import corn from '../../public/images/corn.png'
import Image from 'next/image'

const AllItems = () => {
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
          <div id={'corn'} aria-describedby="tooltip" onClick={() => setBoatState('corn')}>
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

export default AllItems
