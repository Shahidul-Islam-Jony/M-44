import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';

const NavBar = () => {

    const [open,setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/dashboard', name: 'Dashboard', id: 5 },
    ];

    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className="text-2xl m-2 md:hidden">
                {
                    open? <AiFillCloseCircle></AiFillCloseCircle> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className={
                `md:flex absolute duration-1000 bg-yellow-300
                ${
                    open? 'top-16':'-top-60'
                }
                 text-black px-4 md:static`
            }>
                {
                    routes.map(route => <Link key={route.id} route={route} open={open}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;