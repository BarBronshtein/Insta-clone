import { Story } from '../models/story.model';
import { Entity, storageService } from './async-storage.service';
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
	imgUrl: 'https://avatars.githubusercontent.com/u/97507642?v=4', //Can be an array if decide to support multiple imgs
	createdAt: 123543452,
	by: {
		_id: 'u101',
		fullname: 'barbronshtein',
		imgUrl: 'https://avatars.githubusercontent.com/u/97507642?v=4',
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
				_id: 'u106',
				fullname: 'rickandmorty',
				imgUrl:
					'https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/11410665_846329265443549_1171963453_a.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=AMi2apRaFdIAX-HK6Wc&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT-Ui-pNegXs_tAGqdfmsS9pAzBG0pLrf3pANBegaoiTlw&oe=631B38A4&_nc_sid=cff2a4',
			},
			txt: 'good one!',
			likedBy: [
				// Optional
				{
					_id: 'u105',
					fullname: 'idftweets',
					imgUrl:
						'https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/278844598_1644263815906666_7413651091779106567_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FQmy7AR-mykAX-KDB3U&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT9k7Jxw4WuclMnQSnh_NmnT-DlJd-SO_NVTKQjmuBkPPA&oe=631BD02D&_nc_sid=cff2a4',
				},
			],
		},
		{
			id: 'c1002',
			by: {
				_id: 'u106',
				fullname: 'rickandmorty',
				imgUrl:
					'https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/11410665_846329265443549_1171963453_a.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=AMi2apRaFdIAX-HK6Wc&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT-Ui-pNegXs_tAGqdfmsS9pAzBG0pLrf3pANBegaoiTlw&oe=631B38A4&_nc_sid=cff2a4',
			},
			txt: 'not good!',
		},
	],
	likedBy: [
		{
			_id: 'u105',
			fullname: 'idftweets',
			imgUrl:
				'https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/278844598_1644263815906666_7413651091779106567_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FQmy7AR-mykAX-KDB3U&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT9k7Jxw4WuclMnQSnh_NmnT-DlJd-SO_NVTKQjmuBkPPA&oe=631BD02D&_nc_sid=cff2a4',
		},
		{
			_id: 'u106',
			fullname: 'rickandmorty',
			imgUrl:
				'https://instagram.ftlv5-1.fna.fbcdn.net/v/t51.2885-19/11410665_846329265443549_1171963453_a.jpg?_nc_ht=instagram.ftlv5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=AMi2apRaFdIAX-HK6Wc&edm=AJ9x6zYBAAAA&ccb=7-5&oh=00_AT-Ui-pNegXs_tAGqdfmsS9pAzBG0pLrf3pANBegaoiTlw&oe=631B38A4&_nc_sid=cff2a4',
		},
	],
	tags: ['fun', 'kids'],
};
const stories = [story];
localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));

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
		if (!story._id)
			return await storageService.post(STORAGE_KEY, story as Entity);
		return await storageService.put(STORAGE_KEY, story as Entity);
	} catch (err) {
		console.log('Cannot save story', err);
	}
}

function _filter(stories, filterBy) {
	// TODO: add filter stories by user options
	return stories;
}
