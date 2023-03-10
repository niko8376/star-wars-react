import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
function App() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='Star wars' className='lmj-logo' />
				<h1 className='lmj-title'></h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}
export default App
