import { MiniUser } from './mini-user.model';

export interface Comment {
	id: string;
	by: MiniUser;
	txt: string;
	likedBy: MiniUser[];
}
