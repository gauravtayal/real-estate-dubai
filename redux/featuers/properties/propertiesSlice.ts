import { createSlice } from "@reduxjs/toolkit";

interface initialStateS {
  property: {
    _id: string;
    feature: string;
    img: string;
    title: string;
    description: string;
    address: string;
    City: string;
    State: string;
    ZipPostalCode: string;
    Area: string;
    County: string;
    Apartment: string;
    Bedrooms: number;
    Bathrooms: number;
    Garage: number;
    YearBuilt: number;
    squareFt: string;
    GarageSize: string;
    price: string;
    PropertySize: string;
    PropertyType: string;
    PropertyStatus: string;
  }[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

const initialState: initialStateS = {
  property: [],
  isLoading: false,
  isError: false,
  error: "",
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    addProperty: (state, action) => {
      // remove duplicate property
      const duplicate = state.property.find(
        (property) => property._id === action.payload._id
      );
      if (duplicate) {
        return state;
      }
      state.property.push(action.payload);
    },
  },
});

export const { addProperty } = propertiesSlice.actions;
export default propertiesSlice.reducer;
