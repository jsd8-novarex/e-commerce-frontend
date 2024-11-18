export const isPasswordValid = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isFormatPrice = (price: number, fractionDigits: number) => {
  const formatPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  return formatPrice;
};

export const handleInputChangeSingleValue = <T>(
  event: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<T>>,
) => {
  const { value } = event.target;
  setState(value as T);
};

export const handleInputObjectFieldChange = <T>(
  event: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<T>>,
) => {
  const { name, value } = event.target;
  setState((prev) => ({
    ...prev,
    [name]: value,
  }));
};
