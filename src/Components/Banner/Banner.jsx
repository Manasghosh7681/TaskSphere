import React, { useState } from 'react';
import styles from './Banner.module.css'
import { Image } from '../../Utils/images';
import { ICONS } from '../../Utils/icon';
const Banner = () => {
    const [user] = useState({
        name: 'Manas Ghosh',
        desingnation: 'System Administrator',
        email: 'manas.ghosh@stlIndia.in',
        date:'20-01-2025',
        address:'Patia, Bhubaneswar'
    })
    const {Mail,CalendarDays,MapPin}=ICONS
    return (
        <div className={styles.banner}>
            <div className="row">
                <div className="col-md-4 col-6">
                    <h1>Welcome</h1>
                    <h2 className='ms-3' >{user.name}</h2>

                    <div className={styles.profile}>
                        <img src={Image.profile} alt="" className={styles.image} />
                    </div>
                </div>
                <div className="col-md-4 col-6 mt-5 d-flex flex-column gap-2">
                    <span className='d-flex gap-2 align-items-center' ><Mail size={18}/>{user.email}</span>
                    <span className='d-flex gap-2 align-items-center'><CalendarDays size={18}/>{user.date}</span>
                    <span className='d-flex gap-2 align-items-center'><MapPin size={18}/>{user.address}</span>
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>

        </div>
    )
}
export default Banner;