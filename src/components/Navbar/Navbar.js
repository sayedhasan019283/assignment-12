import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = e => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }

    return (
        <div className='bg-primary'>
            <div class="navbar lg:w-4/5 w-[90%] mx-auto ">
                <div class="navbar-start lg:w-1/5">

                    <a href='\' class="btn text-white normal-case text-xl" >Parts Perches</a>

                </div>

                <div class="navbar-end lg:w-[80%]">
                    <div className='hidden lg:flex'>
                        <ul class="flex items-center text-white text-md">
                            <li className='mr-7'><Link to='/'>Home</Link></li>

                            {
                                user && <li className='mr-7'><Link to='dashboard'>Dashboard</Link></li>
                            }
                            <li className='mr-7'><Link to='blogs'>Blogs</Link></li>
                            <li className='mr-7'><Link to='my-portfolio'>Portfolio</Link></li>

                            {
                                user && <li className='mr-7'><span> {user?.displayName}</span></li>
                            }

                            {
                                user ? <li className='mr-7'><button style={{}} onClick={logOut} className='btn btn-accent border-0' >Sign Out</button></li> : <li><Link to='login'>Login</Link></li>
                            }


                        </ul>
                    </div>
                    <div class="dropdown dropdown-end">
                        <div>
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>

                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                {
                                    user && <li><Link to='dashboard'>Dashboard</Link></li>
                                }
                                <li><Link to='blogs'>Blogs</Link></li>
                                <li><Link to='my-portfolio'>Portfolio</Link></li>

                                {
                                    user && <li><button className='btn btn-ghost'>{user?.displayName}</button></li>
                                }

                                {
                                    user ? <li><button onClick={logOut} className='skybtn' >Sign Out</button></li> : <li><Link to='login'>Login</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;