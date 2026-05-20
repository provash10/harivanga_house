'use client';

import React from 'react';

const FloatingChat = () => {
    const whatsappNumber = '8801XXXXXXXXX';
    const messengerUsername = 'harivangahouse';

    return (
        <div className="fixed bottom-24 right-5 z-50 animate-bounce-slow">

            {/* Wrapper — relative, WhatsApp size অনুযায়ী */}
            <div className="relative w-14 h-14">

                {/* WhatsApp — 100%, base layer */}
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="absolute inset-0 hover:z-20"
                >
                    <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                            <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.69.93.99-3.59-.24-.38A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35z"/>
                        </svg>
                    </div>
                </a>

                {/* Messenger — 75% (w-10 h-10), center এ absolute, top layer */}
                <a
                    href={`https://m.me/${messengerUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on Messenger"
                    className="absolute inset-0 flex items-end justify-center -pb-8 hover:z-20"
                    style={{ zIndex: 10, transform: 'translateY(18px)' }}
                >
                    <div className="w-10 h-10 hover:w-14 hover:h-14 rounded-full bg-[#0084FF] flex items-center justify-center shadow-lg hover:scale-100 transition-all duration-300 ring-2 ring-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
                        </svg>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default FloatingChat;
