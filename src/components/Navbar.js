import React from "react";

export default function Nav() {
  return (
    <header className="relative py-4 md:py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="logo.png" alt="logo" className="w-1/2" />
          </div>
          <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
            <a
              href="https://web3.storage/docs/how-tos/store/"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              Upload video to IPFS
            </a>
            <a
              href="https://docs.rawrshak.io/tutorials/developer/rawrshak-dapp/upload-data-to-arweave"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              Upload video to Arweave
            </a>
            <a
              href="https://livepeerjs.org/examples/react/dstorage-playback"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              Tutorial
            </a>
            <a
              href="https://github.com/suhailkakar/livepeer-dStorage-playback"
              className="text-base font-regular text-black transition-all duration-200 rounded focus:outline-none font-sans hover:text-opacity-50 "
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
