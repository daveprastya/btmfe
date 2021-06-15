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
            src="https://lh3.googleusercontent.com/LTtcL7ILZXVlf1cidYr7Lkg2uUGK2y3wuTRSIikYb406kZi9mBWRxdwsbFitv58jl0lm6J4Z5R27W4j4RWS23bmsiGe0HlQLKRx1r-026ueggHvpqQk0eE7izfA2jEPWQHxHG3IQ6nSOI_eR6zLnEAg6j7vyAP3QLHMgj07j9-jnzFkj_g92N7KiIp7Xgm_GGRJyCS-bM330omL0T1f0ZKjj2kMvcAv7fEpppUMpSgcOWFe4MbHmGLGJqdTskcjHdztt7V0oyiS7Z84v1ZTle05yJI_SHotMiu4OKQ1bKow0wPy-0MFMrBIy4db7WPTKNU8dtPrccsf464zxiVkFCma6N9k2ymLnS7spiJAlZNmuEa40WHZDZihPxpHNXqHLeq8XLB6jpxt5hMULg9e_1V08zaYeGNqMhhvI3k_NYGB8yxrnc3fAWwVaSfL8W5gL_yOPoPw8t45kAYz4yK5wbuvLjlw_Sp3qcg5S6pZKRZdixS8Zw12R1xEwGPyXz91_sIT511Xdmk0ELKRwdVFVTrvNJCxZQgb2Yc_SbZCm40RD23Pz0SiVGNtyrG0gALqb0v-RxNIi8GbaMMUcZxiIyxT10UFx5j_8iVaKD3-h4z4sCmEW8_MKMwTh7i0iBdT3iZUBHqbpP7AOSctuDHbvMZu1Uloby905JNCircesJuniRYxm-69OUNkEGo0nPXEDjbLKsf5iHr6jQB3ut3pdFT_Nhw=s20-no?authuser=0"
          />
        </div>
        <div className="bg-white h-10 w-10 rounded-full flex items-center">
          <i className="fab fa-youtube m-auto" />
        </div>
      </div>
    </div>
  );
}
