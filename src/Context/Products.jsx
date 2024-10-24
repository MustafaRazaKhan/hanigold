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
  photoPaths: "",
  price: "",
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // todo handle category
  const handleCategory = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_CATEGORY",
      payload: {
        name,
        value,
      },
    });
  };
  // // handle sub category
  const handleSubCategory = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    // console.log("value", value);
    dispatch({
      type: "SET_SUBCATEGORY",
      payload: {
        name,
        value,
      },
    });
  };
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    dispatch({
      type: "SET_PRODUCT",
      payload: {
        name,
        value,
      },
    });
  };
  const handleFileChange = (e) => {
    const name = e.target.name;
    const value = e.target.files[0].name;
    dispatch({
      type: "SET_FILE",
      payload: {
        name,
        value,
      },
    });
    // Convert FileList to an array
    // dispatch({
    //   type: "SET_IMAGE",
    //   payload: {
    //     name,
    //     value,
    //   },
    // });
  };

  const handleProduct = async (e) => {
    e.preventDefault();

    // Create FormData to include both product details and the image file
    const formData = new FormData();

    // Append product data to FormData
    formData.append("category", state.category);
    formData.append("subCategory", state.subCategory);
    formData.append("designName", state.designName);
    formData.append("description", state.description);
    formData.append("grossWeight", state.grossWeight);
    formData.append("netWeight", state.netWeight);
    formData.append("price", state.price);

    // Append the image to FormData
    if (state.photoPaths) {
      formData.append("photoPaths", state.photoPaths); // Assuming state.photoPaths holds the single image file
    }

    try {
      // Send both product data and image in a single request
      const response = await fetch(
        "http://localhost:8080/api/product/newproduct",
        {
          method: "POST",
          body: formData, // Send the entire FormData
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log("Product created successfully", data);
      } else {
        console.error("Failed to create product", data);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
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
