export default function Home() {
  return (
     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Eu Sou o Chassi Home  SSG e sou multizones !
        </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">{new Date().toISOString()}</h2>
          <a href="/perfil" className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Acessar aba de Perfil
          </a>
          <a href="/dash-ssr" className="mt-4 inline-block rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Acessar aba de Dash SSR
          </a>
          <a href="/login-angular" className="mt-4 inline-block rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Acessar aba de Login Angular
          </a>
      </main>
    </div>
  );
}
