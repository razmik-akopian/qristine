import { useState } from 'react';
import { Button, Switch } from '@mantine/core';
import { BUTTON_TEXT, SWITCH_LABELS, TLanguage } from '@/constants';
import { PostCard } from '../PostCard';

import './Main.css';

const Main = () => {
  const [showPostCard, setShowPostCard] = useState(false);
  const [language, setLanguage] = useState<TLanguage>('RUS');

  return (
    <div className="main">
      <Switch
        size="lg"
        onLabel={SWITCH_LABELS['ARM']}
        offLabel={SWITCH_LABELS['RUS']}
        color="pink"
        className="switcher"
        onChange={() => setLanguage((prev) => (prev === 'ARM' ? 'RUS' : 'ARM'))}
      />
      <Button
        onClick={() => setShowPostCard((prev) => !prev)}
        size="xl"
        color="pink"
        className="button"
      >
        {BUTTON_TEXT[language]}
      </Button>
      {showPostCard && <PostCard language={language} />}
    </div>
  );
};

export { Main };
