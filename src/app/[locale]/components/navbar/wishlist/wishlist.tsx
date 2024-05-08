import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import { HeartIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

import styles from './wishlist.module.scss'

const NavbarWishlist = () => {
	const t = useTranslations('Main.Navbar')
	return (
		<Link href='/wishlist' className={clsx(styles.wishlist, 'navbar-text')}>
			<div>
				<div>{t('wishlist')}</div>
				<HeartIcon width={16} height={16} />
			</div>
		</Link>
	)
}

export default NavbarWishlist
