import { FC, ReactNode } from 'react'

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
