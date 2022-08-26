import MusicBio from './MusicBio'
import MusicAudio from './MusicAudio'
import MusicVideo from './MusicVideo'


function MusicPage() {
  return (
    <div className='music-page'>
      <div className='music-elements'>
        <MusicBio />
        <MusicVideo />
        <MusicAudio />

      </div>
    </div>
  )
}

export default MusicPage
