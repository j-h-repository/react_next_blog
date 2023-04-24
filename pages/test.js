import { UserContext } from "../context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Page from "./template/template";
import Dash from "../components/dashboard/dash";
import UserRoute from "../userRoute/userRoute";

const TestLogin = () => {
  const router = useRouter();

  const { state } = useContext(UserContext);

  if (!state) {
    router.push("/sign-in");
  }

  return (
    <UserRoute>
      <Page>
        <div className="text-center">
          <Dash />
        </div>
      </Page>
    </UserRoute>
  );
};

export default TestLogin;
