import { useState } from "react";
import Link from "./Link/Link";
import {AiOutlineMenuFold, AiOutlineClose} from 'react-icons/ai';

const NewBar = () => {
const  [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
      ];
      

    return (
        <nav className="  p-6">

            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> :     <AiOutlineMenuFold className=""></AiOutlineMenuFold>
                }
        

            </div>
            <ul className={`md:flex absolute gap-7 px-6 duration-1000 md:static
            ${open ? 'top-16' : '-top-60'}
            `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NewBar;