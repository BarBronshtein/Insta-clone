export const userService = {
	getLoggedinUser,
};
const user = {
	_id: 'u101',
	username: 'Muko',
	password: 'mukmuk',
	fullname: 'Muki Muka',
	imgUrl: 'http://some-img',
	createdAt: 123543452,
	following: [
		{
			_id: 'u106',
			fullname: 'Dob',
			imgUrl: 'http://some-img',
		},
	],
	followers: [
		{
			_id: 'u105',
			fullname: 'Bob',
			imgUrl: 'http://some-img',
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
