import { useState } from "react";
import { QueryProvider } from "contexts/QueryContext";
import { Header } from "components";
import { Sidebar } from "components";
import { ViewPort } from "components";

export const App = () => {
  const [view, setView] = useState("menu");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <QueryProvider>
      <Header
        view={view}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Sidebar
        view={view}
        returnToSelection={() => setView("menu")}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <ViewPort
        view={view}
        changeView={() => setView("drink")}
        returnToSelection={() => setView("menu")}
      />
    </QueryProvider>
  );
};
