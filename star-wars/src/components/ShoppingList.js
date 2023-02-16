import { useState } from 'react'
import { persoList } from '../datas/persoList'
import PersoItem from './PersoItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = persoList.reduce(
		(acc, perso) =>
			acc.includes(perso.category) ? acc : acc.concat(perso.category),
		[]
	)

	function addToCart(name, price) {
		const currentPersoSaved = cart.find((perso) => perso.name === name)
		if (currentPersoSaved) {
			const cartFilteredCurrentPerso = cart.filter(
				(perso) => perso.name !== name
			)
			updateCart([
				...cartFilteredCurrentPerso,
				{ name, price, amount: currentPersoSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-perso-list'>
				{persoList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PersoItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList