import './widgetsm.css';

import img from '../../assests/img/eat-sleep-code.png';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm(){
    return (
        <div className="widgetSm">
            <span className="widgetSm-title">New join membership</span>
            <ul className="widgetSm-list">
                <li className="widgetSm-item">
                    <img src={img} alt="" className="item-img"/>
                    <div className="widgetSm-user">
                        <span className="widget-userName">Benjamin</span>
                        <span className="widget-userTitle">Software Engineer</span> 
                    </div>
                    <button className="widgetSm-btn">
                        <Visibility/> Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSm-list">
                <li className="widgetSm-item">
                    <img src={img} alt="" className="item-img"/>
                    <div className="widgetSm-user">
                        <span className="widget-userName">Benjamin</span>
                        <span className="widget-userTitle">Dev</span>
                    </div>
                    <button className="widgetSm-btn">
                        <Visibility/> Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSm-list">
                <li className="widgetSm-item">
                    <img src={img} alt="" className="item-img"/>
                    <div className="widgetSm-user">
                        <span className="widget-userName">Benjamin</span>
                        <span className="widget-userTitle">Dev</span>
                    </div>
                    <button className="widgetSm-btn">
                        <Visibility/> Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSm-list">
                <li className="widgetSm-item">
                    <img src={img} alt="" className="item-img"/>
                    <div className="widgetSm-user">
                        <span className="widget-userName">Benjamin</span>
                        <span className="widget-userTitle">Dev</span>
                    </div>
                    <button className="widgetSm-btn">
                        <Visibility/> Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSm-list">
                <li className="widgetSm-item">
                    <img src={img} alt="" className="item-img"/>
                    <div className="widgetSm-user">
                        <span className="widget-userName">Benjamin</span>
                        <span className="widget-userTitle">Dev</span>
                    </div>
                    <button className="widgetSm-btn">
                        <Visibility/> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}