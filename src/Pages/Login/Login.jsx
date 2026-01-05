import { useState } from 'react';
import styles from './Login.module.css'
import { ICONS } from '../../Utils/icon';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (remember) {
            const user = { email, password }
            localStorage.setItem('user', JSON.stringify(user))
        }
        console.log(email, password, remember)
    };
    const { Mail, Lock } = ICONS

    return (
        <div className={styles.background}>
            <div className={styles.formstyle}>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center mt-3 fw-bold'>Welcome Back</h3>
                    <p className='text-center text-secondary'>Sign in to your account</p>
                    <div className='mt-4'>

                        <label className={`form-label d-flex align-items-center gap-2`}>
                            <Mail size={18} color="#6c757d" />
                            <span>Email Address</span>
                        </label>
                        <input type='text' className='form-control customInput' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='mt-3'>

                        <label className={`form-label d-flex align-items-center gap-2`}>
                            <Lock size={18} color="#6c757d" />
                            <span>Password</span>
                        </label>
                        <input type='password' className='form-control customInput' name='password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className={`d-flex justify-content-between px-2 mt-4`}>
                        <div className='d-flex align-items-center gap-2'>
                            <input type='checkbox' className='form-check-input' name='remember' onChange={((e) => { setRemember(e.target.checked) })} />
                            <label className={`form-check-label   ${styles.remberMe}`} >Remember me</label>
                        </div>
                        <div>
                            <label className={styles.forgotText} >Forgot password?</label>
                        </div>
                    </div>
                    <button type='submit' className={`btn btn-primary d-block w-100 mt-4 pt-1 customInput`}>Sign In</button>
                </form>
            </div>
        </div>
    )
}