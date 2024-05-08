import { TWhoami, TWhoamiResponse } from './whoami.d'
export const presentWhoami = (response: TWhoamiResponse): TWhoami => {
	return {
		firstName: response.first_name,
		lastName: response.last_name,
		email: response.email,
	}
}
