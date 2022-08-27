type Props = {
  skill: string
}

function SkillButton({ skill }: Props) {
  return (
    <div className='skill-button'>
      <p>{skill}</p>
    </div>
  )
}

export default SkillButton
