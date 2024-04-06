export default function Navbar() {
    return (
        <nav className="flex items-center p-3 sm:pt-6 lg:p-10 w-full bg-black dark:bg-white sm:bg-transparent sm:dark:bg-transparent text-slate-200 sm:text-black">
            <h1 className="text-md sm:text-2xl font-medium tracking-widest pl-3 sm:pl-10 cursor-pointer justify-self-start shrink-0">
                SRC
            </h1>
            <ul className="text-lg gap-6 justify-center items-center w-full hidden sm:flex pr-10">
                <li className="hover:underline cursor-pointer">About Me</li>
                <li className="hover:underline cursor-pointer">Tools</li>
                <li className="hover:underline cursor-pointer">Projects</li>
                <li className="hover:underline cursor-pointer">Photography</li>
            </ul>
            <div className="pl-10 hidden sm:flex"></div>
        </nav>
    );
}
