
import youtubeLogo from './assets/youtube-logo.svg'
import tiktokLogo from './assets/tiktok-logo.svg'
import linkedinLogo from './assets/linkedin-logo.svg'
import twitchLogo from './assets/twitch-logo.svg'
import githubLogo from './assets/github-logo.svg'

import { Button } from './components/button'
import { ProfilePic } from './components/profile-pic'

import './App.css'

function App() {

  return (
    <>
      <ProfilePic/>
      <h1>Lucas</h1>
      <p className='about-me'>
        Oi, eu sou o Lucas!
        <br/>Aqui você encontra os principais
        locais onde acessar meu conteúdo.
      </p>

      <div className='button-grid'>
        <Button title="YouTube" link="http://www.youtube.com" icon={youtubeLogo}/>
        <Button title="TikTok" link="http://www.tiktok.com/@lucasdcorreia" icon={tiktokLogo}/>
        <Button title="Twitch" link="http://www.twitch.tv/lucasdcorreia" icon={twitchLogo}/>
        <Button title="LinkedIn" link="https://www.linkedin.com/in/lucasdcorreia" icon={linkedinLogo}/>
        <Button title="GitHub" link="http://github.com/lucasdcorreia" icon={githubLogo}/>
      </div>

    </>
  )
}

export default App
