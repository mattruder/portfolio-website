import MusicBio from './MusicBio'
import MusicAudio from './MusicAudio'
import MusicVideo from './MusicVideo'
import '../Styles/MusicPage.css'


function MusicPage() {
  return (
    <div className='music-page'>
      <div className='music-elements'>
        <h2>Bio</h2>
        <MusicBio />
          <div className="music-media">
            <h2>Video</h2>
            <MusicVideo />
            <h2>Audio</h2>
            <MusicAudio />
          </div>
      </div>
    </div>
  )
}

export default MusicPage
