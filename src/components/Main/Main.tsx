import { useState } from 'react';
import { Button } from '@mantine/core';
import { PostCard } from '../PostCard/PostCard';

import './Main.css';

const Main = () => {
  const [showPostCard, setShowPostCard] = useState(false);

  return (
    <div className="main">
      <Button onClick={() => setShowPostCard(true)} size="xl" color="pink">
        Нажми на меня!
      </Button>
      {showPostCard && <PostCard />}
    </div>
  );
};

export { Main };
