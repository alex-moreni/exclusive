const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-6">
      <main className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-center text-4xl font-bold">Sobre Nós</h1>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Quem Somos</h2>
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nesciunt sunt beatae mollitia, enim pariatur quibusdam voluptate
            tempora molestiae vitae possimus fuga. Quidem, similique. Nihil
            aliquid reprehenderit quasi modi voluptatem!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">O Que Fazemos</h2>
          <ul className="list-inside list-disc text-gray-700">
            <li>
              <strong>Pesquisas Peculiares:</strong> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Impedit nesciunt sunt beatae
              mollitia, enim pariatur quibusdam voluptate tempora molestiae
              vitae possimus fuga.
            </li>
            <li>
              <strong>Criações Malucas:</strong> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Impedit nesciunt sunt beatae
              mollitia, enim pariatur quibusdam voluptate tempora molestiae
              vitae possimus fuga.
            </li>
            <li>
              <strong>Eventos Inusitados:</strong> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Impedit nesciunt sunt beatae
              mollitia, enim pariatur quibusdam voluptate tempora molestiae
              vitae possimus fuga.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Nossa História</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta
            rem explicabo inventore modi, unde quia sequi, maiores sint
            assumenda sit deserunt illo tempora a minus saepe numquam debitis
            pariatur!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold">Nossos Valores</h2>
          <ul className="list-inside list-disc text-gray-700">
            <li>
              <strong>Curiosidade Sem Limites:</strong> Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
            </li>
            <li>
              <strong>Criatividade Desenfreada:</strong> Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
            </li>
            <li>
              <strong>Diversão em Primeiro Lugar:</strong> Lorem ipsum dolor
              sit, amet consectetur adipisicing elit.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">
            Curiosidades Aleatórias
          </h2>
          <ul className="list-inside list-disc text-gray-700">
            <li>
              <strong>Nossa Mascote:</strong> Lorem ipsum dolor sit, amet
              consectetur adipisicing elit.
            </li>
            <li>
              <strong>Superpotência Secreta:</strong> Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
            </li>
            <li>
              <strong>Gastronomia Alternativa:</strong> Lorem ipsum dolor sit,
              amet consectetur adipisicing elit.
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default About
