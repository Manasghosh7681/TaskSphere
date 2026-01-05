import React, { useEffect, useRef } from 'react'
import styles from './Toaster.module.css'
import { ICONS } from '../../Utils/icon'

const Toaster = ({ type, message }) => {
    const toastRef = useRef(null);

    const {
        CheckCircle,
        TriangleAlert,
        XCircle,
        Info
    } = ICONS;

    // 🔹 choose icon based on type
    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircle size={20} />;
            case 'warning':
                return <TriangleAlert size={20} />;
            case 'error':
                return <XCircle size={20} />;
            case 'info':
                return <Info size={20} />;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (!message) return;

        clearTimeout(toastRef.current);

        toastRef.current = setTimeout(() => {
            // parent clears message
        }, 3000);

        return () => clearTimeout(toastRef.current); // ✅ correct cleanup
    }, [message]);

    if (!message) return null;

    return (
        <div className={styles.container}>
            <div className={`${styles.toast} ${styles[type]}`}>
                <span className={styles.icon}>
                    {getIcon()}
                </span>
                <span className={styles.text}>
                    {message}
                </span>
            </div>
        </div>
    );
};

export default Toaster;
