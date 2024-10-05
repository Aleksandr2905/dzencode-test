// 'use client';

// import { useEffect, useState } from 'react';
// import ClockIcon from '@/../public/assets/icons/clock.svg';

// export const TimeDisplay = () => {
//   const [currentTime, setCurrentTime] = useState<Date>(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [currentTime]);

//   const formatTime = (date: Date) => {
//     return date.toLocaleTimeString('ru-RU', {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//   };

//   return (
//     <div className="flex items-center gap-1">
//       <ClockIcon width={18} height={18} />
//       <p className="font-inter text-base font-normal">
//         {formatTime(currentTime)}
//       </p>
//     </div>
//   );
// };

'use client';

import { useEffect, useState } from 'react';
import ClockIcon from '@/../public/assets/icons/clock.svg';

export const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  // const hour = currentTime.toLocaleTimeString('ru-RU', {
  //   hour: 'numeric',
  //   minute: 'numeric',
  // });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const time = formatTime(currentTime);

  return (
    <div className="flex items-center gap-1">
      <ClockIcon width={18} height={18} />
      <p className="font-inter text-base font-normal" suppressHydrationWarning>
        {time}
      </p>
    </div>
  );
};
