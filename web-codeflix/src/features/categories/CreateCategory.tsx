import {Category} from "./categorySlice";
import React, {useState} from "react";
import {Box, Paper, Typography} from "@mui/material";
import {CategoryForm} from "./components/CategoryForm";

export const CategoryCreate = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [category, setCategory] = useState<Category>({
        id: "",
        name: "",
        description: "",
        is_active: false,
        updated_at: "",
        deleted_at: "",
        created_at: ""
    });

    const handleChange = (e: any) => {};
    const handleToggle = (e:any) => {};

    return (
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">Create Category</Typography>
                    </Box>
                </Box>

                <CategoryForm category={category}
                              isDisabled={isDisabled}
                              isLoading={false}
                              onSubmit={() => {}}
                              handleChange={handleChange}
                              handleToggle={handleToggle}
                />
            </Paper>
        </Box>
    );
}