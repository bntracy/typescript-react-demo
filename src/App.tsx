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
  spirits.push({name: 'A Spread of Rampant Green', aspects:['(no aspect)', 'Regrowth', 'Tangles']});
  spirits.push({name: 'Thunderspeaker', aspects:['(no aspect)', 'Tactician', 'Warrior']});
  spirits.push({name: 'Bringer of Dreams and Nightmares', aspects:['(no aspect)', 'Enticing', 'Violence']});
  spirits.push({name: 'Ocean\'s Hungry Grasp', aspects:['(no aspect)', 'Deeps']});
  spirits.push({name: 'Keeper of the Forbidden Wilds', aspects:['(no aspect)', 'Spreading Hostility']});
  spirits.push({name: 'Sharp Fangs Behind the Leaves', aspects:['(no aspect)', 'Encircle', 'Unconstrained']});
  spirits.push({name: 'Heart of the Wildfire', aspects:['(no aspect)', 'Transforming']});
  spirits.push({name: 'Serpent Slumbering Beneath the Island', aspects:['(no aspect)', 'Locus']});
  spirits.push({name: 'Grinning Trickster Stirs Up Trouble', aspects:[]});
  spirits.push({name: 'Lure of the Deep Wilderness', aspects:['(no aspect)', 'Lair']});
  spirits.push({name: 'Many Minds Move as One', aspects:[]});
  spirits.push({name: 'Shifting Memory of Ages', aspects:['(no aspect)', 'Intensify', 'Mentor']});
  spirits.push({name: 'Stone\'s Unyielding Defiance', aspects:[]});
  spirits.push({name: 'Volcano Looming High', aspects:[]});
  spirits.push({name: 'Shroud of Silent Mist', aspects:['(no aspect)', 'Stranded']});
  spirits.push({name: 'Vengeance as a Burning Plague', aspects:[]});
  spirits.push({name: 'Fractured Days Split the Sky', aspects:[]});
  spirits.push({name: 'Starlight Seeks Its Form', aspects:[]});
  spirits.push({name: 'Downpour Drenches the World', aspects:[]});
  spirits.push({name: 'Finder of Paths Unseen', aspects:[]});
  spirits.push({name: 'Devouring Teeth Lurk Underfoot', aspects:[]});
  spirits.push({name: 'Eyes Watch from the Trees', aspects:[]});
  spirits.push({name: 'Fathomless Mud of the Swamp', aspects:[]});
  spirits.push({name: 'Rising Heat of Stone and Sand', aspects:[]});
  spirits.push({name: 'Sun-Bright Whirlwind', aspects:[]});
  spirits.push({name: 'Ember-Eyed Behemoth', aspects:[]});
  spirits.push({name: 'Towering Roots of the Jungle', aspects:[]});
  spirits.push({name: 'Hearth-Vigil', aspects:[]});
  spirits.push({name: 'Breath of Darkness Down Your Spine', aspects:[]});
  spirits.push({name: 'Relentless Gaze of the Sun', aspects:[]});
  spirits.push({name: 'Wandering Voice Keens Delirium', aspects:[]});
  spirits.push({name: 'Wounded Waters Bleeding', aspects:[]});
  spirits.push({name: 'Dances Up Earthquakes', aspects:[]});
  console.log(spirits);

  const randomizeSpirit = () => {
    const length = spirits.length;
    const randomIndex = Math.floor(Math.random() * length); // returns a random number between 0 and length-1 inclusive
    setRandomSpirit(spirits[randomIndex]);
    const aspectLength = spirits[randomIndex].aspects.length;
    if (aspectLength > 0) {
      const randomAspectIndex = Math.floor(Math.random() * aspectLength);
      setRandomAspect(spirits[randomIndex].aspects[randomAspectIndex]);
    } else {
      setRandomAspect(null);
    }
  }

  const displayRandomSpirit = () => {
    if (randomSpirit && randomAspect) {
      return <div>{randomSpirit.name}: {randomAspect}</div>;
    } else if (randomSpirit) {
      return <div>{randomSpirit.name}</div>;
    } else {
      return <div>Click the button!</div>;
    }
  }

  return (
    <div>
        <h1>{title}</h1>
        <SpiritList spirits={spirits} />
        <button type="button" onClick={randomizeSpirit}>Random Spirit</button>
        {displayRandomSpirit()}
    </div>
  );
};

export default App;
