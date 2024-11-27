"use client"
import { axiosInstance } from "@/axios"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchTodo = () => {
    const [todos, setTodo] = useState([]);
    const fetchTodos = async () => {
      try {
        const todoResponse = await axiosInstance.get("api/tasks");
        setTodo(todoResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchTodos();
    }, []);

   return {data: todos}
}