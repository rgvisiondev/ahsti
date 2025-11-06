"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

type TabsVariant = "default" | "blue" | "pills"

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  variant?: TabsVariant
}

// --- Context for variant propagation ---
const TabsVariantContext = React.createContext<TabsVariant>("default")

function useTabsVariant() {
  return React.useContext(TabsVariantContext)
}

// --- Tabs Root ---
function Tabs({ className, variant = "default", ...props }: TabsProps) {
  return (
    <TabsVariantContext.Provider value={variant}>
      <TabsPrimitive.Root
        data-slot="tabs"
        data-variant={variant}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      />
    </TabsVariantContext.Provider>
  )
}

// --- Tabs List ---
function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const variant = useTabsVariant()

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(
        "inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "blue" && "bg-blue-100 text-black py-6",
        className
      )}
      {...props}
    />
  )
}

// --- Tabs Trigger ---
function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const variant = useTabsVariant()

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      data-variant={variant}
      className={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        variant === "default" &&
          "text-foreground dark:text-muted-foreground data-[state=active]:bg-background dark:data-[state=active]:text-foreground data-[state=active]:text-foreground hover:text-primary hover:cursor-pointer",
        variant === "blue" &&
          "text-black data-[state=active]:bg-primary data-[state=active]:text-white p-5 hover:text-primary hover:cursor-pointer",
        variant === "pills" &&
          "rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

// --- Tabs Content ---
function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
