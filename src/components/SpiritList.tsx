import { FC } from 'react';
import { Spirit } from '../App.types';

interface SpiritListProps {
    spirits: Spirit[];
}

const SpiritList: FC<SpiritListProps> = ({ spirits }) => {
    return (
        <ul>
            {spirits.map(spirit => <li key={spirit.name}>{spirit.name}</li>)}
        </ul>
    );
}

export default SpiritList;