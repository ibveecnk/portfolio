import { useEffect } from "react";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "./fetcher";

// Rudimentary cache for projects, but works well :)
type Projects = { data: any, fetchedAt: number, isError: boolean, isLoading: boolean };

export const useProjects = () : Projects => {
  const res: Projects = {
    data: null,
    fetchedAt: 0,
    isError: false,
    isLoading: false
  }

    fetch(
      "https://api.github.com/users/ibveecnk/repos").then((res) => res.json()).then((data) => { 
        res.data = data;
        res.fetchedAt = Date.now();
        res.isError = !data;
        res.isLoading = !data;

        return res;

      });
      return res;
};
