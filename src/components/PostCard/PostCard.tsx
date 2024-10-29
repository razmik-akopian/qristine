import { Image } from '@mantine/core';

import './PostCard.css';

const PostCard = () => {
  return (
    <div className="postCard">
      <Image
        src="/src/assets/post-card.jpg"
        alt="С днем рождения!"
        width={500}
        height={500}
        fit="cover"
        radius="md"
      />
      <p>Post Content</p>
    </div>
  );
};

export { PostCard };
