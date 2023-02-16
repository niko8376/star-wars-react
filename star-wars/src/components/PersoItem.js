import CareScale from './CareScale'
import '../styles/persoItem.css'

function handleClick(persoName) {
	alert(`Vous voulez acheter 1 ${persoName}? Très bon choix 🌱✨`)
}

function PersoItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-perso-item' onClick={() => handleClick}>
			<span className='lmj-perso-item-price'>{price}€</span>
			<img className='lmj-perso-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PersoItem