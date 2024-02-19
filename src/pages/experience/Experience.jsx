export function Experience() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <div className="w-full">
          <div className="w-full flex justify-center text-5xl font-bold text-[#272727] mt-6">
            <p className="w-3/4 text-center">Experiencia laboral como desarrollador de software</p>
          </div>
          <div className="mt-16 flex justify-center">
            <p className="w-4/6 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates fuga odit veniam nulla cumque sit provident in eos,
              sequi dolor dolorum molestias perspiciatis blanditiis placeat
              molestiae quis voluptatum maiores exercitationem?
            </p>
          </div>
        </div>
        <section className="mt-16">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#123ad3]">
                  <h3 className="text-3xl font-semibold">Morbi tempor</h3>
                  <span className="text-sm font-bold tracki uppercase text-gray-400">
                    Vestibulum diam nunc
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#123ad3]">
                    <h3 className="text-xl font-semibold tracki">
                      Donec porta enim vel{" "}
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Dec 2020
                    </time>
                    <p className="mt-3">
                      Pellentesque feugiat ante at nisl efficitur, in mollis
                      orci scelerisque. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#123ad3]">
                    <h3 className="text-xl font-semibold tracki">
                      Aliquam sit amet nunc ut
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Jul 2019
                    </time>
                    <p className="mt-3">
                      Morbi vulputate aliquam libero non dictum. Aliquam sit
                      amet nunc ut diam aliquet tincidunt nec nec dui. Donec
                      mollis turpis eget egestas sodales.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#123ad3]">
                    <h3 className="text-xl font-semibold tracki">
                      Pellentesque habitant morbi
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      Jan 2016
                    </time>
                    <p className="mt-3">
                      Suspendisse tincidunt, arcu nec faucibus efficitur, justo
                      velit consectetur nisl, sit amet condimentum lacus orci
                      nec purus. Mauris quis quam suscipit, vehicula felis id,
                      vehicula enim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
