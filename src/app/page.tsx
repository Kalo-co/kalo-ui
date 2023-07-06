export default function Home() {
  const projects = [
    {
      name: 'Upside',
      progress: '50%'
    },
    {
      name: 'Shopify App',
      progress: '50%'
    },
    {
      name: 'Chat App',
      progress: '30%'
    },
    {
      name: 'Vercel',
      progress: '90%'
    }
  ]
  const projectCard = (name: string, progress: string) => (
    <div className={`relative w-[267.10px] h-[133.64px] cursor-pointer hover:scale-105
      bg-gradient-to-l from-indigo-400 to-sky-600 rounded-lg shadow-inner`}
    >
      <div className="w-full absolute bottom-0 px-8 py-4 text-white">
        <p className="font-semibold text-lg">{name}</p>
        <div className="w-full border rounded-md mt-2 h-[8px]">
          <div className={`bg-white h-full`} style={{ width: progress }}></div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-white rounded-md px-20 py-8 flex'>
        <div className="grid gap-4">
          <div className="grid gap-2 lg:max-w-[412px]">
            <h1 className='text-2xl font-bold'>Dashboard de proyectos</h1>
            <p className='text-sm text-[#A4A4A4]'>Explora los proyectos en los que estás trabajando y revisa el estado en el que se encuentran</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {
              projects.map((project) => projectCard(project.name, project.progress))
            }
          </div>
        </div>

      </div>
    </main>
  )
}
