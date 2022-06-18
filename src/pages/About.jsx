import {motion, AnimatePresence} from 'framer-motion';
import {FaAmilia, FaGithub, FaLinkedin} from 'react-icons/fa'

function About() {
const listStyle = {
    listStyle: 'disc',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '.1rem',
    color: 'rgb(191 149 249)'
  }

const styleTwo = {
    fontSize: '1.1rem',
    fontWeight: 600,
    letterSpacing: '.1rem',
    color: 'rgb(191 149 249)'
  }

const container = {
    hidden: { 
      opacity: 0,
      transform: 'translateX(-100%)'
      },
      show: {
        opacity: 1,
        transform: 'translateX(0%)',
        transition: {
        staggerChildren: 0.3
        }
      }
  }

const item = {
    hidden: {
      opacity: 0,
      transform: 'translateX(-100%)'
    },
    show: {
      opacity: 1,
      transform: 'translateX(0%)'
    }
  }

  const containerTwo = {
     hidden: { 
      opacity: 0,
      transform: 'translateX(100%)'
      },
      show: {
        opacity: 1,
        transform: 'translateX(0%)',
        transition: {
        staggerChildren: 0.3
        }
      }
  }

  const itemTwo = {
    hidden: {
      opacity: 0,
      transform: 'translateX(100%)'
    },
    show: {
      opacity: 1,
      transform: 'translateX(0%)'
    }
  }
 
  return (
    <div className='card'>
      <AnimatePresence>
        <motion.div
          className='flex justify-center'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          style={{color: 'rgb(191 149 249)'}}
          transition={{delay: .5 ,duration: 1}}>
        <h1 className='text-6xl mb-6'>About</h1>
        </motion.div>
      </AnimatePresence>
      <div className='flex justify-evenly  align-center'>
        <div>
        <AnimatePresence>
          <motion.ul style={listStyle}
            variants={container}
            initial="hidden"
            animate="show"
            className='flex gap-1'>
              <motion.h1 variants={item} className='text-2xl mb-4' style={{color: 'rgb(255 122 198)'}}>Build Using : </motion.h1>
              <motion.li variants={item}>React</motion.li>
              <motion.li variants={item}>React Context</motion.li>
              <motion.li variants={item}>Tailwind CSS</motion.li>
              <motion.li variants={item}>Daisyui</motion.li>
          </motion.ul>
          </AnimatePresence>
        </div>
        <AnimatePresence>
        <motion.div
          style={styleTwo}
          variants={containerTwo}
          initial="hidden"
          animate="show"
          className='flex-col justify-center align-center gap-1'>
            <motion.div variants={itemTwo} className='flex justify-center text-2xl mb-4' 
            style={{color: 'rgb(255 122 198)'}}>By Ahmed Hassan</motion.div>
            <motion.div variants={itemTwo}>
                <a href='mailto:alzain31999@gmail.com' 
                className='btn btn-ghost btn-sm rounded-btn flex align-center justify-around'>
                    <p>Contact Devoloper </p>
                    <FaAmilia className='m-auto'/>
                </a>
            </motion.div>
            <motion.div variants={itemTwo}>
                <a href='https://github.com/u31999'
                 target='_blank' rel='noreferrer'
                 className='btn btn-ghost btn-sm rounded-btn flex align-center justify-around'>
                    <p>My Github Account</p>
                    <FaGithub />
                </a>
            </motion.div>
            <motion.div variants={itemTwo}>
                <a href='https://www.linkedin.com/in/ahmed-hassan-elzain/'
                 target='_blank' rel='noreferrer'
                 className='btn btn-ghost btn-sm rounded-btn flex align-center justify-around gap-1'>
                    <p>My Linkedin Account</p>
                    <FaLinkedin />
                </a>
            </motion.div>
            <motion.div variants={itemTwo}>
                <a href='https://u31999.github.io/Portfolio'
                  target='_blank' rel='noreferrer' 
                  className='btn btn-ghost btn-sm rounded-btn flex align-center justify-around'>
                    <p>Go To My Portfolio</p>
                </a>
            </motion.div>
        </motion.div>
        </AnimatePresence>
      </div>
              
    </div>
  )
}

export default About
