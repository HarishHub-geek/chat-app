import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { IoArrowBack } from 'react-icons/io5'
import { useSocketContext } from '../../context/SocketContext'


const InnerMessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const { onlineUsers } = useSocketContext();
    const onlineStatus = onlineUsers.includes(selectedConversation._id) ? "online" : "";

    return (
        <>
            {/* HEADER */}
            <div className='bg-slate-500 px-4 py-2 mb-2 relative rounded-t-2xl flex items-center gap-2'>
                <div className={`avatar ${onlineStatus}`}>
                    <div className='w-10 rounded-full'>
                        <img src={selectedConversation.profilePic} alt='user avatar' />
                    </div>
                </div>
                <span className='font-bold text-white'>{selectedConversation.fullName}</span>
                <button onClick={() => setSelectedConversation(null)} className='absolute inset-y-0 inset-e-0 flex items-center pe-3 text-white text-xl'>
                    <IoArrowBack />
                </button>
            </div>
            <Messages />
            <MessageInput />
        </>
    )
}

export default InnerMessageContainer