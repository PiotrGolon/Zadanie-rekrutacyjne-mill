export const getInitialMode = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    const storedMode = localStorage.getItem("mode") as "light" | "dark" | null;
    return storedMode || "light";
  }
  return "light";
};

export const today = new Date().toISOString().split("T")[0];
