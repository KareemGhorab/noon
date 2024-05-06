import { useTranslations } from 'next-intl'
import LangSwitchClient from './lang-switch-client'

const LangSwitch = () => {
	const t = useTranslations('Main.Navbar')

	return <LangSwitchClient text={t('language-switch')} />
}

export default LangSwitch
