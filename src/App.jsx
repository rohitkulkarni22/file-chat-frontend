import { useState } from 'react';
import HeaderComponent from './components/Header';
import sendIcon from './assets/send-Icon.svg';

function App() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission here, e.g., send message to backend or process locally
    console.log('Message submitted:', message);
    // Clear the input field after submission
    setMessage('');
  };

  return (
    <>
      <div className="w-full h-[40.625rem] relative bg-white flex flex-col items-end justify-start pt-[0rem] pb-[3.313rem] pr-[6.813rem] pl-[0.063rem] box-border gap-[42rem] tracking-[normal] lg:gap-[21rem_42rem] lg:pr-[3.375rem] lg:box-border mq450:gap-[5.25rem_42rem] mq750:gap-[10.5rem_42rem] mq750:pr-[1.688rem] mq750:box-border">
        <div className="w-[89.938rem] h-[40.625rem] relative bg-white hidden max-w-full" />
        
        <HeaderComponent />
        
        <footer className="w-[76.125rem] h-[3.5rem] rounded-lg bg-gainsboro-200 box-border flex items-center justify-between py-[1.063rem] pr-[2.063rem] pl-[2.438rem] gap-[1.25rem] max-w-full z-[1] text-left text-[0.875rem] text-slategray font-inter border-[1px] border-solid border-gainsboro-100 -mt-10">
          <input 
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Send a message..."
            className="flex-grow w-full h-full px-2 focus:outline-none  bg-transparent"
          />
          <button type="submit" onClick={handleSubmit} className=" bg-transparent">
            <img 
              className="h-[1.375rem] w-[1.375rem] relative overflow-hidden shrink-0 min-h-[1.375rem] cursor-pointer"
              loading="lazy"
              alt=""
              src={sendIcon}
            />
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;
