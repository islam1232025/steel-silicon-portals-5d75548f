import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page doesn't exist.
        </p>
        <Link to="/">
          <Button variant="hero" size="lg">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
            <Home className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
