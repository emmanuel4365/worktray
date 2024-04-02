import { Outlet, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await customFetch("/users/current-user");
    return data;
  } catch (error) {
    return error;
  }
};

const HomeLayout = () => {
  const user = useLoaderData();
  return (
    <>
      <Outlet context={user} />
    </>
  );
};
export default HomeLayout;
