import { QueryFunction, useQuery } from "@tanstack/react-query";
import { API } from "../utils";
import { Character } from "@/types/Character";

export const starWarsQueryKey = ["starWars"];

export const useStarWars = () => {
  const starWarsQueryData = useQuery({
    queryKey: starWarsQueryKey,
    queryFn: fetchData,
  });
  return starWarsQueryData;
};
const fetchData: QueryFunction<Character[]> = async () => {
  const response = await API.get("people");
  console.log({ a: response.data });
  return response.data.results;
};
