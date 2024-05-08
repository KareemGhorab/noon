import axios from 'axios'
import whoami from './whoami/whoami'

const api = axios.create({
	baseURL: 'http://localhost:3001/',
})

export const whoamiSVC = whoami(api)
