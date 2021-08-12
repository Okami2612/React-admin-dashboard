import './userDetail.css';

import img from '../../assests/img/be.jpg';
import { CalendarToday, EmailOutlined, LocationCityOutlined, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function UserDetail(){
    return(
        <div className="userDetails">
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <Link to="/newUser">
                    <button className="user-add-btn">Create User</button>
                </Link>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src={img} alt="" />
                        <div className="user-show-top-title">
                            <span className="show-username">Benjamin</span>
                            <span className="show-title">Software Engineer</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <span className="bottom-info-title">Account Details</span>
                        <div className="user-info">
                            <PermIdentity className="user-info-icon"/>
                            <span className="show-info-title">okami</span>
                        </div>
                        <div className="user-info">
                            <CalendarToday className="user-info-icon"/>
                            <span className="show-info-title">11 Aug 2021</span>
                        </div>
                        <span className="bottom-info-title">Contact Details</span>
                        <div className="user-info">
                            <PhoneAndroid className="user-info-icon"/>
                            <span className="show-info-title">+1 234 56789</span>
                        </div>
                        <div className="user-info">
                            <EmailOutlined className="user-info-icon"/>
                            <span className="show-info-title">example@email.com</span>
                        </div>
                        <div className="user-info">
                            <LocationCityOutlined className="user-info-icon"/>
                            <span className="show-info-title">Nha Trang | VietNam</span>
                        </div>                        
                    </div>
                </div>
                <div className="user-update" style={{paddingTop:"40px", paddingLeft:"40px"}}>
                    <span className="user-update-title">Edit</span>
                    <form action="" className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label >Username</label>
                                <input type="text" placeholder="okami" className="user-update-input"/>
                            </div>
                            <div className="user-update-item">
                                <label >Full name</label>
                                <input type="text" placeholder="Benjamin" className="user-update-input"/>
                            </div>
                            <div className="user-update-item">
                                <label >Email</label>
                                <input type="text" placeholder="example@email.com" className="user-update-input"/>
                            </div>
                            <div className="user-update-item">
                                <label >Phone</label>
                                <input type="text" placeholder="+1 234 56789" className="user-update-input"/>
                            </div>
                            <div className="user-update-item">
                                <label >Address</label>
                                <input type="text" placeholder="Nha Trang | VietNam" className="user-update-input"/>
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-upload">
                                <img src={img} alt="" />
                                <label htmlFor="file"><Publish className="user-update-icon"/></label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="user-update-btn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}