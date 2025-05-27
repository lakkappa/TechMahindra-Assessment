import React from 'react';
import { PersonalInfo } from '../type';
import './PersonalInfo.css';

interface Props {
  data: PersonalInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfoStep: React.FC<Props> = ({ data, onChange }) => (
  <div className='personalInfo'>
        <h2>Personal Information</h2>
        <label className='font'>First Name</label>
        <input name="firstName" placeholder="First Name" value={data.firstName} onChange={onChange} className='personal-ip' /><br />
        <label className='font'>Last Name</label>
        <input name="lastName" placeholder="Last Name" value={data.lastName} onChange={onChange} className='personal-ip' /> <br />
        <label className='font' style={{paddingRight:'40px'}}>Email</label>
        <input name="email" placeholder="Email" value={data.email} onChange={onChange} type="email" className='personal-ip'/> <br/>
  </div>
);