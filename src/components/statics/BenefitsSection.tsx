import { ImageIcon } from "../../svgs/MediaIcons";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <ImageIcon />,
      title: "Lightning Fast",
      description: "Everything happens in your browser, almost no waiting time",
    },
    {
      icon: <ImageIcon />,
      title: "Secure & Private",
      description:
        "Your files are processed locally in browser and automatically deleted",
    },
    {
      icon: <ImageIcon />,
      title: "24/7 Available",
      description: "Access our tools anytime, anywhere, from any device",
    },
  ];
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose MediaForge?
          </h2>
          <p className="text-xl text-gray-600">
            Built for speed, privacy, and simplicity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              We believe file conversion should be
              <span className="font-semibold">
                {" "}
                instant, private, and hassle-free{" "}
              </span>
              . Unlike traditional websites that upload your files to a remote
              server, our tools run{" "}
              <span className="font-semibold">entirely in your browser </span>
              using cutting-edge{" "}
              <span className="font-semibold"> WebAssembly technology</span>.
            </p>

            <ul className="text-left max-w-2xl mx-auto text-gray-700 space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>
                  <span className="font-semibold">
                    Zero uploads. Zero downloads.
                  </span>{" "}
                  Just results—fast.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>
                  <span className="font-semibold">Complete privacy.</span> Your
                  files never leave your device.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>
                  <span className="font-semibold">No waiting.</span> Conversions
                  happen instantly, without internet delays.
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              Whether you need to{" "}
              <span className="font-semibold">
                convert, compress, or optimize
              </span>{" "}
              images, PDFs, or other formats, we make it happen{" "}
              <span className="font-semibold">right here, right now</span>—with
              the
              <span className="font-semibold"> speed of native apps</span> and
              the convenience of the web.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mt-10 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">No More:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Worrying about sensitive files being stored somewhere.</li>
                <li>Waiting minutes for uploads and downloads.</li>
                <li>Being limited by slow internet.</li>
              </ul>
            </div>

            <p className="text-xl font-semibold text-gray-900 mt-10">
              We’re here to give you{" "}
              <span className="text-green-500">
                control, speed, and peace of mind
              </span>
              —all in one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
