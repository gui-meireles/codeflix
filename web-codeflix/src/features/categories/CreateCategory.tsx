import {Category, createCategory} from "./categorySlice";
import React, {useState} from "react";
import {Box, Paper, Typography} from "@mui/material";
import {CategoryForm} from "./components/CategoryForm";
import {useAppDispatch} from "../../app/hooks";

export const CategoryCreate = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [categoryState, setCategoryState] = useState<Category>({
        id: "",
        name: "",
        description: "",
        is_active: false,
        updated_at: "",
        deleted_at: "",
        created_at: ""
    });
    const dispatch = useAppDispatch();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(createCategory(categoryState));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCategoryState({ ...categoryState, [name]: value });
    };

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCategoryState({ ...categoryState, [name]: checked });
    };

    return (
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">Create Category</Typography>
                    </Box>
                </Box>

                <CategoryForm category={categoryState}
                              isDisabled={isDisabled}
                              isLoading={false}
                              handleSubmit={handleSubmit}
                              handleChange={handleChange}
                              handleToggle={handleToggle}
                />
            </Paper>
        </Box>
    );
}