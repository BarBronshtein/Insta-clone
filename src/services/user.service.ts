export const userService = {};
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
const STORAGE_KEY = 'userDB';
localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
