import { AxiosResponse, AxiosError } from 'axios'

export const returnMyMock = <T>(
	mock: T,
	time: number,
	options?: { isError?: boolean }
): Promise<AxiosResponse<T>> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (options?.isError) {
				const error: AxiosError = {
					name: 'Error',
					message: 'Request failed with status code 500',
					config: {} as any,
					isAxiosError: true,
					toJSON: () => ({
						message: 'Request failed with status code 500',
					}),
				}
				reject(error)
			} else {
				resolve({
					data: mock,
					status: 200,
					statusText: 'OK',
					headers: {},
					config: {} as any,
				})
			}
		}, time)
	})
}
