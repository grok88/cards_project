import React from 'react';
import styles from './Main.module.css';
import {Routes} from './routes/Routes';
import {DevHeader} from "./dev-header/DevHeader";

export const Main = () => {
    return <div>
        <DevHeader/>
        <Routes/>
    </div>
}