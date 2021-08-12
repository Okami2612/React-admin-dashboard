import React from 'react';
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart';

import { productData } from '../../dummyData';

import { Publish } from '@material-ui/icons';

import './productDetails.css';

export default function ProductDetails() {
    return (
        <div className="product-details">
            <div className="product-title-container">
                <h1 className="product-title">Product</h1>
                <Link to="/newProduct">
                    <button className="product-add-btn">Create Product</button>
                </Link>
            </div>
            <div className="product-top">
                <div className="top-left">
                    <Chart data={productData} title="Product Analytics" dataKey="Sales performance" grid/>
                </div>
                <div className="top-right">
                    <div className="product-info-top">
                        <img src="https://product.hstatic.net/200000144777/product/iphone-12-white-select-2020_8a2226095b48478ca211e2697e1072c9.png" alt="" />
                        <span className="product-name">Apple iPhone 12</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">id:</span>
                            <span className="product-info-value">123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">sales:</span>
                            <span className="product-info-value">9123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">status:</span>
                            <span className="product-info-value">active</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">in stock:</span>
                            <span className="product-info-value">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form action="" className="product-form">
                    <div className="product-form-left">
                        <label htmlFor="">Product name</label>
                        <input type="text" name="" id="" placeholder="iPhone"/>
                        <label htmlFor="">Product price</label>
                        <input type="text" name="" id="" placeholder="$99.00"/>
                        <label htmlFor="">In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Status</label>
                        <select name="status" id="status">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="product-form-right">
                        <div className="product-img-upload">
                            <img src="https://product.hstatic.net/200000144777/product/iphone-12-white-select-2020_8a2226095b48478ca211e2697e1072c9.png" alt="" />
                            <label htmlFor="file">Upload Image<Publish/></label>
                            <input type="file" name="" id="file" style={{display:"none"}}/>
                        </div>
                        
                    </div>
                    <button className="product-update-btn">Update</button>
                </form>
            </div>
        </div>
    )
}
