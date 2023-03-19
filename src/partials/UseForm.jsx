import { useCallback, useState } from "react";

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  return [formData, handleInputChange];
};