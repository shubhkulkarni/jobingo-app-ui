import Constants from "../../constants";

const HeroFooter = () => {
  return (
    <>
      <div
        className="hero-footer-main text-sm md:text-md
      w-full text-center py-4 bg-black bg-opacity-60 text-gray-300"
      >
        Designed & Developed with ❤️ by{" "}
        <a
          target="_blank"
          href={Constants.GITHUB_URL}
          className="github-link text-blue-400 font-semibold"
        >
          @shubhkulkarni
        </a>
      </div>
    </>
  );
};

export default HeroFooter;
