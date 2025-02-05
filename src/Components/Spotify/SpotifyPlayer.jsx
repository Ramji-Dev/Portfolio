import React, { useState, useEffect } from "react";

const SpotifyPlayer = () => {
  const [track, setTrack] = useState(null);

  
  useEffect(() => {
    const url = import.meta.env.VITE_SPOTIFY;
    const fetchTrack = async () => {
      const res = await fetch(`${url}`);
      const parseData = await res.json();
      if (parseData.statusCode === 200) {
        setTrack(parseData.data)
      } else if (parseData.statusCode === 403) {
        setTrack(false);
      }
    }

    fetchTrack();
    const interval = setInterval(fetchTrack, 1000 * 20);

    return () => clearInterval(interval)
  }, [])
 
  return (
    <div className="rounded-full" >
      {track ? (
        <div className="text-black dark:text-white flex items-center border-2 p-2 rounded-full spotify-player">
          <a href={track.link} target="_blank" className="flex justify-around bg-ed-400 gap-5">
            <div className="4xsm:max-w-[27vw] 3xsm:max-w-[24vw] 2xsm:max-w-[21vw] xsm:max-w-[18vw] sm:max-w-[15vw] md:max-w-[12vw] lg:max-w-[9vw] flex items-center justify-start">
              <img src={track.image} alt="Album Cover" className="rounded-full song-art animate-spin-slow" />
            </div>
            <div className="my-auto w-[30vw] sm:w-[26vw] md:w-[18vw] lg:w-[12vw]">
              <h3 className="4xsm:w-[50vw] xsm:w-[58vw] sm:w-full overflow-hidden truncate font-monu track 2xsm:text-[4vw] xsm:text-[3vw] sm:text-[2.6vw] md:text-[1.8vw] lg:text-[1.2vw]" title={track.name}>{track.name}</h3>
              <div className="4xsm:text-[3.6vw] 3xsm:text-[3.2vw] 2xsm:text-[2.8vw] xsm:text-[2.4vw] sm:text-[2vw] md:text-[1.4vw] lg:text-[0.8vw]">
                <p className="4xsm:w-[50vw] xsm:w-[58vw] sm:w-full font-drugReg overflow-hidden truncate">By {track.artist}</p>
                <p className="4xsm:w-[50vw] xsm:w-[58vw] sm:w-full font-drugReg overflow-hidden truncate"><i>{track.album}</i></p>
                <div className="4xsm:w-[28vw] 3xsm:w-[28vw] 2xsm:w-[40vw] xsm:w-[26vw] sm:w-[22vw] md:w-[16vw] lg:w-[8vw] overflow-hidden whitespace-nowrap">
                  <p className="now font-drugLI animate-marquee">Now Playing <span className="text-[1vw] align-middle">●</span> Now Playing <span className="text-[1vw] align-middle">●</span> Now Playing <span className="text-[1vw] align-middle">●</span> Now Playing <span className="text-[1vw] align-middle">●</span> Now Playing <span className="text-[1vw] align-middle">●</span> Now Playing <span className="text-[1vw] align-middle">●</span></p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default SpotifyPlayer;
