"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(function TabsList(
  { className, ...props },
  ref
) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={`inline-flex h-10 items-center justify-center text rounded-md gap-4 ${className}`}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(function TabsTrigger(
  { className, ...props },
  ref
) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={`inline-flex items-center justify-center whitespace-nowrap px-6 py-2 rounded-md border border-cyan-900 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-cyan-700 data-[state=active]:text-white data-[state=active]:shadow-sm ${className}`}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(function TabsContent(
  { className, ...props },
  ref
) {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 ${className}`}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
