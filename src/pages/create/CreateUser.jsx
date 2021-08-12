import './createUser.css';

import img from '../../assests/img/eat-sleep-code.png';
import { Publish } from '@material-ui/icons';

export default function CreateUser() {
    return (
        <div className="createUser">
            <h1 className="createUser-title">New User</h1>
            <form action="" className="newUser-form">
                <div className="form-item">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="metallica" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Full name</label>
                    <input type="text" placeholder="Benjamin" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="metallica@outlook.com" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="+1 234 56789" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Nha Trang | VietNam" />
                </div>
                <div className="form-item">
                    <label htmlFor="">Gender</label>
                    <div className="form-gender">
                        <input type="radio" name="gender" value="male" checked id="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" value="female" id="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" value="other" id="other"/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="form-item">
                    <label htmlFor="">Status</label>
                    <select name="status" id="status" className="form-status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="form-item form-img-upload">                    
                    <label htmlFor="file">Upload avatar<Publish/></label>
                    <input type="file" id="file" style={{display:"none"}}/>                    
                    <img src={img} alt="" />
                </div>
                <button className="createUser-btn">Create User</button>
            </form>
        </div>
    )
}