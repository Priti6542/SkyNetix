// import React from 'react';

// const MainHero = () => {
//   return (
//     <div>
//       <section className="flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-image-grain.png')] bg-cover bg-center">
//         <div className="flex flex-wrap items-center justify-center p-1.5 mt-24 md:mt-28 rounded-full border border-slate-400 text-xs">
//           {/* <div className="flex items-center">
//             <img
//               className="size-7 rounded-full border-3 border-white"
//               src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
//               alt="userImage1"
//             />
//             <img
//               className="size-7 rounded-full border-3 border-white -translate-x-2"
//               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
//               alt="userImage2"
//             />
//             <img
//               className="size-7 rounded-full border-3 border-white -translate-x-4"
//               src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
//               alt="userImage3"
//             />
//           </div> */}
//           {/* <p className="-translate-x-2">Join community of 1m+ founders </p> */}
//         </div>

//         <h1 className="font-berkshire text-[45px]/[52px] md:text-6xl/[65px] mt-6 max-w-4xl">
//          Empowering Businesses Through Innovative Technology
//         </h1>
//         <p className="text-base mt-2 max-w-xl">
//           At Devcons Software Solution, we believe in transforming ideas into powerful digital solutions.
// Our team of skilled professionals delivers innovative web, mobile, and enterprise applications tailored to your business needs.
// We combine creativity, technology, and strategy to drive growth and efficiency.
// With a focus on quality, security, and scalability, we help businesses thrive in a competitive digital landscape.
// Partner with us to experience technology that empowers, connects, and inspires.
//         </p>
//         <p className="text-base mt-3 md:mt-7 max-w-xl">
//           Secure your spot early and unlock our limited-time founding rate.
//         </p>

//         {/* <form className="flex items-center mt-8 max-w-lg h-16 w-full rounded-full border border-slate-50"> */}
//           {/* <input
//             type="email"
//             placeholder="Enter email address"
//             className="w-full h-full outline-none bg-transparent pl-6 pr-2 text-white placeholder:text-slate-300 rounded-full"
//           /> */}
//           {/* <button
//             aria-label="Early access"
//             className="bg-white text-slate-800 hover:bg-gray-300 text-nowrap px-8 md:px-10 h-12 mr-2 rounded-full font-medium transition"
//           >
//             Early access
//           </button> */}
//         {/* </form> */}
//       </section>
//     </div>
//   );
// };

// export default MainHero;


import React from 'react';
import { motion } from 'framer-motion';

const MainHero = () => {
  return (
    <div>
      <section className="relative flex flex-col items-center pb-48 text-center text-white max-md:px-2 
        bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-image-grain.png')] 
        bg-cover bg-center">
        
        {/* Glassy container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="backdrop-blur-md bg-white/20 rounded-3xl p-8 md:p-12 mt-24 md:mt-28 max-w-4xl"
        >
          <h1 className="font-berkshire text-[45px]/[52px] md:text-6xl/[65px] font-semibold">
            Empowering Businesses Through Innovative Technology
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }}
            className="text-base mt-6 max-w-xl mx-auto"
          >
            At Devcons Software Solution, we believe in transforming ideas into powerful digital solutions.
            Our team of skilled professionals delivers innovative web, mobile, and enterprise applications tailored to your business needs.
            We combine creativity, technology, and strategy to drive growth and efficiency.
            With a focus on quality, security, and scalability, we help businesses thrive in a competitive digital landscape.
            Partner with us to experience technology that empowers, connects, and inspires.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }}
            className="text-base mt-4 md:mt-7 max-w-xl mx-auto font-medium"
          >
            Secure your spot early and unlock our limited-time founding rate.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default MainHero;
