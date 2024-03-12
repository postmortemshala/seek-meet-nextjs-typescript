"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import more from "../images/menu-kebab.png";
import mike from "../images/micrphone.png";
import camera from "../images/video-camera.png";
import upload from "../images/upload.png";
import pc from "../images/mobile-pc.png";
import mute from "../images/mute.png";
import cameraoff from "../images/video-off.png";

function Meeting() {
  const [mic, setMic] = useState(false);
  const [cameraa, setCamera] = useState(false);
  const videoRef = useRef(null as any);
  const stream = useRef(new MediaStream());

  const micManager = () => {
    var tracks = stream.current.getAudioTracks();
    tracks.forEach(function (track: any) {
      track.enabled = !mic;
    });
  };
  const videoManager = () => {
    var tracks = stream.current.getVideoTracks();
    tracks.forEach(function (track: any) {
      track.enabled = !cameraa;
    });
    // Flip the video horizontally
    if (videoRef.current) {
      videoRef.current.style.transform = "scaleX(-1)";
    }
  };

  const cameraPermission = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = mediaStream;
      stream.current = mediaStream;
    } catch (error) {
      console.log("err");
    }
  };

  useEffect(() => {
    micManager();
  }, [mic]);
  useEffect(() => {
    videoManager();
  }, [cameraa]);

  useEffect(() => {
    cameraPermission();
  }, []);
  const handleMike = () => {
    setMic(!mic);
  };
  const handleCamera = () => {
    setCamera(!cameraa);
  };

  return (
    <>
      <div className="my-40 flex  justify-evenly items-center">
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="rounded-lg"
            height={600}
            width={600}
          ></video>
          <div
            className={` absolute top-0  w-full text-white flex flex-col ${
              cameraa ? "gap-y-36" : "gap-y-40"
            } rounded-md `}
          >
            <div className="flex justify-between m-2">
              <div>User Name</div>
              <div>
                <Image src={more} height={23} alt=""></Image>
              </div>
            </div>
            <div className="text-center text-2xl">
              {cameraa ? "camera is off" : ""}
            </div>
            <div className="flex justify-center m-2 gap-8">
              <button
                onClick={handleMike}
                className={`rounded-full border-white border-2 ${
                  mic ? "bg-red-600 hover:bg-red-700 " : "hover:bg-slate-500"
                }  p-3`}
              >
                {mic ? (
                  <Image src={mute} height={30} alt=""></Image>
                ) : (
                  <Image src={mike} height={30} alt=""></Image>
                )}
              </button>
              <button
                onClick={handleCamera}
                className={`rounded-full border-white border-2 ${
                  cameraa
                    ? "bg-red-600 hover:bg-red-700 "
                    : "hover:bg-slate-500"
                }  p-3`}
              >
                {cameraa ? (
                  <Image src={cameraoff} height={30} alt=""></Image>
                ) : (
                  <Image src={camera} height={30} alt=""></Image>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center">Ready to join?</h1>
          <p className="text-center m-4 text-sm text-gray-800">
            No one else is here
          </p>
          <div className="flex gap-3">
            <button className="hover:bg-blue-500 bg-blue-600 rounded-3xl px-10  text-white text-sm font-bold">
              Join now
            </button>
            <button className="hover:bg-blue-50 flex gap-2 items-center border-2 rounded-3xl py-3 pl-3 pr-8  text-sm font-bold">
              <Image src={upload} height={30} alt=""></Image>
              <span>Present</span>
            </button>
          </div>
          <p className="text-center my-10 mx-4  text-sm text-gray-800">
            Other joining options
          </p>
          <div className="text-center">
            <button className=" flex items-center justify-around gap-3 hover:bg-blue-50 p-3 rounded-xl text-blue-400">
              <Image src={pc} alt="" height={24}></Image>
              <a href=""> Use Companion Mode</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meeting;
