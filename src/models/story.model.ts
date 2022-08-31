import { Loc } from './location.model';
import { User } from './user.model';

export interface Story {
	_id: string;
	txt: string;
	imgUrl: string;
	createdAt: number;
	by: User;
	loc: Loc;
	likedBy: User[];
	tags: string[];
}
