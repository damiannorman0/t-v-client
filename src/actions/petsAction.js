export const petsAction = () => {
	return dispatch => {
		dispatch({
			type: 'LOADING_ACTION'
		});
		let t = setTimeout(e => {
			clearTimeout(t);
			dispatch({
				type: 'GET_PETS_ACTION',
				payload: [{
						"id" : 11,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
				}, {
					"id" : 12,
					"created_at": "2015-04-21T10:44:51-06:00",
					"end": "2015-04-24T07:30:00-06:00",
					"start": "2015-04-24T07:00:00-06:00",
					"updated_at": "2015-04-21T10:44:51-06:00",
					"name": "Gregory House",
					"type": "cat",
					"conditions": [],
					"image": ""
				}, {
					"id" : 13,
					"created_at": "2015-04-21T10:44:51-06:00",
					"end": "2015-04-24T07:30:00-06:00",
					"start": "2015-04-24T07:00:00-06:00",
					"updated_at": "2015-04-21T10:44:51-06:00",
					"name": "Gregory House",
					"type": "cat",
					"conditions": [],
					"image": ""
				},
					{
						"id" : 14,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 11,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 12,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 13,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					},
					{
						"id" : 14,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 11,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 12,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 13,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					},
					{
						"id" : 14,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 11,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 12,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}, {
						"id" : 13,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					},
					{
						"id" : 14,
						"created_at": "2015-04-21T10:44:51-06:00",
						"end": "2015-04-24T07:30:00-06:00",
						"start": "2015-04-24T07:00:00-06:00",
						"updated_at": "2015-04-21T10:44:51-06:00",
						"name": "Gregory House",
						"type": "cat",
						"conditions": [],
						"image": ""
					}]
			});
		}, 1000);
	};
};
