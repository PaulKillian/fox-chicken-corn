import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import Image from 'next/image'

const EmptyBoat = () => {
    const moveBoat = () => {
        const boatImg = document.getElementById('boat')
        boatImg.classList.toggle('boat-animation')
    }

    return (
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
    )
}

export default EmptyBoat;