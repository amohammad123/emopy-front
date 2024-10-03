import { useState } from 'react';
import { PiListBulletsLight, PiDotsThreeCircleFill } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import { IoStatsChartOutline } from 'react-icons/io5';
import { FaCirclePlus } from 'react-icons/fa6';
import Profile from './Profile';
import History from './History';
import Stats from './stats';
import Entries from './entries';
export default function Footer() {
  const [clickMore, setClickMore] = useState(true);
  const [clickCalender, setClickCalender] = useState(false);
  const [clickStats, setClickStats] = useState(false);
  const [clickEntries, setClickEntries] = useState(false);

  function handleClickOpacity(item) {
    if (item == 'more') {
      setClickCalender(false);
      setClickEntries(false);
      setClickStats(false);
      setClickMore(true);
    } else if (item == 'calender') {
      setClickCalender(true);
      setClickEntries(false);
      setClickStats(false);
      setClickMore(false);
    } else if (item == 'stats') {
      setClickCalender(false);
      setClickEntries(false);
      setClickStats(true);
      setClickMore(false);
    } else if (item == 'entries') {
      setClickCalender(false);
      setClickEntries(true);
      setClickStats(false);
      setClickMore(false);
    } else {
      setClickMore(true);
    }
  }

  return (
    <>
      {clickMore && <Profile />}
      {clickCalender && <History />}
      {clickStats && <Stats />}
      {clickEntries && <Entries />}

      <div className="">
        <div className="bg-slate-800 w-screen   lg:hidden flex justify-between  px-4 [&>*]:flex  [&>*]:flex-col [&>*]:cursor-pointer  [&>*]:items-center  [&>*]:justify-end  [&>*]:w-12   border-t-2  py-4  ">
          <div
            onClick={() => handleClickOpacity('more')}
            className={`  ${clickMore ? 'opacity-100' : 'opacity-55'} `}
          >
            <PiDotsThreeCircleFill className="size-6" />
            <p className="font-Peyda_300 text-xs pt-1 ">بیشتر</p>
          </div>
          <div
            onClick={() => handleClickOpacity('calender')}
            className={`${clickCalender ? 'opacity-100' : 'opacity-55 '} `}
          >
            <SlCalender className="size-6" />
            <p className="font-Peyda_300 text-xs pt-1 ">تاریخچه</p>
          </div>

          <div
            onClick={() => handleClickOpacity('stats')}
            className={`${clickStats ? 'opacity-100' : 'opacity-55'}  `}
          >
            <IoStatsChartOutline className="size-6" />
            <p className="font-Peyda_300 text-xs pt-1">وضعیت</p>
          </div>
          <div
            onClick={() => handleClickOpacity('entries')}
            className={`${clickEntries ? 'opacity-100' : 'opacity-55'}   `}
          >
            <PiListBulletsLight className="size-6 " />
            <p className="font-Peyda_300 text-xs pt-1">ورودی ها</p>
          </div>
        </div>
      </div>

      <FaCirclePlus className=" size-14 absolute bottom-4 right-3 cursor-pointer" />

      {/* <div className=" absolute bottom-0">
        <div className="bg-slate-800 w-screen lg:hidden flex justify-between py-4 px-4 [&>*]:flex  [&>*]:flex-col  [&>*]:items-center  [&>*]:justify-start  [&>*]:cursor-pointer border-t-2 ">
          <div
            onClick={() => handleClickOpacity('more')}
            className={`${clickMore ? 'opacity-100' : 'opacity-55'}  `}
          >
            <PiDotsThreeCircleFill className="size-6" />
            <p className="font-Peyda_300 text-xs pt-2">بیشتر</p>
          </div>
          <div
            onClick={() => handleClickOpacity('calender')}
            className={`${clickCalender ? 'opacity-100' : 'opacity-55'} `}
          >
            <SlCalender className="size-5" />
            <p className="font-Peyda_300 text-xs pt-2">تاریخچه</p>
          </div>
          <div
            onClick={() => handleClickOpacity('stats')}
            className={`${clickStats ? 'opacity-100' : 'opacity-55'}  `}
          >
            <IoStatsChartOutline className="size-5 " />
            <p className="font-Peyda_300 text-xs pt-2">وضعیت</p>
          </div>
          <div
            onClick={() => handleClickOpacity('entries')}
            className={`${clickEntries ? 'opacity-100' : 'opacity-55'}   `}
          >
            <PiListBulletsLight className="size-5" />
            <p className="font-Peyda_300 text-xs pt-2">ورودی ها</p>
          </div>
        </div>
        <FaCirclePlus className="absolute bottom-12 w-full size-12" />
      </div> */}
    </>
  );
}
