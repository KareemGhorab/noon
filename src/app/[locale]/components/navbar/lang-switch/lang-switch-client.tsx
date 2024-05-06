'use client'

import { FC, useTransition } from 'react'
import { usePathname, useParams, useRouter } from 'next/navigation'
import clsx from 'clsx'

import styles from './lang-switch.module.scss'
import { cairo, figtree } from '@/config/fonts'

type TProps = {
	text: string
}

const LangSwitchClient: FC<TProps> = ({ text }) => {
	const [isPending, startTransition] = useTransition()
	const params = useParams()
	const pathname = usePathname()
	const router = useRouter()

	const handleLangSwitch = () => {
		const newPathname = pathname.replace(
			`/${params.locale}`,
			`/${params.locale === 'en' ? 'ar' : 'en'}`
		)

		startTransition(() => {
			router.replace(newPathname)
		})
	}

	return (
		<div className={styles['lang-switch']}>
			<button
				onClick={() => handleLangSwitch()}
				className={clsx({
					fade: isPending,
					[figtree.className]: params.locale === 'ar',
					[cairo.className]: params.locale === 'en',
				})}
			>
				{text}
			</button>
		</div>
	)
}

export default LangSwitchClient
