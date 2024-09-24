import React from 'react';

const Contact = () => {
  return (
    <div className='pt-16 p-4 md:p-8 lg:p-16 text-dgreen'>
      <div className='max-w-4xl mx-auto'>
        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Contact Us</h2>
          <p className='text-base md:text-lg lg:text-xl mb-4'>
            We would love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us using the contact details below or fill out the contact form. Our team is dedicated to providing support and assistance.
          </p>
          <p className='text-base md:text-lg lg:text-xl mb-4'>
            Your input is invaluable in helping us improve and expand our platform. Whether you're seeking clarification on Quranic content, have suggestions for new features, or just want to share your thoughts, we are here to listen and assist.
          </p>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Contact Information</h2>
          <div className='mb-4'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-2'>Email</h3>
            <p className='text-base md:text-lg lg:text-xl'>
              You can email us at: <a href='mailto:llameessss@gmail.com' className='text-blue-400 hover:underline'>llameessss@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-2'>Phone</h3>
            <p className='text-base md:text-lg lg:text-xl'>
              Call us at: <a href='tel:+918086026851' className='text-blue-400 hover:underline'>+91 8086026851</a>
            </p>
          </div>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Contact Form</h2>
          <form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-base md:text-lg lg:text-xl mb-2'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-base md:text-lg lg:text-xl mb-2'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-base md:text-lg lg:text-xl mb-2'>Message</label>
              <textarea
                id='message'
                name='message'
                rows='4'
                className='w-full p-2 border border-gray-300 rounded'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-dgreen text-white py-2 px-4 rounded hover:bg-green-600'
            >
              Send Message
            </button>
          </form>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Follow Us</h2>
          <p className='text-base md:text-lg lg:text-xl mb-4'>
            Stay updated with our latest news and updates by following us on our social media channels.
          </p>
          <ul className='flex flex-wrap gap-4'>
            <li>
              <a href='https://facebook.com' className='text-blue-600 hover:underline'>Facebook</a>
            </li>
            <li>
              <a href='https://twitter.com' className='text-blue-400 hover:underline'>Twitter</a>
            </li>
            <li>
              <a href='https://www.instagram.com/llameessss/' className='text-pink-500 hover:underline'>Instagram</a>
            </li>
            <li>
              <a href='https://linkedin.com' className='text-blue-700 hover:underline'>LinkedIn</a>
            </li>
          </ul>
        </section>

        <section className='mb-8 px-4'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Get In Touch with Quranic Knowledge</h2>
          <p className='text-base md:text-lg lg:text-xl mb-4'>
            Our platform is dedicated to enhancing your understanding of the Quran. If you have any queries related to Quranic studies, require assistance with the website, or wish to contribute to our mission, please reach out to us. We value every interaction and are here to support your journey in exploring and reflecting on the Quran.
          </p>
          <p className='text-base md:text-lg lg:text-xl mb-4'>
            For any specific inquiries or support related to Quranic content, please don’t hesitate to get in touch. Your feedback and questions help us to continually improve and serve our community better.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
