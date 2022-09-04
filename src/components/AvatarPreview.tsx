import React from 'react';
import { User } from '../models';

const AvatarPreview = ({ user, size }: { user: User; size: string }) => {
	return <img src={`${user.imgUrl}`} className={`avatar-${size}`} alt="" />;
};

export default AvatarPreview;
