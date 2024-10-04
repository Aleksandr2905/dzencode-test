import Link from 'next/link';
import LogoIcon from '@/../public/assets/icons/logo.svg';

export const Logo = () => {
  return (
    <Link href="/" aria-label="logo" className="inline-flex items-center gap-2">
      <LogoIcon width={48} height={48} />
      <span className="font-inter text-2xl font-semibold text-accent uppercase hover:text-hover">
        inventory
      </span>
    </Link>
  );
};
