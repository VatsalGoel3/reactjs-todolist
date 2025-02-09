import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react"

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <Box component="header" sx={{ display: "flex", gap: 2, p: 2 }}>
            <TextField
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Enter todo..."
                variant="outlined"
                fullWidth
            />
            <Button
                variant="contained"
                onClick={() => {
                    handleAddTodos(todoValue);
                    setTodoValue("");
                }}
            >
                Add
            </Button>
        </Box>
    );
}