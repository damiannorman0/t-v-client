const axios = require('axios');

export const petsAction = () => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			const root = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:7000';
			axios.get(`${root}/api/pets?limit=100`).then(({data:{docs = []} = {}} ={}) => {
				dispatch({
					type: 'GET_PETS_ACTION',
					payload: [
						...docs
					]
				});
			}).catch(error => {
				reject(error);
			});
		});
	};
};
