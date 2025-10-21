const GitHubStats = () => {
  return (
    <div className="py-20" id="stats">
      <h1 className="heading">
        My <span className="text-purple">GitHub Stats</span>
      </h1>
      
      <div className="w-full mt-12 flex flex-col items-center gap-8">
        {/* GitHub Stats Card */}
        <div className="w-full max-w-4xl flex justify-center">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=dennislee928&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=CBACF9&icon_color=CBACF9&text_color=FFFFFF" 
            alt="Dennis's GitHub Stats"
            className="w-full max-w-md"
          />
        </div>

        {/* GitHub Trophies */}
        <div className="w-full max-w-6xl flex justify-center">
          <img 
            src="https://github-profile-trophy.vercel.app/?username=dennislee928&theme=onedark&rank=SECRET,SSS,SS,S,AAA,AA,A,BBB,BB,B&no-frame=true&no-bg=true&margin-w=4&column=4" 
            alt="GitHub Trophies"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;

