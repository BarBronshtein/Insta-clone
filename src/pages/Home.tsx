import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import StoryList from '../components/Story-list';
import { Story } from '../models';
import { storyService } from '../services/story.service';

const Home = () => {
	const [stories, setStories] = useState<null | Story[]>(null);
	const getStories = useCallback(async () => {
		const stories = await storyService.query();
		setStories(stories);
	}, [stories]);
	const onRemoveStory = async storyId => {
		if (!stories) return;
		await storyService.remove(storyId);
		const updatedStories = stories.filter(story => story._id !== storyId) || null;
		setStories(updatedStories);
	};
	useEffect(() => {
		if (!stories) getStories(), [stories];
	});
	return stories ? (
		<section className="home">
			<StoryList stories={stories} onRemoveStory={onRemoveStory} />
		</section>
	) : (
		<Loading />
	);
};

export default Home;
