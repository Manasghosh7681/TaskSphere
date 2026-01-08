import React from 'react';
import styles from './Menu.module.css'
import { ICONS } from '../../Utils/icon';
const Menu = () => {
    const items = [
        { menu: 'Profile', time: '12.20 Am' },
        { menu: 'Notification', time: '12.20 Am' },
        { menu: 'Setting', time: '12.20 Am' },
        { menu: 'Dashboard', time: '12.20 Am' },

    ]
    const { MoveRight } = ICONS
    return (
        <div>
            {
                items.map((ele, index) => {
                    return (
                        <div key={index} className='d-inline-flex'>
                            <div className={styles.item}>
                                <h6 className='mt-2 ms-2'>{ele.menu}</h6>
                                <div className='ms-2'>{ele.time}</div>
                                <div className='d-flex justify-content-end me-3'><div>Open <MoveRight /></div></div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}
export default Menu;