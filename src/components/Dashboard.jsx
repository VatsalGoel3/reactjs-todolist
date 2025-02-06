// src/components/Dashboard.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Dashboard() {
    const { lagout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate("/login");
        } catch {
            console.error("Failed to log out");
        }
    }

    return (
        <div>
            <header style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}>
                <button onClick={handleLogout}>Log Out</button>
            </header>
            <main>
                <TodoInput />
                <TodoList />
            </main>
        </div>
    );
}