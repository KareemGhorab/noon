import { useTranslations } from 'next-intl'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import styles from './cart.module.scss'
import Link from 'next/link'

const NavbarCart = () => {
	const t = useTranslations('Main.Navbar')

	return (
		<Link href={'/cart'} className={clsx(styles.cart, 'navbar-text')}>
			<div>
				<div>{t('cart')}</div>
				<div>{<ShoppingCartIcon width={16} height={16} />}</div>
			</div>
		</Link>
	)
}

export default NavbarCart
