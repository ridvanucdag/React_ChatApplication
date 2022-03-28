import { useState } from "react"
import axios from "axios"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = { 'Project-ID': "d5ac8413-1b31-4c2b-a2c0-be89cdcccb0b", 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        }
        catch (error) {
            setError('Yanlış girdiniz, Lütfen tekrar deneyin')
        }

        //username
        //password
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Rıdvan Üçdağ - Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Kullanıcı Adı" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Şifreniz" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Sohbete Başla</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm