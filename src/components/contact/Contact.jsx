export default function Contact() {
  return (
    <section id="contact" className="text-gray-600  body-font ">
      <div className="container mx-auto flex px-5 py-24   items-center justify-center flex-col">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center lg:w-2/3 w-full"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Contact
          </h1>
          <p className="mb-8 leading-relaxed">
            Inspirational designs, illustrations, and graphic elements from the
            world’s best designers. Want more inspiration? Browse our search
            results...
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col items-center text-xl font-bold "
          >
            <div className="flex items-center space-x-2 ">
              <svg
                className="h-8 w-8 text-green-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -8.28 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 6h6m-3 -3v6" />
              </svg>
              <span className="">+213 662 72 92 24</span>
            </div>

            <div className="flex items-center space-x-2 ">
              <svg
                className="bi bi-envelope h-8 w-8 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <span className="">salimarts@yahoo.fr</span>
            </div>

            <div className="flex items-center space-x-2 ">
              <svg
                className="bi bi-linkedin h-8 w-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <span className="">Salim Mansouria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
