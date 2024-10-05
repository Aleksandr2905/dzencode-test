'use client';

import { months } from '@/utils';

export const DateDisplay = () => {
  const currentDate = new Date();

  const formatDate = (
    date: Date
  ): { dayOfWeek: string; dateString: string } => {
    const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    const formattedDayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
    const month = months[date.getMonth()];

    const capitalizedDayOfWeek =
      dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

    return {
      dayOfWeek: capitalizedDayOfWeek,
      dateString: `${formattedDayOfMonth} ${month}, ${year}`,
    };
  };

  const { dayOfWeek, dateString } = formatDate(currentDate);

  return (
    <p className="font-inter text-base font-normal">
      {dayOfWeek}
      <br />
      {dateString}
    </p>
  );
};
