import { FC } from 'react';
import { Spirit } from '../App.types';

interface SpiritListProps {
    spirits: Spirit[];
    checkedState: boolean[];
    handleOnChange: Function;
}


const SpiritList: FC<SpiritListProps> = ({ spirits, checkedState, handleOnChange }) => {

    return (
        <ul>
            {spirits.map((spirit, index) => <li key={spirit.name}><input type="checkbox" checked={checkedState[index]} onChange={()=>handleOnChange(index)}/>{spirit.name}</li>)}
        </ul>
    );
}

export default SpiritList;