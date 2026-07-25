import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/institutes")({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});
