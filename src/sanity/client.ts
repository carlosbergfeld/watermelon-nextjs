import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "3x1122vc",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
