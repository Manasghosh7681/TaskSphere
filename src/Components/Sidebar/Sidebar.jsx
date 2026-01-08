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
    const [activeIndex, setActiveIndex] = useState({
        child: null,
        parent: 0
    });
    const showToggle = (index) => {
        setShowChild((prev) => {
            const isClosing = prev[index]; // true means closing

            // reset child when closing
            if (isClosing) {
                setActiveIndex(prevActive => ({
                    ...prevActive,
                    child: null
                }));
            }
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

            <div className={`bg-light vh-100 ${styles.sidebar}  ${isMobileOpen ? styles.openSidebar : ''} pt-3 ps-1`}>

                {SideData && (
                    <div  >
                        {
                            SideData.map((side, index) => {
                                const isExpanded = showChild[index];
                                const Icon = ICONS[side.title]
                                return (
                                    <div key={index}   >

                                        <p className={`${styles.element} d-flex gap-3 align-items-center ${activeIndex.parent === index ? styles.active : ''} `} onClick={() => { setActiveIndex((prev) => ({ ...prev, parent: index })), side.child && showToggle(index) }}>
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
                                                        <div key={ind} style={{ marginLeft: '35px' }} onClick={() => { setActiveIndex((prev) => ({ ...prev, child: ind })) }} >
                                                            <p className={`${styles.childElement} fs-6 ${activeIndex.child === ind ? styles.childActive : ''}`}>{sideChild}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}

                                    </div>
                                )
                            })

                        }
                        <div className={styles.logoutWrapper}>
                            <p className={`${styles.element} d-flex gap-2 align-items-center ${styles.logout}`}>
                                <Logout size={18} className={styles.icon} />
                                Logout
                            </p>
                        </div>

                    </div>
                )}
            </div></>
    )
}
export default Sidebar;