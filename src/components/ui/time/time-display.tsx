'use client';

import { useEffect, useState } from 'react';
import ClockIcon from '@/../public/assets/icons/clock.svg';
import { Loader } from '@/components/common/loader';

export const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());

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

  return (
    <div className="flex items-center gap-1">
      {currentTime ? (
        <>
          <ClockIcon width={18} height={18} />
          <p
            className="font-inter text-base font-normal"
            suppressHydrationWarning
          >
            {currentTime ? formatTime(currentTime) : <Loader />}
          </p>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
