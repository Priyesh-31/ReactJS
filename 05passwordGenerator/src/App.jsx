import { useState, useCallback, useEffect, useRef, use} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+~`=-"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 7);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-400 text-orange-500">
        <h1 className='text-white text-center text-4xl'>
          Password Generator</h1>
        <div className='flex bg-white shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="w-full outline-none px-3 py-1"
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordtoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
// 1. useRef hook is used to directly access a DOM element and manipulate it, here it is used to select the password text for copying to clipboard.

// 2. useCallback hook is used to memoize functions to prevent unnecessary re-creations on each render, here it is used for password generation and copying to clipboard functions.

// 3. useEffect hook is used to perform side effects in functional components, here it is used to generate a new password whenever the dependencies change.

// 4. The passwordGenerator function creates a random password based on user-defined criteria such as length, inclusion of numbers, and special characters.

// 5. The copyPasswordtoClipboard function selects the generated password and copies it to the user's clipboard using the Clipboard API.

// 6. The component's UI includes input elements for adjusting password length and toggling the inclusion of numbers and special characters, along with a display area for the generated password and a button to copy it.