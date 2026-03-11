export const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, ''); // 숫자만 남기기
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
};
