import React from 'react';
import NavButton from './nav_button.jsx';
import QuoteButton from '../quote_button.jsx';
import Company_Logo from '../../assets/images/company_logo.png'

/*const NavigationBar = () => {

    React.useEffect(() => {


    
    });

    return (

        <nav id='navbar' className='navbar bg-yellow-400 flex justify-between fixed w-full z-20'>
            <div className='w-96 flex flex-row justify-center gap-x-4'>
                <span className='flex self-center w-12 p-2 bg-black rounded-md '>
                    <img src={Company_Logo} alt='GWW Temp Image'/>
                </span>
                <span className='flex self-center'>
                    <h1 className='text-2xl'>GWW</h1>
                </span>
            </div>
            <div className='w-full flex flex-row justify-center gap-x-6 p-2'>
                    <NavButton title={"Homepage"} link='/'></NavButton>
                    <NavButton title={"About Us"} link='/about'></NavButton>
                    <NavButton title={"Services"} link='/services'></NavButton>
                    <NavButton title={"Contact"} link='/contact'></NavButton>
            </div>
            <div className='w-96 flex flex-row justify-center'>
                <span className='flex self-center'>
                    <QuoteButton/>
                </span>
            </div>
        </nav>
    );
    
}*/

function NavigationBar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false); // initiate isNavOpen state with false
  
    return (
      <div className="flex items-center justify-between py-4 fixed w-full bg-yellow-400 z-30">
        <div className='w-96 flex flex-row justify-center gap-x-4'>
                <span className='flex self-center w-12 p-2 bg-black rounded-md '>
                    <img src={Company_Logo} alt='GWW Temp Image'/>
                </span>
                <span className='flex self-center'>
                    <h1 className='text-2xl'>GWW</h1>
                </span>
            </div>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-1 w-10 bg-black"></span>
              <span className="block h-1 w-10 bg-black"></span>
              <span className="block h-1 w-10 bg-black"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/">Home</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/about">About Us</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/services">Services</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/contact">Contact</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                    <QuoteButton />
                </li>
              </ul>
            </div>
          </section>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li className='flex self-center'>
                <NavButton title={"Homepage"} link='/'></NavButton>
            </li>
            <li className='flex self-center'>
                <NavButton title={"About Us"} link='/about'></NavButton>
            </li>
            <li className='flex self-center'>
                <NavButton title={"Services"} link='/services'></NavButton>
            </li>
            <li className='flex self-center'>
                <NavButton title={"Contact"} link='/contact'></NavButton>
            </li>
          </ul>
        </nav>
        <style>{`
            .hideMenuNav {
                display: none;
            }
            .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: #eab308;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
        `}</style>
        <div className='w-96 h-fit'>
            <span className='hidden lg:flex'>
                <QuoteButton />
            </span>
        </div>
      </div>
    );
  }  

export default NavigationBar;