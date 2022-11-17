import { Player } from "@livepeer/react";
import { parseArweaveTxId, parseCid } from "livepeer/media";
import { useMemo, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);

  return (
    <div className="flex flex-col justify-center items-center h-screen font-poppins">
      <h1 className="text-5xl font-bold pb-2 text-slate-900 text-transparent bg-clip-text bg-gradient-to-r from-[#00A660] to-[#28CE88] text-center lg:text-7xl">
        Livepeer dStorage Playback
      </h1>
      <h3 className="text-xl mt-4 text-slate-800 w-[90%] text-center lg:w-[70%]">
        An demo that illustrates how Livepeer can be used as a video processing
        and caching layer on top of content available on IPFS or the Arweave
        gateway for optimized video playback.
      </h3>

      <input
        type="text"
        placeholder="ipfs://... or ar://"
        className="mt-8 px-4 py-2 rounded-lg border-2 border-slate-100 focus:outline-none  w-[80%] bg-slate-100 lg:w-[40%]"
        onChange={(e) => setUrl(e.target.value)}
      />

      {url && !idParsed && (
        <p className="mt-4 text-red-500">
          Provided value is not a valid identifier.
        </p>
      )}
      {idParsed && (
        <div className="mt-8 w-[90%] lg:w-[40%]">
          <Player title={idParsed.id} src={url} autoPlay muted autoUrlUpload />
        </div>
      )}
    </div>
  );
}
