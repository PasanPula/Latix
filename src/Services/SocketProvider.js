import { useContext, useEffect, useState,createContext } from 'react'
import io from 'socket.io-client';
import { BASE_URL } from '../config/config';

const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({children}) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const socket = io(BASE_URL);

    socket.on("connect", () => {
      console.log(socket.id); 
    });

    socket.on("connect_error", () => {
      setTimeout(() => {
        socket.connect();
      }, 1000);
    });

    setSocket(socket)
    return () => socket.close()
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
