import { RouterProvider } from "react-router-dom";
import AtividadesProvider from "./contexts/AtividadesProvider.jsx";
import router from "./config/routes";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <AtividadesProvider>
        <RouterProvider router={router} />
      </AtividadesProvider>
    </AuthProvider>
  );
}

export default App;