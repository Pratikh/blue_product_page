import { createContext, useContext, useEffect, useMemo, useState } from "react";

// eslint-disable-next-line jest/no-mocks-import
import UserJson from "../../__mocks__/user.json";

export interface UserJsonI {
  id: number;
  name: string;
  department: string;
  avatar: string;
}

interface UserContextValue {
  isLoading: boolean;
  error?: string;
  data?: UserJsonI;
}

export const UserContext = createContext<UserContextValue>({
  data: UserJson,
  isLoading: false,
  error: "",
});

export const UserInfoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userInfo, setUserInfo] = useState<UserJsonI>();
  // eslint-disable-next-line react/hook-use-state
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const resp = await fetch("/api/user", {
          method: "GET",
        });
        const jsonData = (await resp.json()) as UserJsonI;
        setUserInfo(jsonData);
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const value = useMemo(
    () => ({
      data: userInfo,
      isLoading,
      error,
    }),
    [error, isLoading, userInfo]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserInfoContext = () => {
  const productsData = useContext(UserContext);
  return productsData;
};
