export default function Header() {
  return (
    <div
      className="md:pt-7 pt-4 text-white"
      style={{
        height: "866px",
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/dave-test-apps.appspot.com/o/files%2FImages%20Header%20BTM.jpg?alt=media&token=6a48a1ff-7323-431b-a808-3ef0a83072d3')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="md:text-4xl text-2xl text-center md:w-full w-9/12 m-auto mx-auto md:font-normal font-light md:flex md:justify-center">
        <div className="md:w-96 md:text-right md:mr-2">BEAUTY THAT MOVES </div>
        <div className="flex h-4 md:justify-start justify-center md:h-8 mt-1 md:w-40 md:hidden">
          <p className="text-xs">by</p>
          <img
            className="ml-1"
            src="https://firebasestorage.googleapis.com/v0/b/dave-test-apps.appspot.com/o/files%2Fwardah-white-logo.png?alt=media&token=f9bd2a71-1d12-4524-826a-43b384bb8672"
          />
        </div>
        <div className="text-base self-end ml-1 md:flex hidden">by</div>
        <img
            className="ml-1 hidden md:flex h-9 self-center mt-1"
            src="https://firebasestorage.googleapis.com/v0/b/dave-test-apps.appspot.com/o/files%2Fwardah-white-logo.png?alt=media&token=f9bd2a71-1d12-4524-826a-43b384bb8672"
          />
      </div>
      <div className="md:text-8xl text-5xl text-center mt-80 md:font-light font-thin">
        <p>BEAUTY THAT MOVES</p>
      </div>
    </div>
  );
}
