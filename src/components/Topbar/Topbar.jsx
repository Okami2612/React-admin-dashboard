import React from 'react';
import "./topbar.css";
import { NotificationsNone, Settings, Language } from '@material-ui/icons';
import avatar from '../../assests/img/hello-typography-gradient.jpg';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Benjamin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Language />
                        {/* <span className="topIconBadge">2</span> */}
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />
                        {/* <span className="topIconBadge">2</span> */}
                    </div>
                    <img src={avatar} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}