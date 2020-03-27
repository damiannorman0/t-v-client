const axios = require('axios');

export const petsAction = () => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			axios.get(`http://localhost:7000/api/pets/`).then(({data}) => {
				dispatch({
					type: 'GET_PETS_ACTION',
					payload: [
						...data
					]
				});
			}).catch(error => {
				reject(error);
			});
		});
	};
};
