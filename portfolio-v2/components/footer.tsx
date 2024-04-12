export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-slate-100 text-center text-surface dark:bg-neutral-700 dark:text-white">
            <div className="container px-6 pt-6">
                <div className="mb-6 flex justify-center space-x-2">
                    {/* facebook */}
                    {/* <a
                        href="#!"
                        type="button"
                        className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                    >
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                            >
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </span>
                    </a> */}
                    {/* x */}
                    <a
                        href="https://x.com/SafwanRija"
                        target="_blank"
                        rel="noopener"
                        type="button"
                        className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                    >
                        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                            >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </span>
                    </a>
                    {/* Google */}
                    {/* <a
                        href="#!"
                        type="button"
                        className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                    >
                        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 488 512"
                            >
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </span>
                    </a> */}
                    {/* instagram */}
                    <a
                        href="#!"
                        type="button"
                        className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                    >
                        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                            >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </span>
                    </a>
                    <a
                        href="#"
                        type="button"
                        className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                    >
                        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 32 32"
                            >
                                <path
                                    d="M16.5,0.1c-0.3-0.2-0.7-0.2-0.9,0C11.6,2.2,9,8.8,9,16.5c0,3.1,0.5,6.2,1.3,8.9c0.1,0.4,0.5,0.7,1,0.7h9.5
	c0.4,0,0.8-0.3,1-0.7c0.9-2.7,1.3-5.7,1.3-8.9C23,8.8,20.4,2.2,16.5,0.1z M19,16c0,1.7-1.3,3-3,3s-3-1.3-3-3v-4c0-1.7,1.3-3,3-3
	s3,1.3,3,3V16z"
                                />
                                <path d="M20.3,28h-8.6L11,30.8c-0.1,0.3,0,0.6,0.2,0.9S11.7,32,12,32h8c0.3,0,0.6-0.1,0.8-0.4s0.3-0.6,0.2-0.9L20.3,28z" />
                                <path
                                    d="M8.4,25.9C7.5,23.1,7,19.8,7,16.5c0,0,0,0,0,0C5,20,4,24.1,4,28.2V29c0,0.4,0.2,0.7,0.6,0.9C4.7,30,4.9,30,5,30
	c0.2,0,0.4-0.1,0.6-0.2L9.1,27C8.8,26.7,8.5,26.3,8.4,25.9z"
                                />
                                <path
                                    d="M25,16.4C25,16.4,25,16.4,25,16.4c0,3.4-0.5,6.7-1.4,9.5c-0.1,0.4-0.4,0.8-0.7,1.1l3.4,2.7c0.2,0.1,0.4,0.2,0.6,0.2
	c0.1,0,0.3,0,0.4-0.1c0.3-0.2,0.6-0.5,0.6-0.9v-0.8C28,24.1,27,20,25,16.4z"
                                />
                            </svg>
                        </span>
                    </a>
                    {/* linkedin */}
                    <a
                        href="https://www.linkedin.com/in/safwan-r-chowdhury/"
                        target="_blank"
                        rel="noopener"
                        type="button"
                        className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                    >
                        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                            >
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </span>
                    </a>
                    {/* github */}
                    <a
                        href="https://github.com/SafwanChowdhury"
                        target="_blank"
                        rel="noopener"
                        type="button"
                        className="rounded-full bg-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                    >
                        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 496 512"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="mb-6">
                    <a
                        href="https://safwan-chowdhury-portfolio-website-v1.vercel.app"
                        target="_blank"
                        rel="noopener"
                        className="hover:underline cursor-pointer dark:text-invert"
                    >
                        Visit Portfolio V1
                    </a>
                    <a
                        href="./CV_Public.pdf"
                        download="Safwan_Chowdhury_CV"
                        className="ml-20 hover:underline cursor-pointer dark:text-invert"
                    >
                        Download My CV
                    </a>
                </div>
            </div>

            <div className="w-full bg-black/5 p-4 text-center">
                © 2024 Copyright:
                <a className="pl-2 font-semibold" href="#">
                    Safwan R. Chowdhury
                </a>
            </div>
        </footer>
    );
}
