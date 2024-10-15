import { useSession } from "next-auth/react";
//hook for user session 
export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};
