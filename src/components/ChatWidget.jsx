import { useState, useEffect, useRef } from "react";
import iconSrc from "../assets/bot.png"; // your chatbot icon
import { FaRegFilePdf } from "react-icons/fa";

export default function ChatWidget() {
  const API = "https://portfoliochatbot-h3zm.onrender.com";
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, I’m your chatbot—click me to start!" }
  ]);
  const [input, setInput] = useState("");
  const messagesEnd = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Hide tooltip after 10s
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 10000);
    return () => clearTimeout(t);
  }, []);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { from: "user", text }]);
    setInput("");
    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const { reply } = await res.json();
      setMessages(m => [...m, { from: "bot", text: reply }]);
    } catch {
      setMessages(m => [...m, { from: "bot", text: "Oops, server error." }]);
    }
  };

  // Render PDF link with icon
    const renderText = (t) => {
    if (t.toLowerCase().includes(".pdf")) {
      return (
        <a
          href={`${API}/resume`}
          download
          className="inline-flex items-center text-yellow-500 hover:text-yellow-600 underline"
        >
          <FaRegFilePdf className="mr-1 w-5 h-5 flex-shrink-0" />
          Download Resume
        </a>
      );
    }
    return t;
  };


  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 max-h-96 bg-gray-50 rounded-xl shadow-lg flex flex-col overflow-hidden z-50">
          <div className="bg-purple-600 text-white px-4 py-2 flex justify-between items-center">
            <span>Chat with me</span>
            <button
              onClick={() => setOpen(false)}
              className="text-red-300 hover:text-red-500 text-xl leading-none"
            >
              &times;
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  m.from === "user"
                    ? "bg-purple-200 text-purple-900 self-end"
                    : "bg-purple-100 text-gray-700 self-start"
                }`}
              >
                {renderText(m.text)}
              </div>
            ))}
            <div ref={messagesEnd} />
          </div>
          <div className="p-2 flex border-t border-gray-200">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 px-3 py-1 rounded-md border border-gray-300 focus:outline-none"
            />
            <button
              onClick={send}
              className="ml-2 px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
         {showTooltip && !open && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-gray-800 rounded-md shadow text-sm w-max">
                click to chat!
            </div>
            )}

          <button
            onClick={() => setOpen(o => !o)}
            className="relative w-14 h-14 bg-[#915EFF] rounded-full shadow-lg overflow-hidden chat-icon"
          >
            <img src={iconSrc} alt="Chatbot" className="w-8 h-8 m-3" />
          </button>
        </div>
      </div>
    </>
  );
}
