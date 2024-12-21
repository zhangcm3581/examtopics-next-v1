export function formatDate(dateString: string) {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}