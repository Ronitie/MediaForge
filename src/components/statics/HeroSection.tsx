import { Button } from "../Button";

export function HeroSection() {
  return (
    <section className="py-20 px-4 h-svh">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-900 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight">
          Convert and compress Your files
          <br />
          <span className="text-4xl md:text-5xl">In Seconds</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Convert, compress, and optimize images, PDF files with our powerful in
          browser tools. No data is sent, everything happens in your browser.
          That means very less waiting for processing your files!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg">
            <a href="#tools-section">Start Processing</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
