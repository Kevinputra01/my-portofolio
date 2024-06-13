import React, { useRef } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import resume from '../../images/resume.pdf';  --The pdf format is not loading
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudfare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Header = () => { 
  // const headerRef = useRef(null); -  this is for sticky navbar

  // const stickyHeaderFunc =()=>{
  //   window.addEventListener('scroll', () =>{
  //     if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
  //       headerRef.current.classList.add('sticky__header');
  //     }
  //     else{
  //       headerRef.current.classList.remove('stciky__header');
  //     }
  //   })
  // }

  // useEffect(()=>{
  //   stickyHeaderFunc()

  //   return window.removeEventListener('scroll', stickyHeaderFunc)
  // },[])
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    
    <header /*ref={headerRef}* this is for sticky navbar*/ className="w-full h-[80px] bg-[#444] leading-[80px] flex items-center">
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo start */}
          <div className='flex itmes-center gap-[10px]'>
            <span className='w-[35px] h-[35px] mt-2 bg-white text-black text-[18px] font-[500]
            rounded-full flex items-center justify-center'><b>K</b></span>

            <div className='leading-[20px]'>
              <h2 className='text-xl text-white font-[700]'>Kevin Fernanda Putra</h2>
              <p className='text-white text-[14px] mb-1 font-[500]'>Portfolio</p>
            </div>
          </div>
          {/* logo end */}

          {/* menu start */}
          <div className='menu'ref={menuRef} onClick={toggleMenu}>
            <ul className='flex  items-center gap-10'>
              <li className='text-white font-[600]'><a href='#about'>About</a></li>
              <li className='text-white font-[600]'><a href='#services'>Services</a></li>
              <li className='text-white font-[600]'><a href='#portfolio'>Portfolio</a></li>
              <li className='text-white font-[600]'><a href='#contact'>Contact</a></li>
            </ul>
          </div>
          {/* menu end */}

          {/* menu-right */}
          <div className='flex items-center gap-4'>
            <a><button className=' md:flex md:items-center mx-4 my-6 md:my-0 flex items-center gap-2 text-white font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
            hover:font-[500] ease-in duration-200'><i class="ri-mail-download-line"></i>Resume</button></a>
            <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
