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
      </div>
    </section>
  );
}
