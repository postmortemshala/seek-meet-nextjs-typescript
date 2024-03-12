"use client";
import Image from "next/image";
import icon from "../images/keyboard.png";
import I1 from "../images/Img1.png";
import I2 from "../images/Img2.png";
import I3 from "../images/Img3.png";
import link from "../images/link.png";
import add from "../images/add.png";
import cal from "../images/calendar.png";
import React from "react";
import { useState } from "react";
import { Dropdown, MenuProps, Space } from "antd";

const items: MenuProps["items"] = [
  {
    label: (
      <div className="text-lg flex gap-5 items-center ">
        <Image src={link} height={8} width={30} alt=""></Image>
        <a href="#">Create a meeting for later</a>
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="text-lg flex gap-5 items-center ">
        <Image src={add} height={8} width={30} alt=""></Image>
        <a href="meeting">Start an instant meeting</a>
      </div>
    ),
    key: "1",
  },

  {
    label: (
      <div className="text-lg flex gap-5 items-center ">
        <Image src={cal} height={8} width={30} alt=""></Image>
        <a href="#">Schedule in Google Calender</a>
      </div>
    ),
    key: "3",
  },
];

const CreateMeeting = () => {
  const Icons = [I1, I2, I3];
  const Headings = [
    "Get a link that you can share",
    "Plan ahead",
    "Your meeting is safe",
  ];

  const Desc = [
    <div>
      Click <strong> New meeting </strong> to get a link that you can send to
      people that you want to meet with
    </div>,
    <div>
      Click <strong> New meeting </strong> to schedule meetings in Google,
      Calendar and send invitations to participants
    </div>,
    "No one can join a meeting unless invited or admitted by the host",
  ];

  let [value, setValue] = useState(0);
  let [head, setHead] = useState(0);
  let [desc, setDesc] = useState(0);
  const next = () => {
    value = value + 1;
    setValue(value);
    head = head + 1;
    setHead(head);
    desc = desc + 1;
    setDesc(desc);
    if (value == 3) {
      value = 0;
      head = 0;
      desc = 0;
      setValue(value);
      setHead(head);
      setDesc(desc);
    }
  };
  const prev = () => {
    value = value - 1;
    head = head - 1;
    desc = desc - 1;
    setValue(value);
    setHead(head);
    setDesc(desc);
    if (value == -1) {
      value = 2;
      head = 2;
      desc = 2;
      setValue(value);
      setHead(head);
      setDesc(desc);
    }
  };
  return (
    <>
      <nav className="flex justify-between mx-10 items-center">
        <div>logo</div>
        <div className="flex justify-around items-center gap-8">
          <div>Time</div>
          <div className=" hover:rounded-full cursor-pointer px-1.5 hover:bg-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="30"
              viewBox="0 0 4.233 4.233"
              id="question"
            >
              <g transform="translate(73.405 -1.965)">
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g transform="translate(0 .002)">
                                <g>
                                  <g>
                                    <g transform="translate(0 .004)">
                                      <g>
                                        <g>
                                          <g>
                                            <g>
                                              <g>
                                                <g>
                                                  <g transform="translate(0 -.06)">
                                                    <g>
                                                      <g>
                                                        <g transform="translate(0 -.525)">
                                                          <g>
                                                            <path
                                                              fill="none"
                                                              stroke="#000"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              stroke-width=".265"
                                                              d="m -73.009629,4.658226 a -1.7197876,1.7197876 0 0 0 1.719788,1.7197876 -1.7197876,1.7197876 0 0 0 1.719787,-1.7197876 -1.7197876,1.7197876 0 0 0 -1.719787,-1.7197876 -1.7197876,1.7197876 0 0 0 -1.719788,1.7197876 z"
                                                              paint-order="markers fill stroke"
                                                            ></path>
                                                            <path
                                                              fill="none"
                                                              stroke="#000"
                                                              stroke-linecap="round"
                                                              stroke-linejoin="round"
                                                              stroke-width=".265"
                                                              d="M-71.802774 4.0273262c.07229-.254334.338777-.4143924.613824-.3686697.275046.045722.467401.2820575.44306.5443615-.01554.1674657-.116117.310047-.259495.3912582-.131353.075837-.2771.1869694-.2771.3848199M-71.289844 5.4159838a.13229156.13229156 0 01.132291.1322926.13229156.13229156 0 01-.132291.1322918.13229156.13229156 0 01-.132292-.1322918.13229156.13229156 0 01.132292-.1322926z"
                                                              paint-order="markers fill stroke"
                                                            ></path>
                                                          </g>
                                                        </g>
                                                      </g>
                                                    </g>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className=" hover:rounded-full cursor-pointer px-1.5 hover:bg-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 30"
              viewBox="0 0 24 24"
              id="comment"
              height={30}
              width={20}
            >
              <path d="M19 2H5a3 3 0 0 0-3 3v16a1 1 0 0 0 1.515.857l4.05-2.43A3.007 3.007 0 0 1 9.108 19H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 14a1 1 0 0 1-1 1H9.108a5 5 0 0 0-2.573.713L4 19.233V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11Z"></path>
              <path d="M15.707 6.793a1 1 0 0 0-1.414 0L12 9.086 9.707 6.793a1 1 0 0 0-1.414 1.414l2.293 2.293-2.293 2.293a1 1 0 1 0 1.414 1.414L12 11.914l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 10.5l2.293-2.293a1 1 0 0 0 0-1.414Z"></path>
            </svg>
          </div>
          <div className=" hover:rounded-full cursor-pointer p-1 hover:bg-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 16 16"
              id="settings"
            >
              <path
                fill="#212121"
                d="M7.99994 6C6.89537 6 5.99994 6.89543 5.99994 8C5.99994 9.10457 6.89537 10 7.99994 10C9.10451 10 9.99994 9.10457 9.99994 8C9.99994 6.89543 9.10451 6 7.99994 6ZM6.99994 8C6.99994 7.44772 7.44765 7 7.99994 7C8.55222 7 8.99994 7.44772 8.99994 8C8.99994 8.55228 8.55222 9 7.99994 9C7.44765 9 6.99994 8.55228 6.99994 8Z"
              ></path>
              <path
                fill="#212121"
                d="M10.618 4.39833C10.233 4.46825 9.86392 4.21413 9.7937 3.83074L9.53397 2.41496C9.50816 2.27427 9.39961 2.16301 9.25912 2.13325C8.84818 2.04621 8.42685 2.00195 8 2.00195C7.57289 2.00195 7.1513 2.04627 6.74013 2.13341C6.5996 2.1632 6.49104 2.27452 6.46529 2.41527L6.20629 3.8308C6.1994 3.86844 6.18942 3.90551 6.17647 3.9416C6.04476 4.30859 5.6392 4.49978 5.27062 4.36863L3.91115 3.88463C3.77603 3.83652 3.62511 3.87431 3.52891 3.98033C2.96005 4.60729 2.52892 5.34708 2.2672 6.15302C2.22305 6.28899 2.26562 6.43805 2.37502 6.53053L3.47694 7.46206C3.50626 7.48685 3.53352 7.51399 3.55843 7.5432C3.81177 7.84027 3.77528 8.28558 3.47693 8.53783L2.37502 9.46935C2.26562 9.56183 2.22305 9.71089 2.2672 9.84685C2.52892 10.6528 2.96005 11.3926 3.52891 12.0196C3.62511 12.1256 3.77603 12.1634 3.91115 12.1153L5.27068 11.6312C5.30687 11.6184 5.3441 11.6084 5.38196 11.6015C5.76701 11.5316 6.13608 11.7857 6.2063 12.1691L6.46529 13.5846C6.49104 13.7254 6.5996 13.8367 6.74013 13.8665C7.1513 13.9536 7.57289 13.9979 8 13.9979C8.42685 13.9979 8.84818 13.9537 9.25912 13.8666C9.39961 13.8369 9.50816 13.7256 9.53397 13.5849L9.79368 12.1692C9.8006 12.1314 9.81058 12.0944 9.82353 12.0583C9.95524 11.6913 10.3608 11.5001 10.7294 11.6312L12.0888 12.1153C12.224 12.1634 12.3749 12.1256 12.4711 12.0196C13.04 11.3926 13.4711 10.6528 13.7328 9.84685C13.777 9.71089 13.7344 9.56183 13.625 9.46935L12.5231 8.53782C12.4937 8.51303 12.4665 8.48589 12.4416 8.45667C12.1882 8.1596 12.2247 7.71429 12.5231 7.46205L13.625 6.53053C13.7344 6.43805 13.777 6.28899 13.7328 6.15302C13.4711 5.34708 13.04 4.60729 12.4711 3.98033C12.3749 3.87431 12.224 3.83652 12.0888 3.88463L10.7293 4.36865C10.6931 4.38152 10.6559 4.39146 10.618 4.39833ZM3.99863 4.97726L4.93522 5.3107C5.82017 5.62559 6.79872 5.16815 7.11769 4.2794C7.14903 4.19207 7.17324 4.1021 7.18996 4.01078L7.36738 3.04113C7.5757 3.01512 7.78684 3.00195 8 3.00195C8.213 3.00195 8.42397 3.0151 8.63214 3.04107L8.81011 4.01117C8.98053 4.9408 9.87266 5.55003 10.7967 5.38225C10.8877 5.36572 10.9775 5.34176 11.0647 5.31073L12.0014 4.97726C12.2564 5.31084 12.4684 5.67476 12.6319 6.06064L11.8774 6.6984C11.1566 7.30787 11.0675 8.38649 11.6807 9.10555C11.7408 9.17609 11.8067 9.24166 11.8775 9.3015L12.6319 9.93924C12.4684 10.3251 12.2564 10.689 12.0014 11.0226L11.0646 10.6891C10.1797 10.3742 9.20128 10.8317 8.88231 11.7205C8.85096 11.8078 8.82677 11.8978 8.81004 11.9891L8.63214 12.9588C8.42397 12.9848 8.213 12.9979 8 12.9979C7.78684 12.9979 7.5757 12.9848 7.36738 12.9587L7.18994 11.989C7.01965 11.0592 6.12743 10.4498 5.2033 10.6176C5.11227 10.6342 5.0225 10.6581 4.93528 10.6892L3.99863 11.0226C3.74357 10.689 3.53161 10.3251 3.36814 9.93924L4.12257 9.30148C4.84343 8.69201 4.93254 7.61339 4.31933 6.89433C4.25917 6.82378 4.19332 6.75822 4.12254 6.69838L3.36814 6.06064C3.53161 5.67476 3.74357 5.31084 3.99863 4.97726Z"
              ></path>
            </svg>
          </div>
          <div className="flex gap-2 items-center">
            <div className=" hover:rounded-full cursor-pointer  hover:bg-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 510 511"
                id="menu"
              >
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="M171 171V191H191V171H171zM166 156C160.477 156 156 160.477 156 166V196C156 201.523 160.477 206 166 206H196C201.523 206 206 201.523 206 196V166C206 160.477 201.523 156 196 156H166zM171 246V266H191V246H171zM166 231C160.477 231 156 235.477 156 241V271C156 276.523 160.477 281 166 281H196C201.523 281 206 276.523 206 271V241C206 235.477 201.523 231 196 231H166zM171 321V341H191V321H171zM166 306C160.477 306 156 310.477 156 316V346C156 351.523 160.477 356 166 356H196C201.523 356 206 351.523 206 346V316C206 310.477 201.523 306 196 306H166zM246 171V191H266V171H246zM241 156C235.477 156 231 160.477 231 166V196C231 201.523 235.477 206 241 206H271C276.523 206 281 201.523 281 196V166C281 160.477 276.523 156 271 156H241zM246 246V266H266V246H246zM241 231C235.477 231 231 235.477 231 241V271C231 276.523 235.477 281 241 281H271C276.523 281 281 276.523 281 271V241C281 235.477 276.523 231 271 231H241zM246 321V341H266V321H246zM241 306C235.477 306 231 310.477 231 316V346C231 351.523 235.477 356 241 356H271C276.523 356 281 351.523 281 346V316C281 310.477 276.523 306 271 306H241zM321 171V191H341V171H321zM316 156C310.477 156 306 160.477 306 166V196C306 201.523 310.477 206 316 206H346C351.523 206 356 201.523 356 196V166C356 160.477 351.523 156 346 156H316zM321 246V266H341V246H321zM316 231C310.477 231 306 235.477 306 241V271C306 276.523 310.477 281 316 281H346C351.523 281 356 276.523 356 271V241C356 235.477 351.523 231 346 231H316zM321 321V341H341V321H321zM316 306C310.477 306 306 310.477 306 316V346C306 351.523 310.477 356 316 356H346C351.523 356 356 351.523 356 346V316C356 310.477 351.523 306 346 306H316z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <button className="px-1 rounded-full hover:focus:ring focus:ring-gray-400 ...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="user"
                height={40}
                width={30}
              >
                <path
                  fill="#231f20"
                  d="M7.763 2A6.77 6.77 0 0 0 1 8.763c0 1.807.703 3.505 1.98 4.782a6.718 6.718 0 0 0 4.783 1.981 6.77 6.77 0 0 0 6.763-6.763A6.77 6.77 0 0 0 7.763 2ZM3.675 13.501a5.094 5.094 0 0 1 3.958-1.989c.024.001.047.007.071.007h.023c.022 0 .042-.006.064-.007a5.087 5.087 0 0 1 3.992 2.046 6.226 6.226 0 0 1-4.02 1.468 6.212 6.212 0 0 1-4.088-1.525zm4.032-2.494c-.025 0-.049.004-.074.005a2.243 2.243 0 0 1-2.167-2.255 2.246 2.246 0 0 1 2.262-2.238 2.246 2.246 0 0 1 2.238 2.262c0 1.212-.97 2.197-2.174 2.232-.028-.001-.056-.006-.085-.006Zm4.447 2.215a5.594 5.594 0 0 0-3.116-2.052 2.749 2.749 0 0 0 1.428-2.412A2.747 2.747 0 0 0 7.704 6.02a2.747 2.747 0 0 0-2.738 2.762 2.73 2.73 0 0 0 1.422 2.386 5.602 5.602 0 0 0-3.081 1.995 6.22 6.22 0 0 1-1.806-4.398 6.27 6.27 0 0 1 6.263-6.263 6.27 6.27 0 0 1 6.263 6.263 6.247 6.247 0 0 1-1.873 4.457z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full flex gap-20 mr-8 mt-24 p-20">
        <div className="max-w-3xl mt-5">
          <h1 className="font-semiboldbold text-5xl mb-10">
            Video calls and meetings for everyone
          </h1>
          <p className=" text-lg text-gray-400 max-w-xl mb-10">
            Google Meet provides secure, easy-to-use video calls and meetings
            for everyone, on any device.
          </p>
          <div className="flex gap-10 items-center flex-wrap">
            <button className="flex gap-2 items-center bg-blue-500 px-5 py-1 rounded-lg text-white font-semibold">
              <Dropdown menu={{ items }} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="VideoCall"
                      height={40}
                      width={30}
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                    New Meeting
                  </Space>
                </a>
              </Dropdown>
            </button>
            <button className="">
              <span className="absolute mx-3 my-2.5">
                <Image src={icon} height={25} alt=""></Image>
              </span>
              <input
                type="text"
                className=" border-black border-2 pl-12 px-3 py-3 rounded-lg focus-visible:outline-blue-500"
                placeholder="Enter a code or link"
              />
            </button>
            <a href="#">Join</a>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-16">
            <button
              className="text-xl hover:bg-gray-100 px-3.5 pb-2 pt-1 rounded-full"
              onClick={prev}
            >
              &lt;
            </button>
            <Image width={230} src={Icons[value]} alt=""></Image>
            <button
              className="text-xl hover:bg-gray-100 px-3.5 pb-2 pt-1 rounded-full"
              onClick={next}
            >
              &gt;
            </button>
          </div>
          <div className="flex flex-col items-center w-96 text-center gap-3 justify-around ml-8 mt-12">
            <h3 className=" text-2xl">{Headings[head]}</h3>
            <div className=" text-sm text-gray-700  ">{Desc[desc]}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateMeeting;
