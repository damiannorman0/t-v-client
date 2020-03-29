const axios = require('axios');

export const petDetailAction = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			axios.get(`http://localhost:7000/api/pets/${id}`).then(({data = {}} = {}) => {
				dispatch({
					type: 'GET_PET_DETAIL_ACTION',
					payload: {
						...data
					}
				});
			}).catch(error => {
				reject(error);
			});
		});
	};
};
