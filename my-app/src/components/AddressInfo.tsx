import React from 'react';
import { AddressInfo } from '../type';
import './AddressInfo.css';

interface Props {
  data: AddressInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddressInfoStep: React.FC<Props> = ({ data, onChange }) => (
  <div className='addressInfo' >
        <h2>Address Information</h2>
         <label className='font'>Address</label>
        <input name="address" placeholder="Address" value={data.address} onChange={onChange} className='address-ip' /><br />
         <label className='font' style={{paddingRight:'36px'}}>City</label>
        <input name="city" placeholder="City" value={data.city} onChange={onChange} className='address-ip' /><br />
         <label className='font'>ZIP Code</label>
    <input name="zip" placeholder="ZIP Code" value={data.zip} onChange={onChange} className='address-ip'/><br/>
  </div>
);