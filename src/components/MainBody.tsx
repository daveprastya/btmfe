import WebContent from "./WebContent";
import MobileContent from "./MobileContent";

export default function MainBody() {
  const datas = [
    {
      name: "Maryam",
      job: "Mahasiswa",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "EDUCATION",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Amirah",
      job: "Pelajar",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "HEALTH",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Siti Fatimah H...",
      job: "Entepreneur",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "ENVIRONTMENT",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Maryam",
      job: "Mahasiswa",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "EDUCATION",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Amirah",
      job: "Pelajar",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "HEALTH",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Siti Fatimah H...",
      job: "Entepreneur",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "ENVIRONTMENT",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Maryam",
      job: "Mahasiswa",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "EDUCATION",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Amirah",
      job: "Pelajar",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "HEALTH",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Siti Fatimah H...",
      job: "Entepreneur",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "ENVIRONTMENT",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Maryam",
      job: "Mahasiswa",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "EDUCATION",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Amirah",
      job: "Pelajar",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "HEALTH",
      image: "https://picsum.photos/371/550",
    },
    {
      name: "Siti Fatimah H...",
      job: "Entepreneur",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 ...",
      category: "ENVIRONTMENT",
      image: "https://picsum.photos/371/550",
    }
  ];


  return (
    <div className="text-center">
      <div className="md:text-6xl text-4xl text-blue-300 font-light mt-14 mb-10">
        #BeautyThatMoves
      </div>
      <div className="md:text-lg text-base md:px-52 px-8 mb-14">
        Who is the beauty that moves you? Be inspired by these women, or better
        yet, join the movement @women.in.movement
      </div>
      <div className="md:flex md:flex-col hidden mx-32">
        <WebContent datas={datas} />
      </div>
      <div className="md:hidden">
        <MobileContent datas={datas} />
      </div>
    </div>
  );
}
