import { storageService } from './async-storage.service';
export const storyService = {
	query,
	getById,
	remove,
	save,
};
const STORAGE_KEY = 'storyDB';
const story = {
	_id: 's101',
	txt: 'Best trip ever',
	imgUrl: 'http://some-img', //Can be an array if decide to support multiple imgs
	createdAt: 123543452,
	by: {
		_id: 'u101',
		fullname: 'Ulash Ulashi',
		imgUrl: 'http://some-img',
	},
	loc: {
		lat: 11.11,
		lng: 22.22,
		name: 'Tel Aviv',
	},
	comments: [
		{
			id: 'c1001',
			by: {
				_id: 'u105',
				fullname: 'Bob',
				imgUrl: 'http://some-img',
			},
			txt: 'good one!',
			likedBy: [
				// Optional
				{
					_id: 'u105',
					fullname: 'Bob',
					imgUrl: 'http://some-img',
				},
			],
		},
		{
			id: 'c1002',
			by: {
				_id: 'u106',
				fullname: 'Dob',
				imgUrl: 'http://some-img',
			},
			txt: 'not good!',
		},
	],
	likedBy: [
		{
			_id: 'u105',
			fullname: 'Bob',
			imgUrl: 'http://some-img',
		},
		{
			_id: 'u106',
			fullname: 'Dob',
			imgUrl: 'http://some-img',
		},
	],
	tags: ['fun', 'kids'],
};
async function query(filterBy = null) {
	try {
		const stories = await storageService.query(STORAGE_KEY);
		if (filterBy) return _filter(stories, filterBy);
		return stories;
	} catch (err) {
		console.log('Cannot get stories', err);
	}
}
async function getById(storyId: string) {
	try {
		return await storageService.get(STORAGE_KEY, storyId);
	} catch (err) {
		console.log('Cannot get story', err);
	}
}

async function remove(storyId: string) {
	try {
		return await storageService.remove(STORAGE_KEY, storyId);
	} catch (err) {
		console.log('Cannot remove story', err);
	}
}

async function save(story: Story) {
	try {
		if (!story._id) return await storageService.post(STORAGE_KEY, story);
		return await storageService.put(STORAGE_KEY, story);
	} catch (err) {
		console.log('Cannot save story', err);
	}
}

function _filter(stories, filterBy) {
	// TODO: add filter stories by user options
	return stories;
}
