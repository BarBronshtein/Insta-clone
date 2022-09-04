import React from 'react';
import { Link } from 'react-router-dom';
import { utilService } from '../services/util.service';
import AvatarPreview from './AvatarPreview';

const StoryPreview = ({ story, onRemoveStory }) => {
	const user=
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
					{story.likedBy.map(by =>
						user.following.some(user => user.fullname === by.name) ? (
							<AvatarPreview user={by} size={'tiny'} />
						) : (
							''
						)
					)}
					<p>
						Liked by{' '}
						<span className="bold">
							{
								story.likedBy.find(
									by =>
										user.following.find(user => user.fullname === by.fullname)
											.fullname === by.fullname
								).fullname
							}
						</span>
						and
						<span className="bold">{story.likedBy.length} others</span>
					</p>
				</div>
			</section>
			<div>
				<span className="bold">{story.by.fullname}</span>
				<p>{story.txt}</p>
			</div>
			<Link to={`/story/${story._id}`} className="secondary-color">
				View all {story.comments.length} comments
			</Link>
			<div className="upload-time">
				<span>{utilService.timeAgo(story.createdAt)}</span>
			</div>
			<section className="add-comment flex">
				<form>
					{/* Emoji-Icon */}
					<textarea name="add-comment"></textarea>
					<span className="active-color">Post</span>
				</form>
			</section>
		</article>
	);
};

export default StoryPreview;
