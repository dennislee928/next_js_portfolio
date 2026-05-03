"use client";

const GitHubStats = () => {
  return (
    <div className="py-20" id="stats">
      <h1 className="heading">
        My <span className="text-purple">GitHub Stats</span>
      </h1>

      <div className="w-full mt-12 flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-4">
          <img
            src="https://github-readme-stats.zcy.dev/api?username=dennislee928&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&theme=tokyonight"
            alt="Dennis's GitHub stats"
            className="hover:scale-105 transition-transform duration-300"
          />
          
          <a href="https://github.com/dennislee928/github-readme-stats&theme=tokyonight" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github-readme-stats.zcy.dev/api/top-langs?username=dennislee928&layout=donut"
              alt="Top Langs"
              className="hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="https://github-readme-stats.zcy.dev/api?username=dennislee928&rank_icon=percentile&theme=tokyonight"
            alt="Dennis's GitHub stats"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
