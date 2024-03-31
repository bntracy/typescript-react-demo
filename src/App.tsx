import { FC, useState } from 'react';
import { AppProps, Spirit } from './App.types';
import SpiritList from './components/SpiritList';

const App: FC<AppProps> = ({ title }) => {
  const [randomSpirit, setRandomSpirit] = useState<Spirit | null>(null);
  const [randomAspect, setRandomAspect] = useState<string | null>(null);
  const [spiritOne, setSpiritOne] = useState<Spirit | null>(null);
  const [spiritTwo, setSpiritTwo] = useState<Spirit | null>(null);
  const [spiritThree, setSpiritThree] = useState<Spirit | null>(null);
  const [spiritFour, setSpiritFour] = useState<Spirit | null>(null);

  const spirits: Spirit[] = [];
  spirits.push({name: 'Lightning\'s Swift Strike', aspects: ['(no aspect)', 'Immense', 'Pandemonium', 'Sparking', 'Wind'], checked: true});
  spirits.push({name: 'River Surges in Sunlight', aspects: ['(no aspect)', 'Haven', 'Sunshine', 'Travel'], checked: true});
  spirits.push({name: 'Shadows Flicker Like Flame', aspects: ['(no aspect)', 'Amorphous', 'Dark Fire', 'Foreboding', 'Madness', 'Reach'], checked: true});
  spirits.push({name: 'Vital Strength of the Earth', aspects: ['(no aspect)', 'Might', 'Nourishing', 'Resilience'], checked: true});
  spirits.push({name: 'A Spread of Rampant Green', aspects:['(no aspect)', 'Regrowth', 'Tangles'], checked: true});
  spirits.push({name: 'Thunderspeaker', aspects:['(no aspect)', 'Tactician', 'Warrior'], checked: true});
  spirits.push({name: 'Bringer of Dreams and Nightmares', aspects:['(no aspect)', 'Enticing', 'Violence'], checked: true});
  spirits.push({name: 'Ocean\'s Hungry Grasp', aspects:['(no aspect)', 'Deeps'], checked: true});
  spirits.push({name: 'Keeper of the Forbidden Wilds', aspects:['(no aspect)', 'Spreading Hostility'], checked: true});
  spirits.push({name: 'Sharp Fangs Behind the Leaves', aspects:['(no aspect)', 'Encircle', 'Unconstrained'], checked: true});
  spirits.push({name: 'Heart of the Wildfire', aspects:['(no aspect)', 'Transforming'], checked: true});
  spirits.push({name: 'Serpent Slumbering Beneath the Island', aspects:['(no aspect)', 'Locus'], checked: true});
  spirits.push({name: 'Grinning Trickster Stirs Up Trouble', aspects:[], checked: true});
  spirits.push({name: 'Lure of the Deep Wilderness', aspects:['(no aspect)', 'Lair'], checked: true});
  spirits.push({name: 'Many Minds Move as One', aspects:[], checked: true});
  spirits.push({name: 'Shifting Memory of Ages', aspects:['(no aspect)', 'Intensify', 'Mentor'], checked: true});
  spirits.push({name: 'Stone\'s Unyielding Defiance', aspects:[], checked: true});
  spirits.push({name: 'Volcano Looming High', aspects:[], checked: true});
  spirits.push({name: 'Shroud of Silent Mist', aspects:['(no aspect)', 'Stranded'], checked: true});
  spirits.push({name: 'Vengeance as a Burning Plague', aspects:[], checked: true});
  spirits.push({name: 'Fractured Days Split the Sky', aspects:[], checked: true});
  spirits.push({name: 'Starlight Seeks Its Form', aspects:[], checked: true});
  spirits.push({name: 'Downpour Drenches the World', aspects:[], checked: true});
  spirits.push({name: 'Finder of Paths Unseen', aspects:[], checked: true});
  spirits.push({name: 'Devouring Teeth Lurk Underfoot', aspects:[], checked: true});
  spirits.push({name: 'Eyes Watch from the Trees', aspects:[], checked: true});
  spirits.push({name: 'Fathomless Mud of the Swamp', aspects:[], checked: true});
  spirits.push({name: 'Rising Heat of Stone and Sand', aspects:[], checked: true});
  spirits.push({name: 'Sun-Bright Whirlwind', aspects:[], checked: true});
  spirits.push({name: 'Ember-Eyed Behemoth', aspects:[], checked: true});
  spirits.push({name: 'Towering Roots of the Jungle', aspects:[], checked: true});
  spirits.push({name: 'Hearth-Vigil', aspects:[], checked: true});
  spirits.push({name: 'Breath of Darkness Down Your Spine', aspects:[], checked: true});
  spirits.push({name: 'Relentless Gaze of the Sun', aspects:[], checked: true});
  spirits.push({name: 'Wandering Voice Keens Delirium', aspects:[], checked: true});
  spirits.push({name: 'Wounded Waters Bleeding', aspects:[], checked: true});
  spirits.push({name: 'Dances Up Earthquakes', aspects:[], checked: true});

  const [checkedState, setCheckedState] = useState(
    new Array(spirits.length).fill(true)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }

  const updateSpiritList = () => {
    spirits.forEach((spirit, index) => spirit.checked = checkedState[index]);
  }

  const randomizeSpirit = () => {
    updateSpiritList();
    const spiritCopy = spirits.filter(spirit => spirit.checked);
    const length = spiritCopy.length;
    if (length === 0) {
      alert("Please select at least one spirit");
      return;
    }
    const randomIndex = Math.floor(Math.random() * length); // returns a random number between 0 and length-1 inclusive
    setRandomSpirit(spiritCopy[randomIndex]);
    const aspectLength = spiritCopy[randomIndex].aspects.length;
    if (aspectLength > 0) {
      const randomAspectIndex = Math.floor(Math.random() * aspectLength);
      setRandomAspect(spiritCopy[randomIndex].aspects[randomAspectIndex]);
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
      return <div>Click the button for a random spirit!</div>;
    }
  }

  const fourRandomSpirits = () => {
    updateSpiritList();
    const spiritCopy = spirits.filter(spirit => spirit.checked);
    let length = spiritCopy.length;
    if (length < 4) {
      alert('Please select at least four spirits');
      return;
    }
    let randomIndex = Math.floor(Math.random() * length);
    setSpiritOne(spiritCopy[randomIndex]);
    spiritCopy.splice(randomIndex, 1);
    length--;
    randomIndex = Math.floor(Math.random() * length);
    setSpiritTwo(spiritCopy[randomIndex]);
    spiritCopy.splice(randomIndex, 1);
    length--;
    randomIndex = Math.floor(Math.random() * length);
    setSpiritThree(spiritCopy[randomIndex]);
    spiritCopy.splice(randomIndex, 1);
    length--;
    randomIndex = Math.floor(Math.random() * length);
    setSpiritFour(spiritCopy[randomIndex]);
  }

  const displayFourSpirits = () => {
    if (spiritOne && spiritTwo && spiritThree && spiritFour) {
      return <ul>
        {/* if the spirit has aspects, display a random aspect */}
        <li>{spiritOne.name}{(spiritOne.aspects.length > 0) && <>: {spiritOne.aspects[Math.floor(Math.random() * spiritOne.aspects.length)]}</>}</li>
        <li>{spiritTwo.name}{(spiritTwo.aspects.length > 0) && <>: {spiritTwo.aspects[Math.floor(Math.random() * spiritTwo.aspects.length)]}</>}</li>
        <li>{spiritThree.name}{(spiritThree.aspects.length > 0) && <>: {spiritThree.aspects[Math.floor(Math.random() * spiritThree.aspects.length)]}</>}</li>
        <li>{spiritFour.name}{(spiritFour.aspects.length > 0) && <>: {spiritFour.aspects[Math.floor(Math.random() * spiritFour.aspects.length)]}</>}</li>
      </ul>
    } else {
      return <div>Click the button for four random spirits!</div>;
    }
  }

  return (
    <div>
        <h1>{title}</h1>
        <SpiritList spirits={spirits} checkedState={checkedState} handleOnChange={handleOnChange}/>
        <button type="button" onClick={randomizeSpirit}>Random Spirit</button>
        {displayRandomSpirit()}
        <button type="button" onClick={fourRandomSpirits}>Gain a Spirit</button>
        {displayFourSpirits()}
    </div>
  );
};

export default App;
