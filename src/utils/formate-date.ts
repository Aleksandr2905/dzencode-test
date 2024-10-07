export const formatDate = (dateGuarantee: string) => {
  const date = new Date(dateGuarantee);

  const formattedDateLong = date
    .toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .replace('.', ' /')
    .replace(' ', ' / ');

  return formattedDateLong;
};
