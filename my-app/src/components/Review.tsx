import React from 'react';
import { FormData } from '../type';
import './Review.css';

interface Props {
  data: FormData;
}
export const ReviewStep: React.FC<Props> = ({ data }) => {
    console.log("data==>", data);
    return (
        <div>
            <h2 className='review'>Review Information Details</h2>
            <table style={{ border: '1px solid black' }}>
                <tbody>
                <tr>
                        <th>FirstName</th> 
                        <th>LastName</th> 
                        <th>Email</th> 
                        <th>Address</th> 
                        <th>City</th> 
                        <th>Zip</th>
                    </tr>
                    <tr>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td>{data.city}</td>
                        <td>{data.zip}</td>
                    </tr>
            </tbody>
            </table>
        </div>
    );
}