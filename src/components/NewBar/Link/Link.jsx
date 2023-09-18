/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

/* eslint-disable no-unused-vars */
import React from 'react';

const Link = ({route}) => {
    return (
        <li className="mr-10 hover:bg-emerald-500 px-8" >
                    <a href={route.path}>{route.name}</a></li>
    );
};
Link.PropTypes ={
    route: PropTypes.object
}
export default Link;