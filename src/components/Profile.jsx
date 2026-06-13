import { useState } from 'react';
import { Camera, Pencil, LogOut } from 'lucide-react';
import DP from "../assets/DP.jpg";


export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@email.com');
  const [password, setPassword] = useState('••••••••');
  const [editing, setEditing] = useState(null);

  return (
    <div className="min-h-screen bg-[#0c1027] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        
        <div className="bg-[#1a1f3a] rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-blue-500 overflow-hidden bg-gray-300">
                <img 
                  src={DP} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                <Camera size={12} />
                Update
              </button>
            </div>
            
            <div className="flex-1">
              <p className="text-gray-400 text-sm">Full Name</p>
              <div className="flex items-center justify-between">
                {editing === 'name' ? (
                  <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setEditing(null)}
                    autoFocus
                    className="bg-[#0c1027] text-white text-xl font-semibold rounded px-2 py-1 w-full mr-2 outline-none"
                  />
                ) : (
                  <h2 className="text-white text-xl font-semibold">{name}</h2>
                )}
                <button 
                  onClick={() => setEditing('name')}
                  className="bg-[#2a2f4a] hover:bg-[#353b5c] text-white text-sm px-3 py-1.5 rounded-lg flex items-center gap-1"
                >
                  Update <Pencil size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1f3a] rounded-2xl p-5">
          <p className="text-gray-400 text-sm mb-1">Email</p>
          <div className="flex items-center justify-between">
            {editing === 'email' ? (
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEditing(null)}
                autoFocus
                className="bg-[#0c1027] text-white rounded px-2 py-1 w-full mr-2 outline-none"
              />
            ) : (
              <p className="text-white text-lg">{email}</p>
            )}
            <button 
              onClick={() => setEditing('email')}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              Update <Pencil size={14} />
            </button>
          </div>
        </div>

        <div className="bg-[#1a1f3a] rounded-2xl p-5">
          <p className="text-gray-400 text-sm mb-1">Password</p>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#0c1027] text-white rounded-lg px-4 py-2.5 outline-none border border-[#2a2f4a] focus:border-blue-500"
          />
          <div className="text-right mt-2">
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              Forget Password?
            </button>
          </div>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </div>
  );
}