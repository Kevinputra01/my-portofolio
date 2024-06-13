// import React from 'react'
// import portfolios from '../../data/portfolioData'

// const Modal = ({activeID, setShowModal}) => {
//     const portfolio = portfolios.find(portfolio => portfolio.id===activeID);
//   return (
//     <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
//         <div className='max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2
//          -tranlsate-y-1/2 p-5'>
//             <div>
//                 <figure><img src={portfolio.imgUrl} alt=""></img></figure>
//             </div>

//             <div>
//                 <h2 className='text-2xl text-headingColor font-[700] my-5'>
//                     {portfolio.title}
//                 </h2>
//                 <p className='text-[15px] leading-7 text-smallTextColor'>
//                     {portfolio.description}
//                 </p>

//                 <div className='mt-5 flex items-center gap-3 fles-wrap'>
//                     <h4 className='text-headingColor text-[18px] font-[700]'>Technologies</h4>
//                     {portfolio.technologies.map((item, index)=>(
//                         <span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>{item}</span>
//                     ))}
//                 </div>

//                 <a href={portfolio.siteUrl}><button className='bg-primaryColor text-white font-[500] gap-2 hover:bg-smallTextColor
//                      ease-in duration-300 py-2 px-4 rounded-[8px]'>Live Site</button></a>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Modal