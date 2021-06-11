import Card from './Card';

export default function MainBody() {
  return (
    <div className="container px-28 text-center">
      <div className="text-6xl text-blue-300 font-light mt-14 mb-10">
        #BeautyThatMoves
      </div>
      <div className="text-lg px-52 mb-14">
        Who is the beauty that moves you? Be inspired by these women, or better
        yet, join the movement @women.in.movement
      </div>
      {/* Navigation */}
      <div className="flex place-content-center space-x-16 text-lg text-gray-400 font-medium">
        <div className="hover:text-blue-300 hover:border-b-4 pb-8 hover:pb-7 hover:border-blue-300 hover:font-semibold">
          <a href="">ALL</a>
        </div>
        <div className="hover:text-blue-300 hover:border-b-4 pb-8 hover:pb-7 hover:border-blue-300 hover:font-semibold">
          <a href="">EDUCATION</a>
        </div>
        <div className="hover:text-blue-300 hover:border-b-4 pb-8 hover:pb-7 hover:border-blue-300 hover:font-semibold">
          <a href="">ENVIRONTMENT</a>
        </div>
        <div className="hover:text-blue-300 hover:border-b-4 pb-8 hover:pb-7 hover:border-blue-300 hover:font-semibold">
          <a href="">HEALTH</a>
        </div>
      </div>
      {/* Content Card */}
      <div className="border-t-1 border-gray-400 py-12 flex flex-row flex-wrap place-content-between">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
