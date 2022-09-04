import React from 'react';
import { Link } from 'react-router-dom';
import AvatarPreview from './AvatarPreview';

const StoryPreview = ({ story, onRemoveStory }) => {
	return (
		<article
			className="story-preview story-layout"
			onClick={() => onRemoveStory()}
		>
			<div className="flex justify-between">
				<div className="flex">
					<AvatarPreview user={story.by} size={'small'} />
					<Link to={`/${story.by.fullname}`}>{story.by.fullname}</Link>
				</div>
				{/* Icon */}
			</div>
			<div className="img-container">
				<img src={story.imgUrl} alt="" />
			</div>
			<div className="actions-icons flex ">
				{/* Like-Icon */}
				{/* Msg-Icon */}
				{/* Share-Icon */}
			</div>
		</article>
	);
};

export default StoryPreview;
