import corn from '../../public/images/corn.png'

const MoveCorn = (event) => {
    const cornItem = document.getElementById('corn');
    cornItem.innerHTML = '';

    const boat = document.getElementById('boat');
    const itemInBoat = document.createElement('div');
    itemInBoat.classList.add('position-absolute');
    itemInBoat.innerHTML = `
        <Image 
        src={corn} 
        alt="The row boat" 
        width={300}
        height={100}
        />
    `;
    boat.appendChild(itemInBoat)
};

export default MoveCorn;