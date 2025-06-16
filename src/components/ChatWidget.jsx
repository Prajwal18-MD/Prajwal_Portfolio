import { useState, useEffect, useRef } from "react";
import iconSrc from "../assets/bot1.png";
import { FaRegFilePdf, FaGithub } from "react-icons/fa";

export default function ChatWidget() {
  const API = "https://portfoliochatbot-h3zm.onrender.com";

  // ───── State & Refs ─────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState(() => {
    // 10) Load from localStorage
    const saved = localStorage.getItem("chat_messages");
    return saved ? JSON.parse(saved) : [{ from: "bot", text: "Hi, I’m your chatbot" }];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const messagesEnd = useRef(null);
  const containerRef = useRef(null);

  // ───── Persist messages ─────────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  // ───── Scroll behaviors ───────────────────────────────────────────────────────
  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (open) scrollToBottom();
  }, [messages, open]);

  // Detect user scroll
  const onScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowScroll(el.scrollTop + el.clientHeight < el.scrollHeight - 20);
  };

  // ───── Tooltip timer ─────────────────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 10000);
    return () => clearTimeout(t);
  }, []);

  // ───── Send message ──────────────────────────────────────────────────────────
  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { from: "user", text }]);
    setInput("");
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  // ───── Text rendering ────────────────────────────────────────────────────────
  const renderText = (t) => {
    const lower = t.toLowerCase();
    if (lower.includes(".pdf")) {
      return (
        <a
          href={`${API}/resume`}
          download
          className="inline-flex items-center text-yellow-500 hover:text-yellow-600 underline"
        >
          <FaRegFilePdf className="mr-1 w-5 h-5" /> Download Resume
        </a>
      );
    }
    if (t.includes("github.com")) {
      const url = t.match(/https?:\/\/[^\s]+/)[0];
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-800 hover:underline"
        >
          <FaGithub className="mr-1 w-5 h-5" /> View on GitHub
        </a>
      );
    }
    return t;
  };

  return (
    <>
      {/* 2) Slide + fade animation */}
      {open && (
        <div
          className="fixed bottom-24 right-6 w-full max-w-sm max-h-[380px]
                     bg-white/80 backdrop-blur-md rounded-xl
                     border border-purple-300 shadow-xl
                     flex flex-col overflow-hidden z-50
                     transition-all duration-500 ease-in-out"
        >
          {/* Header */}
          <div className="bg-purple-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="font-medium">Chat with me</span>
            <button
              onClick={() => setOpen(false)}
              className="text-red-300 hover:text-red-500 text-xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* 9) Scrollable message area */}
          <div
            ref={containerRef}
            onScroll={onScroll}
            className="flex-1 p-3 overflow-y-auto space-y-2 relative"
          >
            {showScroll && (
              <button
                onClick={scrollToBottom}
                className="absolute bottom-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-md text-xs"
              >
                ↓ Latest
              </button>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[80%]
                  ${m.from === "user"
                    ? "bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-md self-end"
                    : "bg-white text-gray-800 shadow-sm self-start"
                  }`}
              >
                {renderText(m.text)}
              </div>
            ))}

            {loading && (
              <div className="text-gray-500 italic text-sm">Typing...</div>
            )}
            <div ref={messagesEnd} />
          </div>

          {/* 7) Improved input */}
          <div className="p-2 flex border-t border-gray-200">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300
                         shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={send}
              className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-full
                         hover:bg-purple-700 transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {showTooltip && !open && (
            <div className="absolute -top-14 left-1/2 -translate-x-1/2
                           px-4 py-2 bg-white text-gray-800 rounded-md shadow
                           text-sm w-max">
              click to chat!
            </div>
          )}

          {/* 5) Pulse + hover-zoom and 8) responsive sizing */}
          <button
            onClick={() => setOpen(o => !o)}
            className="relative w-14 h-14 sm:w-16 sm:h-16
                       bg-[#915EFF] rounded-full shadow-lg overflow-hidden
                       animate-pulse hover:scale-110 transition-transform duration-300"
          >
            <img
              src={iconSrc}
              alt="Chatbot"
              className="w-10 h-10 m-auto"
            />
          </button>
        </div>
      </div>
    </>
  );
}
