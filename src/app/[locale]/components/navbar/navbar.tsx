import React from 'react'
import Image from 'next/image'

import styles from './navbar.module.scss'
import './styles/components.scss'
import './styles/utils.scss'

import LangSwitch from './lang-switch/lang-switch'
import SearchBar from './search-bar/search-bar'
import NavbarAccount from './account/account'
import NavbarWishlist from './wishlist/wishlist'
import NavbarCart from './cart/cart'


const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<h1>
				<Image src='/logo-alt.png' fill alt='noon logo' />
			</h1>
			<SearchBar />
			<LangSwitch />
			<div className='vertical-line' />
			<NavbarAccount />
			<div className='vertical-line' />
			<NavbarWishlist />
			<div className='vertical-line' />
			<NavbarCart />
		</nav>
	)
}

export default Navbar
