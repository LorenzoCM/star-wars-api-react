import React from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';
import People from './people';
import Planets from './planets';

const Index2 = props => {
    return (
        <>
            <People />
            <Planets />
        </>
    )
}

export default Index2;