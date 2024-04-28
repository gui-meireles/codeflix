import {Box, Button, IconButton, Typography} from "@mui/material";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {deleteCategory, selectCategories} from "./categorySlice";
import {Link} from "react-router-dom";
import {DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export const CategoryList = () => {
    const categories = useAppSelector(selectCategories);
    const dispatch = useAppDispatch();

    const componentProps = {
        toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }, // Auto search between 500ms
        },
    };

    // Use categores to create rows
    const rows: GridRowsProp = categories.map((category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        isActive: category.is_active,
        createdAt: new Date(category.created_at).toLocaleDateString("pt-BR")
    }));

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            renderCell: renderNameCell
        },
        {
            field: 'isActive',
            headerName: 'Active',
            flex: 1,
            type: "boolean",
            renderCell: renderIsActiveCell
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            flex: 1,
        },
        {
            field: 'id',
            headerName: 'Actions',
            type: "string",
            flex: 1,
            renderCell: renderActionsCell
        },
    ];

    function handleDeleteCategory(id: string) {
        dispatch(deleteCategory(id));
    }

    function renderActionsCell(params: GridRenderCellParams) {
        return (
            <IconButton
                color="secondary"
                onClick={() => handleDeleteCategory(params.value)}
                aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        )
    }

    function renderNameCell(rowData: GridRenderCellParams) {
        return (
            <Link
                style={{ textDecoration: "none" }}
                to={`/categories/edit/${rowData.id}`}
                >
                <Typography color="primary">{ rowData.value }</Typography>
            </Link>
        );
    }

    function renderIsActiveCell(rowData: GridRenderCellParams) {
        return (
            <Typography color={rowData.value ? "primary" : "secondary"}>
                {rowData.value ? "Active" : "Inactive"}
            </Typography>
        );
    }

    return (
        <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box display="flex" justifyContent="flex-end">
                <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/categories/create"
                style={{ marginBottom: "1rem" }}
                >
                    New Category
                </Button>
            </Box>

            <Box sx={{ height: 600, display: "flex" }}>
                <DataGrid
                    disableColumnSelector={true}
                    disableColumnFilter={true}
                    disableDensitySelector={true}
                    disableSelectionOnClick={true}
                    rowsPerPageOptions={[5, 10, 15, 50, 100]}
                    rows={rows} columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={componentProps}
                />
            </Box>
        </Box>
    );
};