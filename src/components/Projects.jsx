import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { useTranslation } from 'react-i18next';

const projectsData = [
{
  src: 'https://youtu.be/WapFMemXyRg',
  hashtags: ['printing house', 'background', 'text animation', 'mask', 'mask animation'],
},
{
  src: 'https://youtu.be/FNuRJMy4mn0',
  hashtags: ['introductory video', 'transitions', 'text animation', 'sound effects', 'background music'],
},
{
  src: 'https://youtu.be/mvBJG_KaWM8',
  hashtags: ['transitions', 'text animation', ' background music'],
},
{
  src: 'https://youtu.be/-R7VvY3mXXE',
  hashtags: ['funny moments', 'roblox evade', 'subtitles', 'memes', 'sfx', 'vfx'],
},
{
  src: 'https://youtu.be/U0O8IsJtABg',
  hashtags: ['funny moments', 'roblox strongest battlegrounds', 'subtitles', 'memes', 'sfx', 'vfx'],
},
{
  src: 'https://youtu.be/PZCsXPODcGs',
  hashtags: ['funny moments', 'roblox strongest battlegrounds', 'subtitles', 'memes', 'sfx', 'vfx'],
}
]

const Project = ({data}) => {
  return (
      <li className="video-container">
        <div className="video-responsive">
        <ReactPlayer 
        className="video-player" 
        url={data.src} 
        controls={true}
        />
        </div>
        <div className="video-hashtags">
        {data.hashtags.map(hashtag => (
        <div className="video-hashtag">{hashtag}</div>
      ))}
        </div>
      </li>
    );
};


const Projects = () => {

  const { t } = useTranslation();
  return (
      <div className="projects" id='projects'>
      <h1>{t('portfolio.name')}</h1>
      <ul className="videos">
      {projectsData.map(project => (
        <Project data={project} />
      ))}
      </ul>
      </div>
  );
};

export default Projects;