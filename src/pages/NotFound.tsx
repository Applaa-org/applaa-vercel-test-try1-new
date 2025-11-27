import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const NotFound = () => {
  const location = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-9xl font-black text-gray-200 dark:text-gray-700">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Uh-oh!
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400">We can't find that page.</p>
        <Button asChild className="mt-6">
            <Link to="/">
                Go Back Home
            </Link>
        </Button>
    </div>
  );
};

export default NotFound;