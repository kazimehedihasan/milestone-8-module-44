/* eslint-disable react/prop-types */
import {AiFillCheckSquare} from 'react-icons/ai';


const Featur = ({feature}) => {

    return (
        <div>
             <p className='flex items-center '>
    <AiFillCheckSquare className=' mr-2'></AiFillCheckSquare>  {feature}</p>
        </div>
    );
};

export default Featur;