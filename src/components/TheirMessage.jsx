const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}

            {
                message?.attachments?.lenght > 0
                    ? (
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachments"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                        />
                    )
                    : (
                        <div className="message" style={{ float: 'left', backgroundColor: '#d4c8e3', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                            {message.text}
                        </div>
                    )
            }

        </div>
    )
}

export default TheirMessage