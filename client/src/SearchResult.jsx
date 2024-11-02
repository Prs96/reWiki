import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Key, MessageSquare } from 'lucide-react';
import {useLocation} from 'react-router-dom';

const Card = ({ children, className = '' }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-700">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold text-white flex items-center">{children}</h2>
);

const CardDescription = ({ children }) => (
  <p className="mt-1 text-sm text-gray-400">{children}</p>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-3 py-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
  >
    {children}
  </button>
);

export default function Component() {
  const [passKey, setPassKey] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [decrypted, setDecrypted] = useState(false);
  const location = useLocation();
  const encryptedText= location.state?.message||""; 
  console.log(JSON.stringify(encryptedText));
  const [Chat,setChat]=useState("")
  const[res,setRes]=useState("  Chatbot: I'm sorry, but I can't provide the passkey. That would be against my programming.")
  const data={query:Chat,context:encryptedText}


  const onChat = async () => {
    try {
      const response = await axios.post("http://localhost:2000/chat", data, {
        headers: {
          'Content-Type': 'application/json',
          'X-USER-KEY': `${apiKey}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };
  


  
  const handlePassKeySubmit = (e) => {
    e.preventDefault();
    if (passKey === 'hackathon') {
      setDecrypted(true);
    } else {
      alert('Incorrect passkey. Try jailbreaking the chatbot!');
    }
  };

  const decryptText = (text) => {
    return text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        if ((code >= 65) && (code <= 90))
          return String.fromCharCode(((code - 65 + 25) % 26) + 65);
        if ((code >= 97) && (code <= 122))
          return String.fromCharCode(((code - 97 + 25) % 26) + 97);
      }
      return char;
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Re-Wiki Search Results
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <Lock className="mr-2" />
              Encrypted Content
            </CardTitle>
            <CardDescription>This content is encrypted. Decrypt it to reveal the useless information.</CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="overflow-y-auto h-60">
            <p className="font-mono text-lg break-all ">
              {encryptedText.content}
            </p>
            </div>
          </CardContent>
          
        </Card>

        <form onSubmit={handlePassKeySubmit} className="mb-8">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Enter passkey..."
              value={passKey}
              onChange={(e) => setPassKey(e.target.value)}
            />
            <Button type="submit">
              <Key className="mr-2 h-4 w-4" /> Decrypt
            </Button>
          </div>
        </form>

        {!decrypted && (
          <Card>
            <CardHeader>
              <CardTitle>
                <MessageSquare className="mr-2" />
                Chatbot Jailbreak
              </CardTitle>
              <CardDescription>Attempt to jailbreak the chatbot to obtain the passkey.</CardDescription>
            </CardHeader>
            <CardContent>
  {showChatbot ? (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <p className="mb-4">
      {response.data}
      </p>
      <Input
        type="text"
        placeholder="Try to convince the chatbot..."
        className="mb-6"
        onChange={(e)=>{setChat(e.target.value)}}
      />
      <div className="mt-4"> {/* Add margin-top here */}
        <Button onClick={onChat}>
          Send
        </Button>
      </div>
    </div>
  ) : (
    <Button onClick={() => setShowChatbot(true)} className="mt-4">
      Start Jailbreak Attempt
    </Button>
  )}
</CardContent>

          </Card>
        )}
      </motion.div>
    </div>
  );}
