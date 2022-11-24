import { Player } from "@livepeer/react";
import { parseArweaveTxId, parseCid } from "livepeer/media";
import { useMemo, useState } from "react";
import Nav from "../components/Navbar";
import videos from "../data/sample-data.json";

export default function Home() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);

  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center h-screen font-poppins">
        <h1 className="text-5xl font-bold pb-2 -mt-32 text-slate-900 text-transparent bg-clip-text bg-gradient-to-r from-[#00A660] to-[#28CE88] text-center lg:text-7xl">
          Livepeer IPFS/Arweave Video Playback
        </h1>
        <h3 className="text-xl mt-4 text-slate-800 w-[90%] text-center lg:w-[70%]">
          An demo that illustrates how Livepeer can be used as a video
          processing and caching layer on top of content available on IPFS or
          the Arweave gateway for optimized video playback.
        </h3>

        <input
          type="text"
          placeholder="ipfs://... or ar://"
          value={url}
          className="mt-8 px-4 py-2 rounded-lg border-2 border-slate-100 focus:outline-none  w-[80%] bg-slate-100 lg:w-[40%]"
          onChange={(e) => {
            setUrl(e.target.value);
            setTitle(null);
          }}
        />

        <div className="mt-8 w-[80%] lg:w-[40%] flex flex-col lg:flex-row justify-between items-center">
          <p className="text-md font-semibold text-slate-800 ml-4">
            No video? <br className="hidden lg:block" />
            Try one of these:
          </p>
          <div className="flex flex-row ">
            {videos.map((video, index) => (
              <img
                key={video.id}
                onClick={() => {
                  setTitle(video.title);
                  setUrl(video.url);
                }}
                className="w-18 h-16 ml-4 rounded-md  border-gray-100 hover:-translate-y-1 hover:shadow-lg cursor-pointer transition-all duration-200 mt-4 lg:mt-0"
                src={video.thumbnail}
              />
            ))}
          </div>
        </div>

        {url && !idParsed && (
          <p className="mt-4 text-red-500">
            Provided value is not a valid identifier.
          </p>
        )}
        {idParsed && (
          <div className="mt-8 w-[90%] lg:w-[40%]">
            <Player
              title={title || idParsed.id}
              src={url}
              autoPlay
              muted
              showPipButton
              autoUrlUpload
            />
          </div>
        )}
      </div>
    </div>
  );
}
