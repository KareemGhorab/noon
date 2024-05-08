import { AxiosInstance, AxiosResponse } from 'axios'
import { returnMyMock } from '@/service/mock'
import { whoamiResponse } from './whoami.mock'
import { TWhoamiResponse } from './whoami.d'

const whoami = (api: AxiosInstance) => {
	getWhoami: (): Promise<AxiosResponse<TWhoamiResponse>> => {
		return returnMyMock(whoamiResponse, 1000, { isError: false })
		return api.get('/whoami')
	}
}

export default whoami
