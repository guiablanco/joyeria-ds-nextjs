import LinksGallery from './components/linksGallery'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-6">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h1>Bienvenido a la Joyería en Plata "Damaris Sandoval"</h1>
          <h1>***Página de muesta, aún no está operativa</h1>
          <LinksGallery></LinksGallery>
        </div>

      </div>
    </main>
  )
}
