import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Nav() {
  return (
    <header className="relative py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="hover:cursor-pointer">
              <Image
                src={"/logo.png"}
                alt="Livepeer Logo"
                width={120}
                height={70}
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
            <Link
              href="https://web3.storage/docs/how-tos/store/"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              Upload video to IPFS
            </Link>
            <Link
              href="https://docs.rawrshak.io/tutorials/developer/rawrshak-dapp/upload-data-to-arweave"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              Upload video to Arweave
            </Link>
            <Link
              href="https://livepeerjs.org/examples/react/dstorage-playback"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              Tutorial
            </Link>
            <Link
              href="https://github.com/suhailkakar/livepeer-dStorage-playback"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              GitHub Repo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
