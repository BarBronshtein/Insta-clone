import React from 'react';
import { MiniUser } from '../models';

const AvatarPreview = ({ user, size }: { user: MiniUser; size: string }) => {
	return <img src={`${user.imgUrl}`} className={`avatar-${size}`} alt="" />;
};

export default AvatarPreview;
