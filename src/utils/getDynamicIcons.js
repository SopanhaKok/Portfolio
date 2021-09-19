import * as Icons from 'react-icons/fa'

const DynamicFaIcon = ({ name, ...props }) => {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaBeer {...props} />
  }

  return <IconComponent {...props} />
}

export default DynamicFaIcon
