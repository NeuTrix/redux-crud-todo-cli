// to be used to set current date in proper format
// requires two digit places and 4 year digits for datepicker

const normalizeDate = (date) => {
	let year = date.getFullYear();
	let day = ('0' + date.getDate()).slice(-2);
	let month = ('0' + (date.getMonth() + 1)).slice(-2);

	let fullDate =[];
	return [...fullDate, year, month, day].join('-');
};

export default normalizeDate;

