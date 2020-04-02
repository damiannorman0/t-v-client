const axios = require('axios');

export const petDetailAction = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'LOADING_ACTION'
		});

		return new Promise((resolve, reject) => {
			const root = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:7000';
			axios.get(`${root}/api/pets/${id}`).then(({data = {}} = {}) => {
				dispatch({
					type: 'GET_PET_DETAIL_ACTION',
					payload: {
						...data
					}
				});
			}).catch(error => {
				dispatch({
					type: 'NOT_FOUND'
				});
			});
		});
	};
};
