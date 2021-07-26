import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MediaCard from './MediaCard'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import DeliveryAnimation from '../../animations/Delivery.animation'
import SmallmoveAnimation from '../../animations/SmallMove.animation'
import ShoppingAnimation from '../../animations/Shopping.animation'
import CraigAnimation from '../../animations/Craig.animation'
import DonationAnimation from '../../animations/Donation.animation'
import DusttruckAnimation from '../../animations/Dusttruck.animation'

const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%'
  }
})
const theme = {
  spacing: 8
}
export default function CardContainer () {
  const classes = useStyles()
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hidden')
    }
  }, [animation, inView])

  const CardInfo = [
    {
      image: <DeliveryAnimation />,
      title: 'Web Development',
      text:
        ' Services for Website development with  technOLOGY stacks like  React JS, and Next JS   '
    },
    {
      image: <SmallmoveAnimation />,
      title: 'Mobile Apps',
      text:
        ' Services for Mobile application development for Android, and IOS using  React Native Platfoam.'
    },

    {
      image: <CraigAnimation />,
      title: 'Wordpress',
      text:
        ' Services of wordpress Development  to create  ecommerce ,blogs  bussiness portfolio & POS websites  '
    },
    {
      image: <ShoppingAnimation />,
      title: 'PWA',
      text:
        '  Services of Progressive Web Apps  that can be installed on your android and ios mobile devices  and computers  '
    },
    {
      image: <DonationAnimation />,
      title: 'Designing',
      text:
        ' Services of UI/UX design to help create user-friendly interfaces that enable users to understand how to use software products '
    },
    {
      image: <DusttruckAnimation />,
      title: 'Social Media Marketing',
      text:
        ' Services of  Social media marketing using social media platfoamns to connect with you audience to build you brand & increase sales '
    }
  ]
  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <div id='tech'>
        <Box ml={2}>
          <Grid container direction='row' justify='center'>
            <Grid item lg={10}>
              <Box
                m={1}
                display='grid'
                justifyContent='center'
                alignItems='center'
              >
                <Hidden mdDown>
                  <Box
                    mt={2}
                    display='grid'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <motion.div
                      initial={{ x: '100vw' }}
                      animate={{ x: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                    >
                      <Typography variant='h4' gutterBottom color='textPrimary'>
                        Our Services
                      </Typography>
                    </motion.div>
                    <motion.div
                      initial={{ x: '-100vw' }}
                      animate={{ x: 0 }}
                      transition={{ delay: 1, duration: 1.5 }}
                    >
                      <img
                        src='/Assets/divider.png'
                        style={{
                          width: '100%',
                          height: '12px',
                          padding: '5px'
                        }}
                        nitial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ delay: 2 }}
                      />
                    </motion.div>
                  </Box>
                  <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, duration: 2 }}
                  >
                    <Typography variant='h3' gutterBottom color='textPrimary'>
                      Just relax at home We will take care
                    </Typography>
                  </motion.div>
                </Hidden>
              </Box>
            </Grid>

            <Grid item xs={12} lg={12}>
              <Box
                mt={5}
                display='grid'
                justifyContent='center'
                alignItems='center'
              >
                <Hidden lgUp>
                  <Box
                    display='grid'
                    justifyContent='center'
                    alignItems='center'
                  >
                    <motion.div
                      initial={{ x: '100vw' }}
                      animate={{ x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <Typography variant='h4' gutterBottom color='textPrimary'>
                        Our Services
                      </Typography>
                    </motion.div>
                    <motion.div
                      initial={{ x: '-100vw' }}
                      animate={{ x: 0 }}
                      transition={{ delay: 1, duration: 1.5 }}
                    >
                      <img
                        src='/Assets/divider.png'
                        style={{
                          width: '100%',
                          height: '12px',
                          padding: '5px'
                        }}
                      />
                    </motion.div>
                  </Box>
                  <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, duration: 2 }}
                  >
                    <Typography
                      variant='body1'
                      gutterBottom
                      color='textPrimary'
                    >
                      We believe in delivering premier services with cutting
                      edge and forefront technology
                    </Typography>
                  </motion.div>
                </Hidden>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          {CardInfo.map(about => (
            <>
              <Grid item xs={12} sm={6} md={3} lg={4}>
                <MediaCard
                  aboutImage={about.image}
                  aboutTitle={about.title}
                  aboutText={about.text}
                />
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </motion.div>
  )
}
// nothing has changed here as well
