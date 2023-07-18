import './Footer.scss'

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className='footer'>
      <span>admin</span>
      <span>admin @ {currentYear}</span>
    </div>
  )
}

export default Footer
