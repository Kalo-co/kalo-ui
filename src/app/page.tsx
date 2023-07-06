import ProjectCard from "@/components/ProjectCard"
import DeliveryDetails from "@/components/DeliveryDetails";
import { projects } from "@/data/projects";
import Accordeon from "@/components/Accordeon";
import StatusCard from "@/components/StatusCard";
import ProjectsDashboard from "@/components/ProjectsDashboard";

export default function Home() {




  return (
    <div className="grid gap-10 items-center justify-between p-16 min-h-screen">
      <main>
        <ProjectsDashboard />
      </main>

      <section>
        <StatusCard />
      </section>
    </div>
  )
}
