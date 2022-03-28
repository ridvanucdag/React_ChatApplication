import { ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
         height="100vh"
         projectID="d5ac8413-1b31-4c2b-a2c0-be89cdcccb0b"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed={(chatAppProps)=> <ChatFeed { ... chatAppProps } />}
        />
    )
}

export default App