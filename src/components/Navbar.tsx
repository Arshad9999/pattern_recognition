import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";

const navItems = [
  { label: "Course Overview", path: "/" },
  { label: "Assignment 1", path: "/assignment-1" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-highlight" />
          <span className="font-display text-lg font-700 text-foreground">PR</span>
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-highlight-soft text-highlight"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
