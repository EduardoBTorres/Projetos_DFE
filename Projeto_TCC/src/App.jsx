import { RouterProvider } from "react-router-dom";
import AtividadesProvider from "./contexts/AtividadesProvider.jsx";
import router from "./config/routes";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import UsersProvider from "./contexts/UsersProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <UsersProvider>
        <AtividadesProvider>
          <RouterProvider router={router} />
        </AtividadesProvider>
      </UsersProvider>
    </AuthProvider>
  );
}

export default App;
