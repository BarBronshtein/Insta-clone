import axios from 'axios';
axios.defaults.withCredentials = true;
const BASE_URL: string =
	process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:8000/api/';

export const httpService = {
	get(endpoint, data) {
		return ajax(endpoint, 'GET', data);
	},
	post(endpoint, data) {
		return ajax(endpoint, 'POST', data);
	},
	put(endpoint, data) {
		return ajax(endpoint, 'PUT', data);
	},
	delete(endpoint, data) {
		return ajax(endpoint, 'DELETE', data);
	},
};

async function ajax(endpoint: string, method = 'GET', data: any) {
	try {
		const res = await axios({
			url: `${BASE_URL}${endpoint}`,
			method,
			data,
			params: method === 'GET' ? data : null,
		});
		return res;
	} catch (err) {
		console.log(
			`Had issues ${method}ING to the backend, ${endpoint}, with data:`,
			data
		);
		console.dir(err);
		throw err;
	}
}
