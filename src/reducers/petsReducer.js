const initialState = {
	loading: false,
	pets: [],
	validEmpty: false,
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
			const validEmpty = !action.payload.length? true : false
			return {
				...state,
				loading: false,
				pets: [...action.payload],
				validEmpty
			};
		case 'GET_PET_DETAIL_ACTION':
			return {
				...state,
				loading: false,
				petDetail: {
					...action.payload
				}
			};
		default:
			return state
	}
}
