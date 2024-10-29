import { useState } from 'react';
import { Button, Image, Text } from '@mantine/core';
import { ImageWrapper } from '../ImageWrapper';

import './Footer.css';

import { FOOTER_BUTTON_TEXT, FOOTER_TEXT, TLanguage } from '@/constants';

const Footer = ({ language }: { language: TLanguage }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowImage((prev) => !prev)}
        color="pink"
        size="xl"
        className="button"
      >
        {FOOTER_BUTTON_TEXT[language]}
      </Button>
      {showImage && (
        <div>
          <ImageWrapper>
            <Image src="/src/assets/God.gif" alt="С днем рождения!" className="footer" />
          </ImageWrapper>
          <Text size="lg" className="text">
            {FOOTER_TEXT[language]}
          </Text>
        </div>
      )}
    </>
  );
};

export { Footer };
