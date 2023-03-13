import Layout from "../../Layout";

function AboutRoute() {
  return (
    <Layout>
      <div className="bg-white-500 mt-3 text-cyan">
        <div className="grid grid-cols-4 gap-3 rounded-[15px]">
          <div>
            <img className="w-80" src="/44.jpeg" />
          </div>
          <div>
            <img className="w-80" src="/33.jpeg" />
          </div>
          <div>
            <img className="w-80" src="/11.jpeg" />
          </div>
          <div>
            <img className="w-80" src="/22.jpeg" />
          </div>
        </div>
        <h1 className="mt-3 font-bold text-3xl"> Call of Duty</h1>
        <p className="text-2xl mt-6 flex justify-center ">
          Call of Duty — серия компьютерных игр в жанре шутера от первого лица,
          выпускаемая американской компанией Activision. Разработкой игр серии
          занимались такие студии, как Infinity Ward, Treyarch и Sledgehammer
          Games.Call of Duty — серия компьютерных игр в жанре шутера от первого
          лица, выпускаемая американской компанией Activision. Разработкой игр
          серии занимались такие студии, как Infinity Ward, Treyarch и
          Sledgehammer Games.Call of Duty — серия компьютерных игр в жанре
          шутера от первого лица, выпускаемая американской компанией Activision.
          Разработкой игр серии занимались такие студии, как Infinity Ward,
          Treyarch и Sledgehammer Games.
        </p>
      </div>
    </Layout>
  );
}

export default AboutRoute;
