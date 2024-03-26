"use client";
import { Button, Flex, NotificationArgsProps, notification } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import unmute from "seek-solution/images/micrphone.png";
import mute from "seek-solution/images/mute.png";
import cameraOn from "seek-solution/images/video-camera.png";
import cameraOff from "seek-solution/images/video-off.png";

type NotificationPlacement = NotificationArgsProps["placement"];
const [api, contextHolder] = notification.useNotification();
function InstantMeeting() {
  {
    contextHolder;
  }
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
    });
  };

  const notification = () => {
    return (
      <>
        {setInterval(() => {
          <Button type="primary" onClick={() => openNotification("topRight")}>
            topRight
          </Button>;
        }, 5000)}
      </>
    );
  };

  const [mic, setMik] = useState(false);
  const handleMic = () => {
    setMik(!mic);
  };

  const [camera, setCamera] = useState(false);
  const handleCamera = () => {
    setCamera(!camera);
  };

  const videoRef = useRef(null as any);
  const userMediaStreamRef = useRef(new MediaStream());
  const displayMediaStreamRef = useRef(new MediaStream());

  const micManager = () => {
    var tracks = userMediaStreamRef.current.getAudioTracks();
    tracks.forEach(function (track: any) {
      track.enabled = !mic;
    });
  };

  const videoManager = () => {
    var tracks = userMediaStreamRef.current.getVideoTracks();
    tracks.forEach(function (track: any) {
      track.enabled = !camera;
    });
    // Flip the video horizontally
    if (videoRef.current) {
      videoRef.current.style.transform = "scaleX(-1)";
    }
  };

  const screencast = async () => {
    if (
      displayMediaStreamRef?.current &&
      displayMediaStreamRef?.current.active
    ) {
      displayMediaStreamRef?.current.getVideoTracks().forEach((res) => {
        res.stop();
      });
    }
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.style.transform = "scaleX(1)";
      }

      mediaStream.getVideoTracks()[0].addEventListener("ended", () => {
        videoRef.current.srcObject = userMediaStreamRef.current;
        videoRef.current.style.transform = "scaleX(-1)";
      });

      displayMediaStreamRef.current = mediaStream;
    } catch (err) {}
  };

  const cameraPermission = async () => {
    try {
      userMediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = userMediaStreamRef.current;
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
      <Flex justify="center" className="pt-3 bg-black">
        <video
          onLoad={notification}
          ref={videoRef}
          autoPlay
          playsInline
          style={{ height: "648px" }}
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
          <button
            onClick={screencast}
            className="border rounded-full hover:bg-gray-700 border-gray-300 p-2"
          >
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
