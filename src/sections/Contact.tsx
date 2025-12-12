"use client";

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
  { title: 'Email', icon: <IconMail size={18} />, href: 'mailto:example@gmail.com' },
  { title: 'LinkedIn', icon: <IconBrandLinkedin size={18} />, href: '#' },
  { title: 'WhatsApp', icon: <IconBrandWhatsapp size={18} />, href: '#' },
  { title: 'X', icon: <IconBrandX size={18} />, href: '#' },
  { title: 'GitHub', icon: <IconBrandGithub size={18} />, href: '#' },
];

export const ContactSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className='container'>
   
        <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-6">
        
          <div className="flex flex-col justify-center ">
            <h1 className="text-3xl md:text-5xl text-gray-200 leading-tight font-serif">
              Ready to Bring Your <br /> Ideas to Life?
            </h1>

            <p className="mt-4 text-gray-400 max-w-lg">
              If yore looking for innovative solutions or creative collaboration, 
              I&apos;m here to help. Get in touch today, and let&apos;s discuss how we can 
              make your project a reality!
            </p>

            
            <FloatingDock
              items={dockItems}
              floatingClassname='mt-7'
            />
          </div>

          <div className="relative rounded-xl p-6 shadow-lg">
          <div
              className="absolute rounded-xl inset-0 -z-10 opacity-5"
              style={{
                backgroundImage: `url(${backgroundimage.src})`,
              }}
            />
            <h2 className="uppercase font-semibold">Get in Touch</h2>
            <p className="text-sm text-gray-400 mt-1 mb-6 ">
              Have a question, project idea, or just want to connect?
            </p>

            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-300">Your name</label>
                <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-400 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow" placeholder="Tyler" type='text' />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email Address</label>
                <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-400 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow" placeholder="*****@gmail.com" type='email' />
              </div>

              <div>
                <label className="text-sm text-gray-300">Your message</label>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-400 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 mt-4 rounded-md font-sans bg-white/10 border border-white/20 text-gray-200  hover:bg-white/20 flex items-center gap-2"
                >
                  Send it now <SendHorizonal />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


