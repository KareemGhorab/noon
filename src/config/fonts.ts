import { Figtree, Cairo } from 'next/font/google'

export const figtree = Figtree({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
})

export const cairo = Cairo({
	subsets: ['arabic'],
	weight: ['300', '400', '500', '600', '700', '800']
})
