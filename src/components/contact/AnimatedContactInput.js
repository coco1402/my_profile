'use client';

export default function AnimatedContactInput({ isInputting = false }) {

  return (
    <div className="animated-contact-container">
      <svg width="100%" height="100%" viewBox="0 0 1200 900" className="contact-illustration">
        {/* Desk */}
        <rect x="100" y="600" width="1000" height="20" fill="#8b7355" rx="5"/>

        {/* Stick figure person - BEHIND the monitor */}
        <g className={`person ${isInputting ? 'typing' : 'idle'}`}>
          {/* Head */}
          <circle cx="600" cy="400" r="50" fill="#333" stroke="#222" strokeWidth="3"/>

          {/* Eyes */}
          <circle cx="580" cy="390" r="8" fill="#fff" className="eye-left"/>
          <circle cx="620" cy="390" r="8" fill="#fff" className="eye-right"/>

          {/* Body */}
          <line x1="600" y1="450" x2="600" y2="580" stroke="#333" strokeWidth="8"/>

          {/* Arms - positioned to type on keyboard */}
          <g className="arms">
            <path d="M 600 480 Q 500 520 450 580" stroke="#333" strokeWidth="8" fill="none" className="arm-left"/>
            <path d="M 600 480 Q 700 520 750 580" stroke="#333" strokeWidth="8" fill="none" className="arm-right"/>
          </g>

          {/* Legs */}
          <line x1="600" y1="580" x2="570" y2="650" stroke="#333" strokeWidth="8"/>
          <line x1="600" y1="580" x2="630" y2="650" stroke="#333" strokeWidth="8"/>
        </g>

        {/* Desktop Monitor - IN FRONT of person */}
        <g className="monitor">
          {/* Monitor stand */}
          <rect x="550" y="530" width="100" height="80" fill="#5a5a5a" rx="5"/>
          <rect x="520" y="610" width="160" height="10" fill="#5a5a5a" rx="5"/>

          {/* Monitor screen */}
          <rect x="300" y="150" width="600" height="400" fill="#2d2d2d" stroke="#666" strokeWidth="8" rx="10"/>
          <rect x="320" y="170" width="560" height="360" fill="#1a1a1a" rx="5"/>

          {/* Screen content - Contact form simulation */}
          <g className="screen-content">
            {/* Document icons on screen - repositioned */}
            <g className="documents">
              <rect x="380" y="250" width="90" height="110" fill="#e8e4dc" stroke="#333" strokeWidth="2" rx="3"/>
              <rect x="385" y="315" width="35" height="35" fill="#333"/>
              <circle cx="393" cy="265" r="5" fill="#d97757" className={isInputting ? 'pulse' : ''}/>

              <rect x="500" y="240" width="90" height="110" fill="#e8e4dc" stroke="#333" strokeWidth="2" rx="3"/>
              <rect x="505" y="305" width="35" height="35" fill="#333"/>
              <circle cx="513" cy="255" r="5" fill="#d97757" className={isInputting ? 'pulse' : ''}/>

              <rect x="620" y="255" width="90" height="110" fill="#e8e4dc" stroke="#333" strokeWidth="2" rx="3"/>
              <rect x="625" y="320" width="35" height="35" fill="#333"/>
              <circle cx="633" cy="270" r="5" fill="#d97757" className={isInputting ? 'pulse' : ''}/>

              <rect x="420" y="380" width="70" height="50" fill="#e8e4dc" stroke="#333" strokeWidth="2" rx="2"/>
              <rect x="560" y="390" width="70" height="50" fill="#e8e4dc" stroke="#333" strokeWidth="2" rx="2"/>

              <rect x="740" y="260" width="70" height="50" fill="#e8e4dc" stroke="#333" strokeWidth="2" rx="2"/>
            </g>
          </g>
        </g>

        {/* Keyboard - in front */}
        <rect x="450" y="620" width="300" height="60" fill="#5a5a5a" stroke="#666" strokeWidth="2" rx="5"/>
        {/* Keyboard keys */}
        <g className="keyboard-keys">
          <rect x="465" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="485" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="505" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="525" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="545" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="565" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="585" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="605" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="625" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="645" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="665" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="685" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="705" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
          <rect x="725" y="635" width="15" height="12" fill="#3a3a3a" rx="2"/>
        </g>

        {/* Coffee cup */}
        <g className="coffee-cup">
          <ellipse cx="900" cy="630" rx="30" ry="8" fill="#8b7355"/>
          <rect x="870" y="600" width="60" height="30" fill="#d97757" rx="3"/>
          <path d="M 930 605 Q 950 615 930 625" stroke="#c56647" strokeWidth="3" fill="none"/>
          {/* Steam */}
          <path d="M 885 590 Q 880 575 885 565" stroke="#999" strokeWidth="1.5" fill="none" opacity="0.6" className="steam steam-1"/>
          <path d="M 900 585 Q 895 570 900 560" stroke="#999" strokeWidth="1.5" fill="none" opacity="0.6" className="steam steam-2"/>
          <path d="M 915 590 Q 920 575 915 565" stroke="#999" strokeWidth="1.5" fill="none" opacity="0.6" className="steam steam-3"/>
        </g>

        {/* Speech bubble with "INPUTTING..." text and contact icons below */}
        <g className={`speech-bubble ${isInputting ? 'visible' : 'hidden'}`}>
          {/* Main bubble background - rounded rectangle - taller and moved up more */}
          <rect x="50" y="-80" width="550" height="240" fill="#fff" stroke="#d97757" strokeWidth="4" rx="20"/>

          {/* Bubble tail - pointing to monitor */}
          <path d="M 500 150 L 520 190 L 460 160" fill="#fff" stroke="#d97757" strokeWidth="4"/>

          {/* Small text bubble at top for "INPUTTING..." */}
          <rect x="120" y="-55" width="280" height="60" fill="#e8e4dc" stroke="#d97757" strokeWidth="3" rx="30"/>

          {/* Small tail from text bubble pointing to email icon */}
          <path d="M 180 5 L 165 25 L 195 10" fill="#e8e4dc" stroke="#d97757" strokeWidth="3"/>

          {/* Text "INPUTTING..." in the small bubble - orange color */}
          <text x="260" y="-15" fill="#d97757" fontSize="32" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            TYPING
            <tspan className="dots">...</tspan>
          </text>

          {/* Contact icons row - below the text bubble */}
          <g className="contact-icons-row">
            {/* Email icon */}
            <image
              href="/contact/email.png"
              x="130"
              y="40"
              width="70"
              height="70"
              className="contact-icon"
            />

            {/* Phone icon (messenger) */}
            <image
              href="/contact/messenger.png"
              x="270"
              y="40"
              width="70"
              height="70"
              className="contact-icon"
            />

            {/* WhatsApp icon */}
            <image
              href="/contact/whatsapp.png"
              x="410"
              y="40"
              width="70"
              height="70"
              className="contact-icon"
            />
          </g>
        </g>
      </svg>

      <style jsx>{`
        .animated-contact-container {
          width: 100%;
          height: 100%;
          background: #e8e4dc;
          position: relative;
        }

        .contact-illustration {
          display: block;
        }

        /* Speech bubble animations */
        .speech-bubble {
          transition: all 0.3s ease;
        }

        .speech-bubble.hidden {
          opacity: 0;
          transform: scale(0.8);
        }

        .speech-bubble.visible {
          opacity: 1;
          transform: scale(1);
          animation: bounceIn 0.5s ease;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .dots {
          animation: blink 1.4s infinite;
        }

        @keyframes blink {
          0%, 20% { opacity: 0; }
          40% { opacity: 1; }
          60%, 100% { opacity: 1; }
        }

        /* Person animations */
        .person.typing .arm-left {
          animation: typeLeft 0.3s ease-in-out infinite;
        }

        .person.typing .arm-right {
          animation: typeRight 0.3s ease-in-out infinite alternate;
        }

        @keyframes typeLeft {
          0%, 100% {
            d: path("M 600 480 Q 500 520 450 580");
          }
          50% {
            d: path("M 600 480 Q 500 510 445 570");
          }
        }

        @keyframes typeRight {
          0%, 100% {
            d: path("M 600 480 Q 700 520 750 580");
          }
          50% {
            d: path("M 600 480 Q 700 510 755 570");
          }
        }

        .person.idle .arms {
          animation: breathe 3s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        /* Pulse animation for green dots */
        .pulse {
          animation: pulse 1s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            r: 5;
            opacity: 1;
          }
          50% {
            r: 7;
            opacity: 0.6;
          }
        }

        /* Steam animation */
        .steam {
          animation: steam-rise 2s ease-in-out infinite;
        }

        .steam-1 {
          animation-delay: 0s;
        }

        .steam-2 {
          animation-delay: 0.3s;
        }

        .steam-3 {
          animation-delay: 0.6s;
        }

        @keyframes steam-rise {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
