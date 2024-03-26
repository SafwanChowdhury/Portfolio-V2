export default function Navbar() {
    return (
        <nav className="grid grid-cols-3 items-center p-10 w-full">
            <h1 className="text-2xl font-medium tracking-widest pl-10 cursor-pointer justify-self-start">SRC</h1>
            <ul className="text-lg col-start-2 col-end-3 flex gap-6 justify-center">
                <li className="hover:underline cursor-pointer">About Me</li>
                <li className="hover:underline cursor-pointer">Projects</li>
                <li className="hover:underline cursor-pointer">Photography</li>
            </ul>
            <div className="justify-self-end invisible">Placeholder</div> {/* Invisible placeholder for right alignment */}
        </nav>
    );
}