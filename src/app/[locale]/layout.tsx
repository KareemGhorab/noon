import { FC, ReactNode } from 'react'

import '@/styles/reset.scss'

type TProps = {
	children: ReactNode
	params: { locale: string }
}

const LocaleLayout: FC<TProps> = ({ children, params: { locale } }) => {
	return (
		<html lang={locale}>
			<body>{children}</body>
		</html>
	)
}

export default LocaleLayout
