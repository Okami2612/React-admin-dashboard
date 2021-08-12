import img from '../../assests/img/avengers.jpg';

import './widgetlg.css';

export default function WidgetLg(){
    const Button = ({type}) =>{
        return <button className={"widgetLg-btn" + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLg-title">Lorem Ipsum</h3>
            <table className="widgetLg-table">
                <tr className="widgetLg-tr">
                    <th className="widgetLg-th">Customer</th>
                    <th className="widgetLg-th">Date</th>
                    <th className="widgetLg-th">Amount</th>
                    <th className="widgetLg-th">Status</th>
                </tr>
                <tr className="widgetLg-tr">
                    <td className="widgetLg-user">
                        <img src={img} alt="" className="widgetLg-img"/>
                        <span className="widgetLg-name">Benjamin</span>
                    </td>
                    <td className="wdgetLg-date">10 Aug 2021</td>
                    <td className="widgetLg-amount">$ 1.000.000</td>
                    <td className="widgetLg-status"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLg-tr">
                    <td className="widgetLg-user">
                        <img src={img} alt="" className="widgetLg-img"/>
                        <span className="widgetLg-name">Benjamin</span>
                    </td>
                    <td className="wdgetLg-date">10 Aug 2021</td>
                    <td className="widgetLg-amount">$ 1.000.000</td>
                    <td className="widgetLg-status"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLg-tr">
                    <td className="widgetLg-user">
                        <img src={img} alt="" className="widgetLg-img"/>
                        <span className="widgetLg-name">Benjamin</span>
                    </td>
                    <td className="wdgetLg-date">10 Aug 2021</td>
                    <td className="widgetLg-amount">$ 1.000.000</td>
                    <td className="widgetLg-status"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLg-tr">
                    <td className="widgetLg-user">
                        <img src={img} alt="" className="widgetLg-img"/>
                        <span className="widgetLg-name">Benjamin</span>
                    </td>
                    <td className="wdgetLg-date">10 Aug 2021</td>
                    <td className="widgetLg-amount">$ 1.000.000</td>
                    <td className="widgetLg-status"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}