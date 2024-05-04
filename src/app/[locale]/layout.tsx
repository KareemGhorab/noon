import { FC, ReactNode } from 'react'
import { figtree } from '@/config/fonts'

import '@/styles/reset.scss'
import '@/styles/theme.scss'

type TProps = {
	children: ReactNode
	params: { locale: string }
}

const LocaleLayout: FC<TProps> = ({ children, params: { locale } }) => {
	return (
		<html lang={locale} className={figtree.className}>
			<body>{children}</body>
		</html>
	)
}

export default LocaleLayout
