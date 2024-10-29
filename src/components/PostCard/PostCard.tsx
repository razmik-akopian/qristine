import { Image, Text } from '@mantine/core';
import { MAIN_TEXT, TLanguage } from '@/constants';
import { Footer } from '../Footer';
import { ImageWrapper } from '../ImageWrapper';

import './PostCard.css';

const PostCard = ({ language }: { language: TLanguage }) => {
  return (
    <div className="postCard">
      <ImageWrapper>
        <Image src="/post-card.jpg" alt="С днем рождения!" />
      </ImageWrapper>
      <Text size="lg" className="text">
        {MAIN_TEXT[language]}
      </Text>

      <Footer language={language} />
    </div>
  );
};

export { PostCard };
