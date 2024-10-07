import DeleteIcon from '@/../public/assets/icons/delete.svg';
import { DeleteProps } from './types';

export const DeletePopup = ({ onClose, onDelete, title }: DeleteProps) => {
  return (
    <div className="min-w-[700px]">
      <div className="p-6">
        <h2 className="text-2xl font-medium text-title">
          Вы уверены, что хотите удалить этот приход?
        </h2>
        <p className="text-xl font-medium mt-7">
          Длинное предлинное название прихода {title}
        </p>
      </div>
      <div className="flex gap-5 items-center justify-end bg-accent p-6">
        <button
          type="button"
          onClick={onClose}
          className="text-white text-base font-medium uppercase animation hover:text-text_hover"
        >
          отменить
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="flex items-center gap-2 text-red-600 text-base font-medium uppercase px-5 py-3 bg-white rounded-3xl animation hover:text-white hover:bg-red-600"
        >
          <DeleteIcon width={16} height={16} />
          удалить
        </button>
      </div>
    </div>
  );
};
