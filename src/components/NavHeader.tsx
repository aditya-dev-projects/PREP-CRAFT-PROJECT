import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";

const NavHeader = () => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <Link to="/" className="flex items-center justify-center">
        <Logo />
      </Link>
      <nav className="ml-auto hidden md:flex items-center gap-2 sm:gap-6">
        <Link to="/" className="text-sm p-2  font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link to="/dsa" className="text-sm p-2 font-medium hover:underline underline-offset-4">
          DSA
        </Link>
        <Link to="/development" className="text-sm p-2 font-medium hover:underline underline-offset-4">
          Development
        </Link>
        <Link to="/aptitude" className="text-sm font-medium hover:underline underline-offset-4">
          Aptitude
        </Link>
        {/* <Link to="/Fundametals" className="text-sm font-medium hover:underline underline-offset-4">
          Language Fundamentals 
        </Link> */}
        <ThemeToggle />
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.photoURL || ""} alt={user.displayName || ""} />
                  <AvatarFallback>{user.displayName?.charAt(0) || user.email?.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.displayName || user.email}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link to="/auth">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/auth">
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </nav>
      <div className="md:hidden flex items-center ml-auto">
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-6">
              <Link to="/" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
                <Logo />
              </Link>
              <Link to="/" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/dsa" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                DSA
              </Link>
              <Link to="/development" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Development
              </Link>
              <Link to="/aptitude" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Aptitude
              </Link>
              {user ? (
                <div className="border-t pt-4">
                  <div className="flex items-center gap-4 px-4 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.photoURL || ""} alt={user.displayName || ""} />
                      <AvatarFallback>{user.displayName?.charAt(0) || user.email?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName || user.email}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => { signOut(); setIsOpen(false); }}>
                    Log out
                  </Button>
                </div>
              ) : (
                <div className="border-t pt-4 space-y-2">
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavHeader;