import {createSlice} from "@reduxjs/toolkit";

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
    { ...category, id: "1ce", name: "Peach" },
    { ...category, id: "2ce", name: "Apple" }
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

export default categoriesSlice.reducer;