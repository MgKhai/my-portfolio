"use client";


import { useState, ChangeEvent, FormEvent } from 'react'; 
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconBrandGithub,
} from '@tabler/icons-react';
import { SendHorizonal } from 'lucide-react';
import { FloatingDock } from '@/components/FloatingDock'; 
import backgroundimage from "../assets/images/pixeldot.jpeg";

const dockItems = [
  { title: 'Email', icon: <IconMail size={18} />, href: 'mailto:khainglwinthantycc@gmail.com' },
  { title: 'LinkedIn', icon: <IconBrandLinkedin size={18} />, href: 'https://www.linkedin.com/in/khaing-lwin-thant-20740a2b6/' },
  { title: 'WhatsApp', icon: <IconBrandWhatsapp size={18} />, href: 'https://wa.me/905053893242' },
  { title: 'X', icon: <IconBrandX size={18} />, href: 'https://twitter.com/khainglwinthant' },
  { title: 'GitHub', icon: <IconBrandGithub size={18} />, href: 'https://github.com/MgKhai' },
];


interface FormData {
    name: string;
    email: string;
    message: string;
}

export const ContactSection = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); 

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setStatus(''); 

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' }); 
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Submission Error:', error);
        setStatus('error');
      } finally {
        setLoading(false);
      }
  };

  return (
    <div id='contact' className="py-16 lg:py-24">
      <div className='container'>
   
        <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-6">
        
          <div className="flex flex-col justify-center ">
            <h1 className="text-3xl md:text-5xl text-gray-200 leading-tight font-serif">
              Ready to Bring Your <br /> Ideas to Life?
            </h1>

            <p className="mt-4 text-gray-400 max-w-lg">
              If you&apos;re looking for innovative solutions or creative collaboration, 
              I&apos;m here to help. Get in touch today, and let&apos;s discuss how we can 
              make your project a reality!
            </p>

            
            <FloatingDock
              items={dockItems}
              floatingClassname='mt-7'
            />
          </div>

          <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6">
          <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{
                backgroundImage: `url(${backgroundimage.src})`,
              }}
            />
            <h2 className="uppercase font-semibold">Get in Touch</h2>
            <p className="text-sm text-gray-400 mt-1 mb-6 ">
              Have a question, project idea, or just want to connect?
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name-input" className="text-sm text-gray-300">Your name</label>
                <input 
                  id="name-input" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-400 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow" 
                  placeholder="Tyler" 
                  type='text' 
                  required
                />
              </div>

              <div>
                <label htmlFor="email-input" className="text-sm text-gray-300">Email Address</label>
                <input 
                  id="email-input" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-400 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow" 
                  placeholder="*****@gmail.com" 
                  type='email' 
                  required
                />
              </div>

              <div>
                <label htmlFor="message-input" className="text-sm text-gray-300">Your message</label>
                <textarea
                  id="message-input"
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your message"
                  rows={4}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-400 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-sm text-emerald-400 text-center">Message sent successfully! I will respond soon.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400 text-center">Failed to send message. Please check your network or try the email link.</p>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 mt-4 rounded-md font-sans bg-white/10 border border-white/20 text-gray-200  hover:bg-white/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send it now'} <SendHorizonal />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}