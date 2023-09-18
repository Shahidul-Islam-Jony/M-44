import PropTypes from 'prop-types';
import {BsCheckCircleFill} from "react-icons/bs"
const Feature = ({feature}) => {
    return (
        <div className='flex gap-2 items-center'>
            <BsCheckCircleFill className='text-green-500'></BsCheckCircleFill>
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string,
}

export default Feature;