import { DateDisplay } from '@/components/ui/date';
import { Logo } from '@/components/ui/logo';
// import { TimeDisplay } from '@/components/ui/time';

export const Header = () => {
  return (
    <header className="shadow-lg shadow-gray-100">
      <div className="container flex justify-between py-6">
        <Logo />
        <div className="flex flex-row gap-5 items-end">
          <DateDisplay />
          {/* <TimeDisplay /> */}
        </div>
      </div>
    </header>
  );
};
