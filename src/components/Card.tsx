export default function Card() {
  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "300px",
      }}
    >
      <img src="https://picsum.photos/371/550" />
      <div className="bg-red-200 text-sm text-red-400 font-semibold self-start py-1 px-3 my-5">
        HEALTH
      </div>
      <div className="text-left">
        <p className="text-lg font-medium">Maryam</p>
        <p className="text-sm">Mahasiswa</p>
      </div>
      <div className="text-left my-5">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 ...
      </div>
      <div className="text-left text-blue-300 text-base font-semibold">
        <button className="border-1 border-gray-300 py-2 px-5">READ MORE</button>
      </div>
      <div className="absolute left-6 top-96">
        <button 
          className="py-2 px-5 w-64"
          style={{
            backgroundColor:'#006F7A',
          }}
          onClick={()=> console.log('button di klik')}
        >
          VOTE
        </button>
      </div>
    </div>
  );
}
