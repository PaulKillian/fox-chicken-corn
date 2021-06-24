import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import corn from '../../public/images/corn.png'
import Image from 'next/image'

const CornInBoat = () => {
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
            src={corn} 
            alt="The corn" 
            width={110}
            height={150}
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

export default CornInBoat;