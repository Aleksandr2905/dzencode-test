import { NavigationMenu } from '@/components/ui/navigation-menu';
import { UserBar } from '@/components/ui/user-bar';

export const Sidebar = () => {
  return (
    <aside className="w-1/6 h-[calc(100vh-96px)] flex flex-col items-center p-5 float-left shadow-xl shadow-gray-200">
      <UserBar />
      <NavigationMenu />
    </aside>
  );
};
