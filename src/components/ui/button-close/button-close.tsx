import CloseIcon from '@/../public/assets/icons/close.svg';
import { IBtnClose } from './types';

export const ButtonClose = ({ onClick }: IBtnClose) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="button close"
      className="bg-white absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full animation hover:bg-slate-200 hover:text-text_hover shadow-lg shadow-gray-400"
    >
      <CloseIcon width={16} height={16} />
    </button>
  );
};
