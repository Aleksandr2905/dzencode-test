'use client';

import { useEffect, useState } from 'react';
import { Loader } from '@/components/common/loader';
import { months } from '@/utils';

export const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

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

  if (!currentDate) {
    return <Loader />;
  }

  const { dayOfWeek, dateString } = formatDate(currentDate);

  const style = 'font-inter text-base font-normal text-title';

  return (
    <div className="flex flex-col">
      <p className={style}>{dayOfWeek}</p>
      <p className={style}>{dateString}</p>
    </div>
  );
};
