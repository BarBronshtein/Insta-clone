export const userService = {
	getLoggedinUser,
};
const user = {
	_id: 'u101',
	username: 'bar',
	password: '123',
	fullname: 'barbronshtein',
	imgUrl: 'https://avatars.githubusercontent.com/u/97507642?v=4',
	createdAt: 123543452,
	following: [
		{
			_id: 'u106',
			fullname: 'rickandmorty',
			imgUrl:
				'https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/11410665_846329265443549_1171963453_a.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=AMi2apRaFdIAX-HK6Wc&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT-Ui-pNegXs_tAGqdfmsS9pAzBG0pLrf3pANBegaoiTlw&oe=631B38A4&_nc_sid=cff2a4',
		},
	],
	followers: [
		{
			_id: 'u105',
			fullname: 'idftweets',
			imgUrl:
				'https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/278844598_1644263815906666_7413651091779106567_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FQmy7AR-mykAX-KDB3U&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT9k7Jxw4WuclMnQSnh_NmnT-DlJd-SO_NVTKQjmuBkPPA&oe=631BD02D&_nc_sid=cff2a4',
		},
	],
	savedStoryIds: ['s104', 's111', 's123'],
};
const LOGGEDIN_USER = 'loggedinUser';
const STORAGE_KEY = 'userDB';
const users = [user];
localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
localStorage.setItem(LOGGEDIN_USER, JSON.stringify(user));

function getLoggedinUser() {
	return JSON.parse(localStorage.getItem(LOGGEDIN_USER) || 'null');
}
