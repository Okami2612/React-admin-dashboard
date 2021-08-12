import React from 'react'

import './createProduct.css';
import { Publish } from '@material-ui/icons';

export default function CreateProduct() {
    return (
        <div className="createProduct">
            <h1 className="createProduct-title">New Product</h1>
            <form action="" className="newProduct-form">
                <div className="form-left">
                <div className="form-product-item">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder="iPhone" />
                </div>                
                <div className="form-product-item">
                    <label htmlFor="">Product Price</label>
                    <input type="text" placeholder="$ 99.00" />
                </div>                                
                <div className="form-product-item">
                <label htmlFor="">In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>                        
                </div>
                <div className="form-product-item">
                    <label htmlFor="">Status</label>
                    <select name="status" id="status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div></div>
                <div className="form-right">
                <div className="form-product-item">                    
                <img src="https://product.hstatic.net/200000144777/product/iphone-12-white-select-2020_8a2226095b48478ca211e2697e1072c9.png" alt="" />
                    <label htmlFor="file">Upload avatar<Publish/></label>
                    <input type="file" id="file" style={{display:"none"}}/>                    
                    
                </div>                </div>
            </form>
            <button className="createProduct-btn">Create Product</button>
        </div>
    )
}
