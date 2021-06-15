export default function Footer() {
  return (
    <div className="text-white" style={{
      backgroundColor:'#7FC7C6'
    }}>
      <div className="py-7">
        <div className="text-center text-xl pb-7 px-6 md:text-3xl md:w-7/12 md:m-auto">
          <p>
            <span className="mr-1 font-bold">Beauty That Moves</span> is a
            movement Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:justify-center text-center text-base">
          <p className="mr-1 md:text-lg">Visit our website at</p>
          <a className="underline" href="http://www.wardahbeauty.com">
            www.wardahbeauty.com
          </a>
        </div>
      </div>
      <div className="flex flex-row border-t-1 border-opacity-5 md:mx-28 mx-3 py-8 text-blue-300 place-content-center space-x-4">
        <div className="bg-white h-10 w-10 rounded-full flex items-center">
          <i className="fab fa-instagram m-auto text-xl" />
        </div>
        <div className="bg-white h-10 w-10 rounded-full flex items-center">
          <i className="fab fa-facebook-f m-auto" />
        </div>
        <div className="bg-white h-10 w-10 rounded-full flex items-center">
          <i className="fab fa-twitter m-auto" />
        </div>
        <div className="bg-white h-10 w-10 rounded-full flex items-center">
          <i className="fas fa-phone-alt m-auto" />
        </div>
        <div className="bg-white h-10 w-10 rounded-full flex items-center">
          <img
            className="m-auto"
            src="https://firebasestorage.googleapis.com/v0/b/dave-test-apps.appspot.com/o/files%2FVector.png?alt=media&token=6d0a94ab-8c61-4001-9954-cc997f916451"
          />
        </div>
        <div className="bg-white h-10 w-10 rounded-full flex items-center">
          <i className="fab fa-youtube m-auto" />
        </div>
      </div>
    </div>
  );
}
