import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../config/firebase'
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import SendMessage from '../components/SendMessage'
import Nav from '../components/Nav';


function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const messagesCollectionRef = collection(db, 'messages');
        const messagesQuery = query(messagesCollectionRef, orderBy('createdAt'), limit(50));
    
        const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
          setMessages(snapshot.docs.map((doc) =>{
            return {
                ...doc.data(),
                id:doc.id,
            }
          }));
        });
    
        return () => {
          // Unsubscribe from the snapshot listener when the component is unmounted
          unsubscribe();
        };
      }, []);
    return (
       
        <div className='chatfeature'>
             <Nav />
          
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => {
                
                    return (
                        <div key={id}>
                            <div  className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                <img src={photoURL} alt="" />
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
