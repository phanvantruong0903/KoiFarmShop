import { createContext, useContext, useState } from "react";

const ChatContext = createContext()

export const useChat = () => {
    return useContext(ChatContext)
}

export const ChatContextProvider = ({children})=>{
    const [selectedChat, setSelectedChat] = useState(null)

    return(
        <ChatContext.Provider value={{selectedChat,setSelectedChat}}>
            {children}
        </ChatContext.Provider>
    )
}