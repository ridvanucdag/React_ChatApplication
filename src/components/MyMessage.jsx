const MyMessage = ({ message }) => {
    if (message?.attachments?.lenght > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachments"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#41a619' }}>
            {message.text}
        </div>
    )
}

export default MyMessage