import React from "react";
import "./sidebar.css";

import {
  Home,
  ShowChart,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoney,
  Equalizer,
  MailOutline,
  Sms,
  DynamicFeed,
  WorkOutline,
  Report,
  Timeline,
} from "@material-ui/icons/";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarItem active">
                <Home />
                Home
              </li>
            </Link>
            <li className="sidebarItem">
              <ShowChart />
              Analytics
            </li>
            <li className="sidebarItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarItem">
                <PersonOutline />
                User
              </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarItem">
              <Storefront />
              Products
            </li>
            </Link>
            <li className="sidebarItem">
              <AttachMoney />
              Transaction
            </li>
            <li className="sidebarItem">
              <Equalizer />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <MailOutline />
              Mail
            </li>
            <li className="sidebarItem">
              <Sms />
              Message
            </li>
            <li className="sidebarItem">
              <DynamicFeed />
              Feedback
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItem">
              <WorkOutline />
              Manage
            </li>
            <li className="sidebarItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarItem">
              <Report />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
