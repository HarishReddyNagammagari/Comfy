const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h4 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          we love
        </h4>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio itaque ex
        beatae sed quis pariatur fuga dolorem doloribus veniam voluptate!
      </p>
    </>
  );
};

export default About;
