"use client";
import { Flex } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import unmute from "seek-solution/images/micrphone.png";
import mute from "seek-solution/images/mute.png";
import cameraOn from "seek-solution/images/video-camera.png";
import cameraOff from "seek-solution/images/video-off.png";

function InstantMeeting() {
  const [mic, setMik] = useState(false);
  const handleMic = () => {
    setMik(!mic);
  };

  const [camera, setCamera] = useState(false);
  const handleCamera = () => {
    setCamera(!camera);
  };

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
      track.enabled = !camera;
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
  }, [camera]);

  useEffect(() => {
    cameraPermission();
  }, []);

  return (
    <div>
      <Flex justify="center" className="pt-6 bg-black">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          height={800}
          width={850}
        ></video>
      </Flex>
      <nav className="bg-black">
        <Flex justify="center" gap={40} className="py-4">
          <button
            onClick={handleMic}
            className={`rounded-full border-white border ${
              mic ? "bg-red-600 hover:bg-red-700 " : "hover:bg-slate-500"
            }  p-2`}
          >
            {mic ? (
              <Image src={mute} height={10} width={30} alt=""></Image>
            ) : (
              <Image src={unmute} alt="" height={12} width={30}></Image>
            )}
          </button>
          <button
            onClick={handleCamera}
            className={`rounded-full border-white border ${
              camera ? "bg-red-600 hover:bg-red-700 " : "hover:bg-slate-500"
            }  p-2`}
          >
            {camera ? (
              <Image src={cameraOff} alt="" height={10} width={30}></Image>
            ) : (
              <Image src={cameraOn} alt="" height={10} width={30}></Image>
            )}
          </button>
          <button className="border rounded-full hover:bg-gray-700 border-gray-300 p-2">
            <Image
              src={"/screencast.svg"}
              height={10}
              width={30}
              alt=""
            ></Image>
          </button>
          <button className="border bg-red-600 rounded-full hover:bg-red-700 border-gray-300 p-2">
            <Image src={"/end-call.svg"} alt="" height={10} width={30}></Image>
          </button>
        </Flex>
      </nav>
    </div>
  );
}

export default InstantMeeting;
