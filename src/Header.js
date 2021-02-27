import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import {useDataLayerValue} from './DataLayer'
import './Header.css'
function Header(props) {
    const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                <input type="text" placeholder="Search for Articles, SOngs, author"/>
            </div>
            <div className="header__right">
                <Avatar src="" alt="NL"/>
                <h4> {user?.display_name} </h4>
            </div>
            
        </div>
    );
}

export default Header;