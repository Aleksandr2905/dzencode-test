// import { months } from '@/utils';

// export const DateDisplay = () => {
//   const currentDate = new Date();

//   const formatDate = (
//     date: Date
//   ): { dayOfWeek: string; dateString: string } => {
//     const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });
//     const dayOfMonth = date.getDate();
//     const year = date.getFullYear();

//     const formattedDayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
//     const month = months[date.getMonth()];

//     const capitalizedDayOfWeek =
//       dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

//     return {
//       dayOfWeek: capitalizedDayOfWeek,
//       dateString: `${formattedDayOfMonth} ${month}, ${year}`,
//     };
//   };

//   const { dayOfWeek, dateString } = formatDate(currentDate);

//   return (
//     <p className="font-inter text-base font-normal">
//       {dayOfWeek}
//       <br />
//       {dateString}
//     </p>
//   );
// };
// 'use client';

// import { useState, useEffect } from 'react';
// import { months } from '@/utils';

// export const DateDisplay = () => {
//   const [dayOfWeek, setDayOfWeek] = useState('');
//   const [dateString, setDateString] = useState('');

//   const formatDate = (
//     date: Date
//   ): { dayOfWeek: string; dateString: string } => {
//     const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });
//     const dayOfMonth = date.getDate();
//     const year = date.getFullYear();

//     const formattedDayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
//     const month = months[date.getMonth()];

//     const capitalizedDayOfWeek =
//       dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

//     return {
//       dayOfWeek: capitalizedDayOfWeek,
//       dateString: `${formattedDayOfMonth} ${month}, ${year}`,
//     };
//   };

//   useEffect(() => {
//     const currentDate = new Date();
//     const { dayOfWeek, dateString } = formatDate(currentDate);
//     setDayOfWeek(dayOfWeek);
//     setDateString(dateString);
//   }, []);

//   return (
//     <p className="font-inter text-base font-normal">
//       {dayOfWeek}
//       <br />
//       {dateString}
//     </p>
//   );
// };

'use client';

import { useState, useEffect } from 'react';

export const DateDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Обновляем каждую секунду

    return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="top-menu">
      <p>{formatDate(currentTime)}</p>
      <p>{formatTime(currentTime)}</p>
    </div>
  );
};
