import SoftwareBio from './SoftwareBio'
import SoftwareVideo from './SoftwareVideo'
import SoftwareExperience from './SoftwareExperience'
import AllSkillButtons from './AllSkillButtons'
import '../Styles/SoftwarePage.css'

function SoftwarePage() {
  return (
    <div className="software-page">
      <SoftwareBio />
      <AllSkillButtons />
      <SoftwareExperience />
    </div>
  )
}

export default SoftwarePage
