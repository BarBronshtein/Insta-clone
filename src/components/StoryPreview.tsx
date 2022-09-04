import React from 'react';
import AvatarPreview from './AvatarPreview';

const StoryPreview = ({ story, onRemoveStory }) => {
	return (
		<article className="story-preview" onClick={() => onRemoveStory()}>
			<div className="flex justify-between">
				<div className="flex">
					<AvatarPreview user={story.by} size={''} />
				</div>
				{/* Icon */}
			</div>
		</article>
	);
};

export default StoryPreview;
