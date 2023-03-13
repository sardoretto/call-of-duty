import Layout from "../../Layout";
import Ikonkali from "./Ikonkali";

function HomeRoute() {
  return (
    <Layout>
      <Ikonkali />
      <div className="bg-white-500 grid grid-cols-2 mt-3 space-x-7 text-cyan">
        <div>
          <img src="/66.jpeg" className="w-[500px] mt-12 ml-8" />
        </div>
        <div>
          <p className="text-xl mt-24 mr-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the industry
          </p>
        </div>

        <div>
          <img src="/55.jpeg" className="w-[500px] mt-12" />
        </div>
        <div>
          <p className="text-xl mt-36 mr-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,sjahbdvkhc svkwnonw wecfwefwf wecfwefwffk e
            wefwefwdwlk Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default HomeRoute;
