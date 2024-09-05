import { z } from "zod";

export const urlSchema = z
  .string()
  .startsWith("https://", { message: "Must provide secure URL" })
  .url({ message: "Invalid url" });
