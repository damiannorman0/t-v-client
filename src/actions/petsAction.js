const axios = require('axios');

export const petsAction = () => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			axios.get(`http://localhost:7000/api/pets?limit=100`).then(({data:{docs = []} = {}} ={}) => {
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
