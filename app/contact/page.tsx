const Contact = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Entre em Contato
        </h1>

        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Informações de Contato</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="mr-3 h-6 w-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l4-4m0 0l4 4m-4-4v12"
                ></path>
              </svg>
              <p className="text-gray-700">Endereço: Av. das Nações Unidas</p>
            </div>

            <div className="flex items-center">
              <svg
                className="mr-3 h-6 w-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <p className="text-gray-700">
                Central de atendimento: (16) 9999-9999
              </p>
            </div>

            <div className="flex items-center">
              <svg
                className="mr-3 h-6 w-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h4m2 0h4m-6-4h4m2 0h2M4 6h2m2 0h2m2 0h2m2 0h2m2 0h2"
                ></path>
              </svg>
              <p className="text-gray-700">Email: 9sEzy@example.com</p>
            </div>
          </div>
        </div>

        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Seu Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-gray-700"
            >
              Sua Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contact
