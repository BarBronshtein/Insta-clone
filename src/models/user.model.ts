import { MiniUser } from './mini-user.model';

export interface User {
	_id: string;
	username: string;
	password: string;
	fullname: string;
	imgUrl: string;
	createdAt: number;
	following: MiniUser[];
	followers: MiniUser[];
	savedStoryIds: string[];
}
