import { CircleArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import groupPeople from '@/public/groupPeople.png';
import WordPullUp from './magicui/word-pull-up';
import SlightFlip from '@/components/magicui/flip-text';
import Link from 'next/link';

function ContentSix() {
   return (
      <div className="mx-3 md:mx-10 lg:mx-20 2xl:mx-44 mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
         <div
            className="
          relative 
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          rounded-3xl 
          overflow-hidden 
          bg-gradient-to-r 
          from-red-500 
          to-black 
          p-8 
          md:p-12 
          lg:p-16 
          gap-6 
          shadow-xl
        "
         >
            {/* Text & Button Section */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
               <WordPullUp
                  className="
              text-3xl 
              md:text-4xl 
              lg:text-5xl 
              2xl:text-6xl 
              font-extrabold 
              leading-tight 
              text-white
            "
                  words="Don't hesitate"
               />

               <div className="flex items-center gap-3">
                  <Link href="/#">
                     <div className="flex items-center gap-3 group">
                        <Button
                           className="
                    h-11 
                    w-48 
                    md:w-56 
                    transition 
                    duration-300 
                    bg-white 
                    text-red-600 
                    font-semibold 
                    rounded-md 
                    hover:text-white 
                    hover:bg-black
                  "
                        >
                           <span className="text-lg">Let&apos;s chat</span>
                        </Button>
                        <CircleArrowRight
                           size={32}
                           className="
                    text-white 
                    group-hover:translate-x-2 
                    transition-transform 
                    duration-300
                  "
                        />
                     </div>
                  </Link>
               </div>
            </div>

            {/* Image Section */}
            <div className="hidden lg:block lg:w-1/2 text-right">
               <Image
                  src={groupPeople}
                  width={1200}
                  height={500}
                  alt="group_people"
                  className="
              rounded-2xl
              object-cover
              w-full
              h-full
              max-h-[24rem]
            "
               />
            </div>
         </div>
      </div>
   );
}

export default ContentSix;