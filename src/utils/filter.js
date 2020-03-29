export const isRisk = ({weight, age} = {}) => {
	return +weight > 15 || +age > 10;
};

export const filterPetsByName = (nameFilter = '', items = []) => {
		const regex = new RegExp('^' + nameFilter, 'i');
		return items.filter(({name} = {}) => {
			return regex.test(name);
		});
	};

export const filterPetsByStatus =  (status = '', items = []) => {
		return items.filter((item = {}) => {
			return isRisk(item);
		});
	};
