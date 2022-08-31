import React from 'react';

const AvatarPreview = ({ user, size }) => {
	return <img src={`${user.imgUrl}`} className={`avatar-${size}`} alt="" />;
};

export default AvatarPreview;
