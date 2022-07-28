/* eslint-disable react-hooks/rules-of-hooks */
import useSWRImmutable from "swr/immutable";
import { fetcher } from "./fetcher";

// Rudimentary cache for projects, but works well :)
const Projects = { data: null, isError: null, isLoading: false };

export const useProjects = () => {
  if (Projects.data === null) {
    const { data, error } = useSWRImmutable(
      "https://api.github.com/users/ibveecnk/repos",
      fetcher
    );

    return {
      data,
      isLoading: !error && !data,
      isError: error,
    };
  } else {
    return Projects;
  }
};
