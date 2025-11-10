"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const CHAT_MESSAGES = [
  { from: "customer", text: "Hi! I saw your farm on Farmly, do you still have fresh apples this week?", time: "11:34 PM" },
  { from: "farmer", text: "Hey there, yes, we just picked a new batch this morning. Super sweet ones!", time: "11:35 PM" },
  { from: "farmer", text: "How many boxes would you like?", time: "11:35 PM" },
  { from: "customer", text: "That's great! Could I get two boxes? Also, do you deliver to Coventry?", time: "11:37 PM" },
  { from: "farmer", text: "Absolutely. We deliver every Friday afternoon. If you order before Thursday, it'll be on the next delivery :)", time: "11:39 PM" },
  { from: "customer", text: "Perfect — just placed the order through the app. Thank you!", time: "11:40 PM" },
  { from: "farmer", text: "Got it! Your order's confirmed. Thanks for supporting local farms.", time: "11:41 PM" },
];

export default function RTMDemo() {
  const [activeStep, setActiveStep] = useState("discover");
  const [messages, setMessages] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const chatRef = useRef(null);
  const timerRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Chat playback
  useEffect(() => {
    if (isPlaying && messageIndex < CHAT_MESSAGES.length) {
      timerRef.current = setTimeout(() => {
        setMessages((prev) => [...prev, CHAT_MESSAGES[messageIndex]]);
        setMessageIndex((prev) => prev + 1);
      }, 800);
    } else if (messageIndex >= CHAT_MESSAGES.length) {
      setIsPlaying(false);
    }

    return () => clearTimeout(timerRef.current);
  }, [isPlaying, messageIndex]);

  const handleStepChange = (step) => {
    setActiveStep(step);
    if (step === "chat") {
      resetChat();
    }
  };

  const handlePlay = () => {
    if (messageIndex >= CHAT_MESSAGES.length) return;
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const resetChat = () => {
    setIsPlaying(false);
    setMessages([]);
    setMessageIndex(0);
  };

  return (
    <section className="rtm-demo">
      <header className="rtm-head">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Real-Time Messaging</h3>
        <p className="text-lg text-gray-600 mb-6">From discovery to order—watch a real conversation unfold.</p>
      </header>

      <div className="rtm-body">
        {/* Left: Steps */}
        <nav className="rtm-steps" role="tablist" aria-label="Steps">
          <button
            className={`rtm-step ${activeStep === "discover" ? "is-active" : ""}`}
            onClick={() => handleStepChange("discover")}
            role="tab"
            aria-selected={activeStep === "discover"}
          >
            <span>1</span> Discover
          </button>
          <button
            className={`rtm-step ${activeStep === "chat" ? "is-active" : ""}`}
            onClick={() => handleStepChange("chat")}
            role="tab"
            aria-selected={activeStep === "chat"}
          >
            <span>2</span> Chat (Live)
          </button>
          <button
            className={`rtm-step ${activeStep === "order" ? "is-active" : ""}`}
            onClick={() => handleStepChange("order")}
            role="tab"
            aria-selected={activeStep === "order"}
          >
            <span>3</span> Order
          </button>
        </nav>

        {/* Middle: Phone Screen */}
        <div className="rtm-phone">
          <div className="rtm-screen">
            {/* Discover View */}
            {activeStep === "discover" && (
              <figure className="rtm-view">
                <Image src="/Farmly/BrowseFarm.png" alt="Farm profile with Message the farm button" width={360} height={640} className="rtm-img" />
                <figcaption>
                  Browse a farm profile and tap <strong>Message the farm</strong>.
                </figcaption>
              </figure>
            )}

            {/* Chat View */}
            {activeStep === "chat" && (
              <div className="rtm-view">
                <div className="rtm-chat" ref={chatRef}>
                  {messages.map((msg, i) => (
                    <div key={i} className={`rtm-row from-${msg.from}`}>
                      <div className="bubble">
                        <p>{msg.text}</p>
                        <span className="time">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rtm-controls">
                  <button onClick={handlePlay} disabled={isPlaying || messageIndex >= CHAT_MESSAGES.length}>
                    ▶ Play
                  </button>
                  <button onClick={handlePause} disabled={!isPlaying}>
                    ⏸ Pause
                  </button>
                  <button onClick={resetChat}>⟲ Reset</button>
                </div>
              </div>
            )}

            {/* Order View */}
            {activeStep === "order" && (
              <figure className="rtm-view">
                <Image src="/Farmly/OrderConfirmed.png" alt="Order placed and confirmed in chat" width={360} height={640} className="rtm-img" />
                <figcaption>Place the order in-app and receive instant confirmation.</figcaption>
              </figure>
            )}
          </div>
        </div>

        {/* Right: Notes */}
        <aside className="rtm-notes">
          {activeStep === "discover" && (
            <div className="is-active">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Discover a farm</h4>
              <p className="text-base text-gray-700">
                Open a farm profile to see address, story, and the <em>Message the farm</em> call-to-action.
              </p>
            </div>
          )}
          {activeStep === "chat" && (
            <div className="is-active">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Chat in real time</h4>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                <li>
                  Instant updates via <strong>Firestore listeners</strong>
                </li>
                <li>
                  Familiar UI with <strong>Gifted Chat</strong>
                </li>
                <li>
                  Chats tied to each <strong>farm–customer</strong> pair
                </li>
              </ul>
            </div>
          )}
          {activeStep === "order" && (
            <div className="is-active">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Confirm & order</h4>
              <p className="text-base text-gray-700">
                Finalize quantity and delivery window, then complete the order without leaving the chat.
              </p>
            </div>
          )}
        </aside>
      </div>

      <style jsx>{`
        /* Layout */
        .rtm-demo {
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 20px;
          background: #fff;
        }

        .rtm-body {
          display: grid;
          grid-template-columns: 240px 1fr 300px;
          gap: 20px;
          align-items: start;
        }

        @media (max-width: 980px) {
          .rtm-body {
            grid-template-columns: 1fr;
          }
          .rtm-notes {
            order: 3;
          }
        }

        /* Steps */
        .rtm-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .rtm-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid #e6e9ee;
          border-radius: 12px;
          background: #fff;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .rtm-step span {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          border: 1px solid #dbeafe;
          display: grid;
          place-items: center;
          font-size: 12px;
        }

        .rtm-step.is-active {
          background: #f6faff;
          border-color: #dbeafe;
          font-weight: 600;
        }

        /* Phone */
        .rtm-phone {
          display: flex;
          justify-content: center;
        }

        .rtm-screen {
          width: 360px;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 12px;
          background: #fff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .rtm-img {
          width: 100%;
          height: auto;
          border-radius: 14px;
          border: 1px solid #eee;
        }

        .rtm-view figcaption {
          margin-top: 8px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Chat bubbles */
        .rtm-chat {
          height: 520px;
          overflow: auto;
          padding: 10px;
          background: #f7f8fa;
          border-radius: 14px;
          border: 1px solid #eef0f3;
        }

        .rtm-row {
          display: flex;
          margin: 8px 0;
        }

        .from-customer {
          justify-content: flex-start;
        }

        .from-farmer {
          justify-content: flex-end;
        }

        .bubble {
          max-width: 76%;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid transparent;
          animation: fade 0.22s ease;
        }

        .bubble p {
          margin: 0;
        }

        .from-customer .bubble {
          background: #ffffff;
          border-color: #e5e7eb;
        }

        .from-farmer .bubble {
          background: #e6f2ff;
          border-color: #cfe1ff;
        }

        .time {
          display: block;
          font-size: 11px;
          opacity: 0.55;
          margin-top: 6px;
          text-align: right;
        }

        /* Controls */
        .rtm-controls {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 10px;
        }

        .rtm-controls button {
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          background: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }

        .rtm-controls button:hover:not([disabled]) {
          background: #f3f4f6;
        }

        .rtm-controls button[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Notes */
        .rtm-notes > div {
          border: 1px solid #e6e9ee;
          border-radius: 12px;
          padding: 12px 14px;
          background: #fff;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
