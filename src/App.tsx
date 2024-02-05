import { HomePage } from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/constans";
import { StartPage } from "./pages/StartPage";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { AuthProvider } from "./context/authContext";
import { ProtectedWrapper } from "./components/ProtectedWrapper";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={ROUTES.home}
              element={
                <ProtectedWrapper>
                  <HomePage />
                </ProtectedWrapper>
              }
            />
            <Route path={ROUTES.start} element={<StartPage />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.register} element={<Register />} />
            <Route path={ROUTES.error} element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
