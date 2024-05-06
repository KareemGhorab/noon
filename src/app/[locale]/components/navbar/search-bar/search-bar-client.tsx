import { FC } from 'react'

import styles from './search-bar.module.scss'

type TProps = {
	placeholder: string
}

const SearchBarClient: FC<TProps> = ({ placeholder }) => {
	return (
		<form className={styles['search-bar']}>
			<input type='text' placeholder={placeholder} />
		</form>
	)
}

export default SearchBarClient
