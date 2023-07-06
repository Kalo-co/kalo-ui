import StatusCard from "@/components/StatusCard";
import ProjectsDashboard from "@/components/ProjectsDashboard";

export default function Home() {
  return (
    <div className="grid gap-10 items-center justify-between p-4 md:p-16 min-h-screen">
      <main>
        <ProjectsDashboard />
      </main>

      <section>
        <StatusCard />
      </section>
    </div>
  )
}
