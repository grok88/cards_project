import React, {useEffect, useRef, useState} from 'react';
import { Button } from 'antd';

type VideoPropsType = {
    url: string;
}

export const Video: React.FC<VideoPropsType> = ({url}) => {


    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [controls, setControls] = useState<boolean>(false);
    // ..время проигрыванимя
    const [timeDuration, setTimeDuration] = useState();
    const [currentTime, setCurrentTime] = useState<number | null>(null);

    useEffect(() => {
        setInterval(() => {
            setTimeDuration(videoRef && videoRef.current && videoRef.current.duration);
            if (videoRef && videoRef.current && videoRef.current.currentTime === videoRef.current.duration) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
            setCurrentTime(videoRef && videoRef.current && videoRef.current.currentTime);
        }, 300);
    }, []);

    // VideoButtons
    const play = () => videoRef && videoRef.current && videoRef.current.play();
    const pause = () => videoRef && videoRef.current && videoRef.current.pause();
    const stop = () => {
        videoRef && videoRef.current && videoRef.current.pause();
        videoRef && videoRef.current && (videoRef.current.currentTime = 0);
    }
    const volumeUp = () => {
        if (videoRef && videoRef.current && videoRef.current.volume < 0.9) videoRef.current.volume += 0.1;
        else videoRef && videoRef.current && (videoRef.current.currentTime = 1);
    }
    const volumeDown = () => {
        if (videoRef && videoRef.current && videoRef.current.volume > 0.1) videoRef.current.volume -= 0.1;
        else videoRef && videoRef.current && (videoRef.current.currentTime = 0);
    }
    const currentTimeUp = () => {
        if (videoRef && videoRef.current && videoRef.current.currentTime < videoRef.current.duration - 5) videoRef.current.currentTime += 5;
        else videoRef && videoRef.current && (videoRef.current.currentTime = videoRef.current.duration);
    }
    const currentTimeDown = () => {
        if (videoRef && videoRef.current && videoRef.current.currentTime > 5) videoRef.current.currentTime -= 5;
        else videoRef && videoRef.current && (videoRef.current.currentTime = 0);
    }
    const playbackRateUp = () => {
        if (videoRef && videoRef.current && videoRef.current.playbackRate < 100) videoRef.current.playbackRate += 0.1;
        else videoRef && videoRef.current && (videoRef.current.playbackRate = 0);
    }
    const playbackRateDown = () => {
        if (videoRef && videoRef.current && videoRef.current.playbackRate > 0.2) videoRef.current.playbackRate -= 0.1;
        else videoRef && videoRef.current && (videoRef.current.playbackRate = 0.2);
    }
    const width = () => {
        videoRef && videoRef.current && (videoRef.current.width = 500);
    }
    const makeFullScreen = () => {
        if (videoRef && videoRef.current) {
            if (videoRef && videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else {
                alert('You browser is not support this API');
            }
        }
    }

    return <div>
        <h2>Video</h2>
        <label>
            controls
            <input type="checkbox" checked={controls} onChange={e => {
                setControls(e.currentTarget.checked)
            }}/>
        </label>
        <div>
            <video src={url}
                   controls={controls}
                   width={300}
                   ref={videoRef}
            ></video>
        </div>
        <div>
            <Button onClick={play}>play</Button>
            <Button onClick={pause}>pause</Button>
            <Button onClick={stop}>stop</Button>
            <Button onClick={volumeUp}>volumeUp</Button>
            <Button onClick={volumeDown}>volumeDown</Button>
            <Button onClick={currentTimeUp}>currentTimeUp</Button>
            <Button onClick={currentTimeDown}>currentTimeDown</Button>
            <Button onClick={playbackRateUp}>playbackRateUp</Button>
            <Button onClick={playbackRateDown}>playbackRateDown</Button>
            <Button onClick={width}>width</Button>
            <Button onClick={makeFullScreen}>makeFullScreen</Button>
        </div>
        <div>
            <div><b>timeDuration: </b>{timeDuration}</div>
            <div><b>currentTime: </b>{currentTime}</div>
        </div>
        <div>
            <h2>Iframe</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AXRwGNBklKE" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </div>
    </div>
}