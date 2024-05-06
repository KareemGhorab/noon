import { FC, ReactNode } from 'react'
import { figtree, cairo } from '@/config/fonts'

import Navbar from './components/navbar/navbar'

import '@/styles/reset.scss'
import '@/styles/theme.scss'
import '@/styles/components.scss'

type TProps = {
	children: ReactNode
	params: { locale: string }
}

const LocaleLayout: FC<TProps> = ({ children, params: { locale } }) => {
	return (
		<html
			lang={locale}
			dir={locale === 'en' ? 'ltr' : 'rtl'}
			className={locale === 'en' ? figtree.className : cairo.className}
		>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}

export default LocaleLayout
