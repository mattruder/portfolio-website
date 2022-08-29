import SoftwareBio from './SoftwareBio'
import SoftwareVideo from './SoftwareVideo'
import SoftwareExperience from './SoftwareExperience'
import AllSkillButtons from './AllSkillButtons'
import '../Styles/SoftwarePage.css'

function SoftwarePage() {
  return (
    <div className="software-page">
      <h2>Bio</h2>
      <SoftwareBio />
      <h2>Skills</h2>
      <AllSkillButtons />
      <h2>Links</h2>
      <SoftwareExperience />
    </div>
  )
}

export default SoftwarePage
