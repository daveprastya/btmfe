export default function Header() {
  return (
    <div
      className="pt-7 text-white"
      style={{
        height: "866px",
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/dave-test-apps.appspot.com/o/files%2FImages%20Header%20BTM.jpg?alt=media&token=6a48a1ff-7323-431b-a808-3ef0a83072d3')",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="text-4xl text-center px-6">
        <p>
          BEAUTY THAT MOVES <span className="text-base">by </span>
          Wardah
        </p>
      </div>
      <div className="md:text-8xl text-5xl text-center mt-80 font-light">
        <p>BEAUTY THAT MOVES</p>
      </div>
    </div>
  );
}
