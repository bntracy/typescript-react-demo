import { FC, useState } from 'react';
import { AppProps, Spirit } from './App.types';
import SpiritList from './components/SpiritList';

const App: FC<AppProps> = ({ title }) => {
  const [randomSpirit, setRandomSpirit] = useState<Spirit | null>(null);
  const [randomAspect, setRandomAspect] = useState<string | null>(null);

  const spirits: Spirit[] = [];
  spirits.push({name: 'Lightning\'s Swift Strike', aspects: ['(no aspect)', 'Immense', 'Pandemonium', 'Sparking', 'Wind']});
  spirits.push({name: 'River Surges in Sunlight', aspects: ['(no aspect)', 'Haven', 'Sunshine', 'Travel']});
  spirits.push({name: 'Shadows Flicker Like Flame', aspects: ['(no aspect)', 'Amorphous', 'Dark Fire', 'Foreboding', 'Madness', 'Reach']});
  spirits.push({name: 'Vital Strength of the Earth', aspects: ['(no aspect)', 'Might', 'Nourishing', 'Resilience']});
  console.log(spirits);

  const randomizeSpirit = () => {
    const length = spirits.length;
    const randomIndex = Math.floor(Math.random() * length); // returns a random number between 0 and length-1 inclusive
    setRandomSpirit(spirits[randomIndex]);
    const aspectLength = spirits[randomIndex].aspects.length;
    const randomAspectIndex = Math.floor(Math.random() * aspectLength);
    setRandomAspect(spirits[randomIndex].aspects[randomAspectIndex]);
  }

  return (
    <div>
        <h1>{title}</h1>
        <SpiritList spirits={spirits} />
        <button type="button" onClick={randomizeSpirit}>Random Spirit</button>
        {randomSpirit && <div>{randomSpirit.name}: {randomAspect}</div>}
    </div>
  );
};

export default App;
