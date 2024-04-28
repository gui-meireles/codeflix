import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

interface Category {
    id: string;
    name: string;
    deleted_at: null | string;
    is_active: boolean;
    created_at: string;
    updated_at: null | string;
    description: null | string;
}

const category: Category = {
    id: "0ce",
    name: "Olive",
    description: "Earum",
    deleted_at: "2022-08-15T10:59:09+0000",
    is_active: true,
    created_at: "2022-07-15T10:59:09+0000",
    updated_at: "2022-08-10T10:59:09+0000",
};

export const initialState = [
    category,
    { ...category, id: "1ce", name: "Peach", is_active: false },
    { ...category, id: "2ce", name: "Apple" },
    { ...category, id: "3ce", name: "Banana", is_active: false },
    { ...category, id: "4ce", name: "Pear", is_active: false },
    { ...category, id: "5ce", name: "Tomato" },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        createCategory(state, action) {},
        updateCategory(state, action) {},
        listCategory(state, action) {},
    }
});

// Selectors
export const selectCategories = (state: RootState) => state.categories;

// select category by id
export const selectCategoryById = (state: RootState, id: string) => {
    const category = state.categories.find((category) => category.id === id);

    return (
        category || {
            id: "",
            name: "",
            description: "",
            is_active: false,
            deleted_at: null,
            created_at: "",
            updated_at: "",
        }
    );
}

export default categoriesSlice.reducer;