export default function Header() {
  return (
    <div
      className="pt-7 text-white"
      style={{
        height: "866px",
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/dave-test-apps.appspot.com/o/files%2FImages%20Header%20BTM.jpg?alt=media&token=6a48a1ff-7323-431b-a808-3ef0a83072d3')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row text-4xl justify-center items-end space-x-1">
        <div>BEAUTY THAT MOVES</div>
        <div className="text-base items-end">by</div>
        <div>Wardah</div>
      </div>
      <div className="flex text-8xl h-full justify-center mt-80 font-light">
        BEAUTY THAT MOVES
      </div>
    </div>
  );
}
