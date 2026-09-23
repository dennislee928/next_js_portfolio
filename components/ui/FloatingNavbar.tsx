"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type NavChild = {
  name: string;
  link: string;
  count?: number;
};

export type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
  /** Present on "Projects": renders a dropdown alongside the clickable parent. */
  children?: NavChild[];
};

const Caret = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    aria-hidden="true"
    className={cn("transition-transform duration-200", open && "rotate-180")}
  >
    <path d="M1 3.5 5 7.5 9 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NavDropdown = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  const close = useCallback(
    (returnFocus = false) => {
      setOpen(false);
      if (returnFocus) triggerRef.current?.focus();
    },
    [],
  );

  // Navigating away should never leave the panel hanging open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        close(true);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const focusItem = (index: number) => {
    const children = item.children ?? [];
    const next = (index + children.length) % children.length;
    itemRefs.current[next]?.focus();
  };

  const onTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => focusItem(0));
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusItem(index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusItem(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusItem(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusItem((item.children?.length ?? 1) - 1);
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  const menuId = "nav-projects-menu";

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* The label itself is a link, so "Projects" goes to the index page. */}
      <Link
        href={item.link}
        className="relative flex items-center text-sm !cursor-pointer text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
      >
        <span className="block sm:hidden">{item.icon}</span>
        <span>{item.name}</span>
      </Link>

      {/* Opening the panel is a separate control so touch users are not forced
          to navigate just to see the categories. */}
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={item.name}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
        className="ml-1 flex h-5 w-5 items-center justify-center rounded text-neutral-600 transition hover:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/70 dark:text-neutral-50 dark:hover:text-neutral-300"
      >
        <Caret open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={item.name}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-[5100] mt-4 w-[17rem] -translate-x-1/2 overflow-hidden rounded-xl border border-white/[0.14] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(12, 16, 30, 0.97)",
            }}
          >
            {(item.children ?? []).map((child, index) => (
              <Link
                key={child.link}
                href={child.link}
                role="menuitem"
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                onKeyDown={(event) => onItemKeyDown(event, index)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-neutral-200 transition hover:bg-white/[0.07] hover:text-white focus:bg-white/[0.07] focus:text-white focus:outline-none"
              >
                <span>{child.name}</span>
                {typeof child.count === "number" && (
                  <span className="shrink-0 rounded-md border border-white/[0.1] bg-white/[0.05] px-1.5 py-0.5 text-xs text-neutral-400">
                    {child.count}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) =>
          navItem.children?.length ? (
            <NavDropdown key={`nav-${idx}`} item={navItem} />
          ) : (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};
