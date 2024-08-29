"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import * as z from "zod";

interface ChatInputProps {
  name: string;
  apiUrl: string;
  query: Record<string, any>;
  type: "channel" | "conversation";
}


const formSchema = z.object({
    content:z.string().min(1)
})

export const ChatInput = ({ name, apiUrl, query, type }: ChatInputProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {

}, [value]);

  const changeHandler = (e: HTMLInputElement): any => {
    setValue(e.value);
  };
//   return <Input value={} onChange={changeHandler}></Input>;
};
