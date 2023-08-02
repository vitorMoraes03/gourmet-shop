import { FilterContext, SortOptionsInterface } from "@/contexts/filter";
import { useContext } from "react";

export function useSort(item: SortOptionsInterface) {
    const { setSortOptions } = useContext(FilterContext);
    setSortOptions(item);
}