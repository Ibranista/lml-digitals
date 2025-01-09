'use client';
import CollapsibleBanner from '@/components/Banner';
import { CoolMode } from '@/components/magicui/cool-mode';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/public/logo.png';
import menu from '@/public/menu.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const NavLink = [
    { id: 1, title: 'Our Services', link: '/services' },
    { id: 2, title: 'About Us', link: '/about' },
    { id: 3, title: 'Our Team', link: '/team' },
  ];
  return (
    <>
      <CollapsibleBanner type={true} />
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:px-10 xl:px-14 2xl:px-48 bg-gray-50 py-4 rounded-md shadow-md">
        <Link href={'/'}>
          <Image
            src={logo}
            width={80}
            height={80}
            alt="logo"
            loading="lazy"
            className="hover:scale-125 hover:delay-75 hover:duration-150 transition-all"
          />
        </Link>
        <ul className="hidden lg:flex lg:items-center lg:justify-evenly lg:w-1/2 xl:w-1/3">
          {NavLink.map((nav) => (
            <Link href={nav.link} key={nav.id}>
              <li className="underline-animation font-semibold text-gray-700 transition-colors hover:text-red-500">
                {nav.title}
              </li>
            </Link>
          ))}
          <CoolMode>
            <Link href={'/contact'}>
              <Button className="h-11 w-36 transition-all bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
                Get in Touch
              </Button>
            </Link>
          </CoolMode>
        </ul>
      </div>
      <MediumSizeNavBar NavLinks={NavLink} />
      <MobileSizeNavBar NavLinks={NavLink} />
    </>
  );
}

type NavLink = {
  id: number;
  title: string;
  link: string;
};

type MobileSizeProps = {
  NavLinks: NavLink[];
};

function MobileSizeNavBar({ NavLinks }: MobileSizeProps) {
  return (
    <>
      <div className="flex items-center justify-between px-4 sm:hidden lg:hidden bg-gray-50 py-3 rounded-md shadow-md mt-4">
        <Link href={'/'}>
          <Image
            src={logo}
            width={70}
            height={70}
            alt="logo"
            className="hover:scale-125 hover:delay-75 hover:duration-150 transition-all"
          />
        </Link>
        <Sheet>
          <SheetTrigger>
            <Image
              src={menu}
              width={30}
              height={30}
              alt="menu_icon"
              className="hover:scale-110 hover:delay-75 hover:duration-150 transition-all"
            />
          </SheetTrigger>
          <SheetContent side={'top'} className="space-y-4 bg-gray-100 p-6">
            <div className="flex flex-col gap-8 items-center">
              <Image
                src={logo}
                width={60}
                height={60}
                alt="logo"
                className="hover:scale-125 hover:delay-75 hover:duration-150 transition-all"
              />
              <ul className="flex flex-col items-center w-full space-y-4">
                {NavLinks.map((nav) => (
                  <Link href={nav.link} key={nav.id}>
                    <li className="underline-animation font-semibold text-gray-700 transition-colors hover:text-red-500">
                      {nav.title}
                    </li>
                  </Link>
                ))}
              </ul>
              <CoolMode>
                <Button className="h-11 w-36 transition-all bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
                  Get in Touch
                </Button>
              </CoolMode>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function MediumSizeNavBar({ NavLinks }: MobileSizeProps) {
  return (
    <>
      <div className="hidden sm:flex sm:items-center sm:justify-between sm:px-8 mt-10 lg:hidden bg-gray-50 py-3 rounded-md shadow-md">
        <Link href={'/'}>
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            className="hover:scale-125 hover:delay-75 hover:duration-150 transition-all"
          />
        </Link>
        <Sheet>
          <SheetTrigger>
            <Image
              src={menu}
              width={30}
              height={30}
              alt="menu_icon"
              className="hover:scale-110 hover:delay-75 hover:duration-150 transition-all"
            />
          </SheetTrigger>
          <SheetContent side={'top'} className="space-y-4 bg-gray-100 p-6">
            <div className="flex flex-col gap-8 items-center">
              <Image
                src={logo}
                width={60}
                height={60}
                alt="logo"
                className="hover:scale-125 hover:delay-75 hover:duration-150 transition-all"
              />
              <ul className="flex flex-col items-center w-full space-y-4">
                {NavLinks.map((nav) => (
                  <Link href={nav.link} key={nav.id}>
                    <li className="underline-animation font-semibold text-gray-700 transition-colors hover:text-red-500">
                      {nav.title}
                    </li>
                  </Link>
                ))}
              </ul>
              <CoolMode>
                <Button className="h-11 w-36 transition-all bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
                  Get in Touch
                </Button>
              </CoolMode>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default Navbar;
