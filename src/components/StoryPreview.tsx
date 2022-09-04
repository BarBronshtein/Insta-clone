import React from 'react';
import { Link } from 'react-router-dom';
import AvatarPreview from './AvatarPreview';

const StoryPreview = ({ story, onRemoveStory }) => {
	return (
		<article
			className="story-preview story-layout"
			onClick={() => onRemoveStory()}
		>
			<section className="flex justify-between">
				<div className="flex">
					<AvatarPreview user={story.by} size={'small'} />
					<Link to={`/${story.by.fullname}`}>{story.by.fullname}</Link>
				</div>
				{/* Icon */}
			</section>
			<div className="img-container">
				<img src={story.imgUrl} alt="" />
			</div>
			<section className="actions-icons flex ">
				{/* Like-Icon */}
				{/* Msg-Icon */}
				{/* Share-Icon */}
			</section>
			<section className="like flex">
				<div className="like-by">
					{story.likedBy.map(by => (
						<AvatarPreview user={by} size={'tiny'} />
					))}
					<p>
						Liked by <span className="bold">{story.likedBy[0].fullname}</span>
						and
						<span className="bold">{story.likedBy.length} others</span>
					</p>
				</div>
				<p>
					<span className="bold">{story.by.fullname}</span>
					<p>{story.txt}</p>
				</p>
			</section>
		</article>
	);
};

export default StoryPreview;
