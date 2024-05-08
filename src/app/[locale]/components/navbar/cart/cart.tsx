import { useTranslations } from 'next-intl'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from '@/navigation'
import clsx from 'clsx'

import styles from './cart.module.scss'

const NavbarCart = () => {
	const t = useTranslations('Main.Navbar')

	return (
		<Link href={'/cart'} className={clsx(styles.cart, 'navbar-text')}>
			<div>
				<div>{t('cart')}</div>
				{<ShoppingCartIcon width={16} height={16} />}
			</div>
		</Link>
	)
}

export default NavbarCart
