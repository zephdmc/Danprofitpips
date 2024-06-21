import React from 'react';

function Topnav() {
    return (
        <>
            {/* // < !--Top Bar Section-- > */}
            <div class="bg-black text-white px-6 py-4">
                <div class=" mx-auto flex flex-col md:flex-row px-6 md:px-[10%] justify-between items-center">
                    {/* <!-- Contact Information --> */}
                    <div class="flex flex-col md:flex-row items-center">
                        <a href="tel:+2347067420349" class="flex items-center mr-4">
                            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1a2 2 0 002-2V5a2 2 0 012-2h6a2 2 0 012 2v3a2 2 0 002 2h1a2 2 0 002-2V5a2 2 0 012 2v2a2 2 0 002 2h1"></path>
                            </svg>
                            +2347067420349
                        </a>
                        <a href="mailto:uwadanielc@gmail.com" class="flex items-center">
                            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a3 3 0 003.22 0L21 8"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8"></path>
                            </svg>
                            uwadanielc@gmail.com
                        </a>
                    </div>
                    {/* <!-- Social Media Icons --> */}
                    <div class="flex mt-[4px] md:mt-0">
                        <a href='https://www.facebook.com/profile.php?id=61554208622818https://www.facebook.com/profile.php?id=61554208622818'  class="flex items-center mr-4"  >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692V11.04h3.128V8.41c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.464.099 2.795.144v3.243h-1.918c-1.505 0-1.796.715-1.796 1.763v2.312h3.591l-.468 3.666h-3.123V24h6.116c.731 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
                            </svg>
                        </a>
                        <a href="https://x.com/capitalmoney007"  class="flex items-center mr-4">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.013-.608 1.793-1.574 2.163-2.723-.949.564-2.002.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.717 0-4.923 2.206-4.923 4.922 0 .386.044.762.127 1.124-4.092-.205-7.719-2.164-10.141-5.144-.425.728-.667 1.572-.667 2.475 0 1.709.87 3.213 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.062c0 2.386 1.697 4.374 3.946 4.828-.413.112-.849.171-1.296.171-.314 0-.622-.03-.921-.086.623 1.943 2.432 3.355 4.576 3.395-1.676 1.312-3.786 2.096-6.075 2.096-.395 0-.785-.023-1.17-.068 2.166 1.392 4.74 2.205 7.513 2.205 9.025 0 13.967-7.478 13.967-13.974 0-.21 0-.423-.016-.634.961-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/uwa_daniel" class="flex items-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.23 0H1.77C.792 0 0 .775 0 1.73v20.54C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.27V1.73C24 .775 23.208 0 22.23 0zM7.12 20.205H3.615V9H7.12v11.205zM5.367 7.62c-1.13 0-2.048-.92-2.048-2.05 0-1.128.92-2.047 2.048-2.047 1.127 0 2.048.92 2.048 2.048s-.92 2.05-2.048 2.05zm14.838 12.585H17.74v-5.415c0-1.292-.025-2.955-1.796-2.955-1.8 0-2.077 1.404-2.077 2.854v5.516H9.73V9h3.335v1.53h.048c.465-.877 1.604-1.796 3.303-1.796 3.535 0 4.184 2.328 4.184 5.353v6.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topnav;