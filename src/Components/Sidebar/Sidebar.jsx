import React from 'react';
import { useState } from 'react'
import styles from './Sidebar.module.css'
import { ICONS } from '../../Utils/icon';
// import { sidebarConfig } from '../config/sidebarConfig';


const Sidebar = () => {
    const AdminSidebar = [
        { title: 'Dashboard', child: ['User Management', 'All Users', 'Create User', 'Roles & Permissions'] },
        { title: 'Profile' },
        { title: 'Notificatios' },
        { title: 'Settings' },
    ]
    const [SideData] = useState(AdminSidebar)
    const [showChild, setShowChild] = useState({})
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const showToggle = (index) => {
        setShowChild((prev) => {
            return (
                { ...prev, [index]: !prev[index] }
            )
        })
    }
    const ArrowIcon = ICONS.arrow
    const Logout = ICONS.logout
    const Menu = ICONS.Menu


    return (
        <>
            {!isMobileOpen && (
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileOpen(true)}
                >
                    <Menu size={24} />
                </button>
            )}

            {/* Overlay – show ONLY when sidebar is open */}
            {isMobileOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <div className={`bg-light vh-100 ${styles.sidebar}  ${isMobileOpen ? styles.openSidebar : ''} pt-3`}>

                {SideData && (
                    <div  >
                        {
                            SideData.map((side, index) => {
                                const isExpanded = showChild[index];
                                const Icon = ICONS[side.title]
                                return (
                                    <div key={index}   >

                                        <p className={`${styles.element} d-flex gap-2 align-items-center `} onClick={() => side.child && showToggle(index)}>
                                            <Icon
                                                size={18}
                                                className={styles.icon}
                                            />
                                            <span>{side.title}</span>
                                            {side.child && (<>
                                                <ArrowIcon

                                                    size={18}
                                                    style={{
                                                        marginLeft: '10px',
                                                        transition: 'transform 0.3s ease',
                                                        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                                        color: ' rgb(190, 26, 138)'
                                                    }}
                                                />
                                            </>)}</p>

                                        {side.child && (
                                            <div className={`${styles.childWrapper} ${isExpanded ? styles.open : ''}`}>
                                                {side.child.map((sideChild, ind) => {
                                                    return (
                                                        <div key={ind} style={{ marginLeft: '35px' }}>
                                                            <p className={`${styles.element} fs-6`}>{sideChild}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}

                                    </div>
                                )
                            })

                        }
                        <div className={`${styles.element} d-flex gap-2 align-items-center`} style={{ position: 'fixed', bottom: 0, marginBottom: '18px' }}>
                            <Logout
                                size={18}
                                className={styles.icon} />
                            Logout</div>
                    </div>
                )}
            </div></>
    )
}
export default Sidebar;