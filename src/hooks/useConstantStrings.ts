import { useContext } from "react";
import { ConstantStringsContext } from "../context/ConstantStringsContext"; // Adjust the path as necessary

const useConstantStrings = () => {
  const context = useContext(ConstantStringsContext);
  if (context === undefined) {
    throw new Error("useConstantStrings must be used within a StringsProvider");
  }
  return context.strings;
};

export default useConstantStrings;
