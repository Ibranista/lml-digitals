import groupPeople from '@/public/groupPeople.png';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

function ContentThree() {
   return (
      <div className="mx-6 md:mx-20 2xl:mx-44 my-14 flex flex-col items-center gap-14">
         <h1 className="text-3xl md:text-4xl text-center font-extrabold text-black max-w-4xl">
            We specialize in building{' '}
            <span className="text-red-500">brands</span> digitally, creating
            <span className="text-red-500"> impactful</span> experiences
         </h1>

         <div className="flex flex-col lg:flex-row items-center gap-10 w-full bg-black text-white rounded-xl p-8 md:p-12 shadow-xl">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
               <Image
                  src={groupPeople}
                  width={600}
                  height={600}
                  alt="group_people"
                  loading="lazy"
                  className="object-cover rounded-lg hover:scale-105 transition-transform duration-300 hidden md:block"
               />
            </div>

            <div className="flex flex-col gap-8 w-full lg:w-1/2 justify-center">
               <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                  Elevating Brands through Innovative Digital Strategies
               </h2>
               <p className="leading-relaxed text-sm md:text-base">
                  We&apos;re dedicated to elevating brands through a unique blend of
                  creativity and performance. From enhancing social engagement and
                  maximizing paid media effectiveness to creating compelling influencer
                  campaigns, our strategies are tailored to amplify your brand&apos;s
                  impact, driven by deep insights and strategic foresight.
               </p>

               <Link href="/services">
                  <div className="flex items-center gap-3">
                     <Button className="h-11 w-44 md:w-56 bg-red-500 text-white font-semibold transition-all duration-300 hover:bg-red-600 rounded-md">
                        See Our Services
                     </Button>
                     <CircleArrowRight
                        size={28}
                        className="text-red-500 transition-transform duration-300 hover:translate-x-2"
                     />
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default ContentThree;