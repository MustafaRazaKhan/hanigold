import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducers/Product";

const Product = createContext();
const initialState = {
  isLoading: false,
  allProduct: [],
  isError: false,
  msg: "",
  singleProduct: {},
  category: "",
  subCategory: "",
  designName: "",
  description: "",
  netWeight: "",
  grossWeight: "",
  photoPaths: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCategory = () => {};
  const handleSubCategory = () => {};
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    setFormState({
      ...formState,
      photos: files, // Store all selected files in the state
    });
  };
  const handleProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", formState.category);
    formData.append("subCategory", formState.subCategory);
    formData.append("designName", formState.designName);
    formData.append("description", formState.description);
    formData.append("grossWeight", formState.grossWeight);
    formData.append("netWeight", formState.netWeight);
    formData.append("price", formState.price);

    formState.photos.forEach((file) => {
      formData.append("photos", file); // Use the same key ("photos") to send multiple files
    });
  };
  return (
    <Product.Provider
      value={{
        state,
        handleCategory,
        handleSubCategory,
        handleProduct,
        handleProductChange,
        handleFileChange,
      }}
    >
      {children}
    </Product.Provider>
  );
};

const useProduct = () => {
  return useContext(Product);
};
export { useProduct, ProductProvider };
