import obisabre from '../assets/obisabre.jpg'
import sabrevador from '../assets/sabrevador.webp'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={obisabre} alt='obisabre-icon' />
		) : (
			<img src={sabrevador} alt='sabrevador-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale