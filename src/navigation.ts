import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from './config/locales'

export const {Link, permanentRedirect, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
	locales: locales,
	localePrefix: 'always'
})