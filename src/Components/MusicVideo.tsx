import '../Styles/MusicVideo.css'

function MusicVideo() {
  return (
    <div className="music-videos">
      <div className='video'>
        <iframe src="https://www.youtube.com/embed/EaQJX3xL01g" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='video'>
        <iframe src="https://www.youtube.com/embed/GfAlm1m5T5k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='video'>
        <iframe src="https://www.youtube.com/embed/imfwV7Ac_ek" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default MusicVideo
