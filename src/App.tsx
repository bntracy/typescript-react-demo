import { FC } from 'react';
import { AppProps, Spirit } from './App.types';
import SpiritList from './components/SpiritList';

const App: FC<AppProps> = ({ title }) => {
  const spirits: Spirit[] = [];
  spirits.push({name: 'Lightning\'s Swift Strike', aspects: ['(no aspect)', 'Immense', 'Pandemonium', 'Sparking', 'Wind']});
  spirits.push({name: 'River Surges in Sunlight', aspects: ['(no aspect)', 'Haven', 'Sunshine', 'Travel']});
  spirits.push({name: 'Shadows Flicker Like Flame', aspects: ['(no aspect)', 'Amorphous', 'Dark Fire', 'Foreboding', 'Madness', 'Reach']});
  spirits.push({name: 'Vital Strength of the Earth', aspects: ['(no aspect)', 'Might', 'Nourishing', 'Resilience']});
  console.log(spirits);

  return (
    <div>
        <h1>{title}</h1>
        <SpiritList spirits={spirits} />
    </div>
  );
};

export default App;
