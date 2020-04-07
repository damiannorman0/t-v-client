const initialState = {
	loading: false,
	pets: [],
	petDetail: {

	}
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case 'LOADING_ACTION':
			return {
				...state,
				loading: true
			};
		case 'GET_PETS_ACTION':
			return {
				...state,
				loading: false,
				pets: [...action.payload]
			};
		case 'GET_PET_DETAIL_ACTION':
			return {
				...state,
				loading: false,
				petDetail: {
					...action.payload
				}
			};
		case 'NOT_FOUND':
			return {
				...state,
				petDetail: {
				},
				loading: false
			};

		default:
			return state
	}
}
