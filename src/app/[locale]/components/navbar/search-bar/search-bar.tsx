import { useTranslations } from 'next-intl'

import SearchBarClient from './search-bar-client'

const SearchBar = () => {
	const t = useTranslations('Main.Navbar')
	return (
		<SearchBarClient placeholder={t('search-placeholder')} />
	)
}

export default SearchBar
