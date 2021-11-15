import { useNavigate } from "react-router-dom"
import styles from "./Login.module.scss"
import one from "./img/two.jpg"
import { useState } from "react"
const Login = () => {
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState('')
    const navigate = useNavigate();
    const loggUserIn = (e : any) => {
        e.preventDefault()
        if(email && password){
            setError('')
            navigate('home')
        }
        else
        setError("Enter Email And Password")
    }
    return (
        <div className={styles.loginContainer}>
            <img src={one} className={styles.img} alt="Login" />
            <form className={styles.form} onSubmit={loggUserIn}>
                <h2 className={styles.title}>Login</h2>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.inputFlex}>
                    <label className={styles.label}>Username</label>
                    <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </div>
                <div className={styles.inputFlex}>
                    <label className={styles.label}>Password</label>
                    <input className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <button className={styles.button} type="submit">Login In</button>
            </form>
        </div>
    )
}

export default Login

