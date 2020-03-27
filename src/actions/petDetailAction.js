export const petDetailAction = (id) => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});
		let t = setTimeout(e => {
			clearTimeout(t);
			dispatch({
				type: 'GET_PET_DETAIL_ACTION',
				payload: {
						"id" : id,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Sneakers",
						"type": "cat",
						"temperament" : "nervous",
						"conditions": ['heart murmer'],
						"image": ""
				}
			});
		}, 1000);
	};
};
