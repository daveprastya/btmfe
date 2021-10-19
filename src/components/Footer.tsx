export default function Footer() {
  return (
    <div className="text-white bg-wardah-primary">
      {/* <div className="py-7">
        <div className="text-center text-xl pb-6 px-9 md:text-3xl md:w-7/12 m-auto font-light leading-none">
          <p>
            <span className="mr-1 font-semibold">Beauty That Moves</span>is a
            movement Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="md:w-full w-3/6 m-auto text-center text-base leading-none">
          <p className="mr-1 md:text-lg font-thin">
            Visit our website at
            <span>
              {" "}
              <a
                className="underline font-medium"
                href="http://www.wardahbeauty.com"
              >
                www.wardahbeauty.com
              </a>
            </span>
          </p>
        </div>
      </div> */}
      <div className="flex flex-row border-t-1 border-opacity-5 md:mx-28 mx-3 py-8 place-content-center space-x-4 text-wardah-primary">
        <a href="https://www.instagram.com/wardahbeauty/" target="_blank">
          <div className="bg-white h-10 w-10 rounded-full flex items-center">
            <i className="fab fa-instagram m-auto text-xl" />
          </div>
        </a>
        <a href="https://www.facebook.com/wardahbeauty" target="_blank">
          <div className="bg-white h-10 w-10 rounded-full flex items-center">
            <i className="fab fa-facebook-f m-auto" />
          </div>
        </a>
        <a href="https://twitter.com/wardahbeauty" target="_blank">
          <div className="bg-white h-10 w-10 rounded-full flex items-center">
            <i className="fab fa-twitter m-auto" />
          </div>
        </a>
        {/* <a href="tel:628041401123" target="_blank">
          <div className="bg-white h-10 w-10 rounded-full flex items-center">
            <i className="fas fa-phone-alt m-auto" />
          </div>
        </a> */}
        <a href="https://api.whatsapp.com/send/?phone=6287701123000&text&app_absent=0" target="_blank">
          <div className="bg-white h-10 w-10 rounded-full flex items-center">
            <img
              className="m-auto"
              src="https://firebasestorage.googleapis.com/v0/b/dave-test-apps.appspot.com/o/files%2FVector.png?alt=media&token=6d0a94ab-8c61-4001-9954-cc997f916451"
            />
          </div>
        </a>
        <a href="https://www.youtube.com/user/WardahBeauty" target="_blank">
          <div className="bg-white h-10 w-10 rounded-full flex items-center">
            <i className="fab fa-youtube m-auto" />
          </div>
        </a>
      </div>
    </div>
  );
}
