import MusicBio from './MusicBio'
import MusicAudio from './MusicAudio'
import MusicVideo from './MusicVideo'
import '../Styles/MusicPage.css'


function MusicPage() {
  return (
    <div className='music-page'>
      <div className='music-elements'>
        <MusicBio />
        <div className="music-media">
        <MusicVideo />
        <MusicAudio />
        </div>
      </div>
    </div>
  )
}

export default MusicPage
