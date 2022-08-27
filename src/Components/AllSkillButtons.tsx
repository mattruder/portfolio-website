import SkillButton from './SkillButton'

function AllSkillButtons() {

  const skills: string[] = ['Atom', 'Bootstrap', 'Chai', 'Chrome', 'Cypress', 'Facebook', 'Git', 'Github',
'Google', 'JavaScript', 'LinkedIn', 'Mocha', 'Npm', 'React', 'SaaS', 'TypeScript', 'User Experience Design/UX', 'User Interface Design/UI',
'Windows 8', 'Wordpress']

  const allSkills = skills.map((skill) => {
    return (
      <SkillButton skill={skill} />
    )
  })


  return (
    <div>
      {allSkills}
    </div>
  )
}

export default AllSkillButtons
