"use client";

import { DarkThemeToggle, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <Navbar fluid rounded>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        LOOP Blog
      </span>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex gap-5 pt-1">
          {location.pathname === "/" ? (
            <Navbar.Link href="#" className="text-lg" active>
              Home
            </Navbar.Link>
          ) : (
            <Navbar.Link href="/" className="text-lg">
              Home
            </Navbar.Link>
          )}

          {location.pathname.includes("/about") ? (
            <Navbar.Link href="/about" className="text-lg" active>
              About
            </Navbar.Link>
          ) : (
            <Navbar.Link href="/about" className="text-lg">
              About
            </Navbar.Link>
          )}
          {location.pathname.includes("/blog") ? (
            <Navbar.Link href="/blog" className="text-lg" active>
              Blog
            </Navbar.Link>
          ) : (
            <Navbar.Link href="/blog" className="text-lg">
              Blog
            </Navbar.Link>
          )}
          {location.pathname.includes("/contact") ? (
            <Navbar.Link href="/contact" className="text-lg" active>
              Contact
            </Navbar.Link>
          ) : (
            <Navbar.Link href="/contact" className="text-lg">
              Contact
            </Navbar.Link>
          )}
        </div>
        <DarkThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
}
