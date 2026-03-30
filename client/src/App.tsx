import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Behandelingen from "./pages/Behandelingen";
import Huidproblemen from "./pages/Huidproblemen";
import OverMij from "./pages/OverMij";
import Prijzenlijst from "./pages/Prijzenlijst";
import Contact from "./pages/Contact";
import Technologie from "./pages/Technologie";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/behandelingen"} component={Behandelingen} />
      <Route path={"/huidproblemen"} component={Huidproblemen} />
      <Route path={"/over-mij"} component={OverMij} />
      <Route path={"/prijzenlijst"} component={Prijzenlijst} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/technologie"} component={Technologie} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
