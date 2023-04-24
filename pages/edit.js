import Editor from "../components/dashboard/editor";
import Page from "./template/template";
import { UserProvider } from "../context";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../context";

const Edit = () => {
  const router = useRouter();

  const { state } = useContext(UserContext);

  if (!state) {
    router.push("/sign-in");
  }
  return (
    <UserProvider>
      <Page>
        <Editor />
      </Page>
    </UserProvider>
  );
};

export default Edit;
