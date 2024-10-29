import { Image, Text } from '@mantine/core';
import { MAIN_TEXT, TLanguage } from '@/constants';
import postCardImage from '../../../public/post-card.jpg';
import { Footer } from '../Footer';
import { ImageWrapper } from '../ImageWrapper';

import './PostCard.css';

const PostCard = ({ language }: { language: TLanguage }) => {
  return (
    <div className="postCard">
      <ImageWrapper>
        <Image src={postCardImage} alt="С днем рождения!" />
      </ImageWrapper>
      <Text size="lg" className="text">
        {MAIN_TEXT[language]}
      </Text>

      <Footer language={language} />
    </div>
  );
};

export { PostCard };
