'use client';

import { Loader } from '@/components/common/loader';
import { useActiveSessions } from '@/hooks';

export const ActiveSessions = () => {
  const activeSessions = useActiveSessions();

  return (
    <div className="flex items-end">
      {activeSessions === 0 ? (
        <Loader />
      ) : (
        <p className="font-inter text-base font-normal">
          Активных <br />
          сессий: <span className="">{activeSessions}</span>
        </p>
      )}
    </div>
  );
};
