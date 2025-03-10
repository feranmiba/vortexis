import Link from "next/link";
import Image from "next/image";
import web3logo from "@/public/assets/web3logo.svg";
import send from "@/public/assets/send.svg";
import x from "@/public/assets/x.svg";
import { Button } from "../components/ui/Button";
import { Input } from "./ui/Input";

export const Footer = () => {
  return (
    <footer className="bg-[#0099ff] text-[#263238] py-8 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={web3logo}
                alt="Web3Lagos Logo"
                width={24}
                height={24}
              />
              <span className="ml-2 text-xl font-semibold">Web3Lagos</span>
            </div>
            <p className="text-sm">Copyright © 2025 Web3Lagos.</p>
            <p className="text-sm">All rights reserved</p>
            <Link href="/web3bridge" className="">
              <Image src={x} alt="X" width={24} height={24} className="mt-8" />
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hackathons</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hackathons">Browse Hackathons</Link>
              </li>
              <li>
                <Link href="/projects">Explore Projects</Link>
              </li>
              <li>
                <Link href="/host-hackathon">Host A Hackathon</Link>
              </li>
              <li>
                <Link href="/guides">Hackathon Guides</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
            <div className="flex">
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-xl bg-white text-black"
                />
                <Button className="absolute right-0 top-0 h-full bg-white p-2 rounded-xl cursor-pointer">
                  <Image src={send} alt="Send" width={24} height={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
