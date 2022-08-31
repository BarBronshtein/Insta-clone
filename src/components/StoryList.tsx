import React from 'react';
import { Story } from '../models';
import StoryPreview from './StoryPreview';

const StoryList = ({ stories, onRemoveStory }) => {
	return (
		<section className="story-list">
			{stories.map((story: Story) => (
				<StoryPreview key={story._id} story={story} onRemoveStory={onRemoveStory} />
			))}
		</section>
	);
};

export default StoryList;
