"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { StarWars } from "@/components/StarWars";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <StarWars />
    </QueryClientProvider>
  );
}
