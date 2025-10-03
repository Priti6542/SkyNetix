// import React from 'react'
// import Clients from '../components/client/Clients'
// import ClientCard from '../components/client/ClientCard'
// import ContactForm from '../components/client/ContactForm'

// const ClientPage = () => {
//   return (
//     <div>
//       <Clients/>
//       <ClientCard/>
//       <ContactForm/>
      
      

//     </div>
//   )
// }

// export default ClientPage


import React from 'react'
import Clients from '../components/client/Clients'
import ClientCard from '../components/client/ClientCard'
import ContactForm from '../components/client/ContactForm'

const ClientPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Clients Section */}
      <section data-speed="1.1" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <Clients />
        </div>
      </section>

      {/* Client Cards / Testimonials */}
      <section data-lag="0.4" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            What Our Clients Say
          </h2>
          <ClientCard />
        </div>
      </section>

      {/* Contact Form */}
      <section data-speed="0.9" className="py-20 bg-gradient-to-r from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default ClientPage
