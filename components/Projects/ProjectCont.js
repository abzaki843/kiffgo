import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import ProjectsOdd from './ProjectsOdd'
import ProjectsEven from './ProjectsEven'
import ProjectsSm from './ProjectsSm'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%'
  }
})
const theme = {
  spacing: 2
}
export default function ProjectContainer () {
  const classes = useStyles()
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('')
    }
  }, [animation, inView])

  const projectInfo = [
    {
      image: '/Assets/pickup.png',
      title: 'Jamcommerce',
      Text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
      feature1:
        'It provides powerful framework so that no high customizability is needed everything is already done for you and only minor additions are needed.',
      feature2:
        'It has E-Commerce Store which is blazing fast due to usage of Next JS ',
      feature3:
        'It has  sections and information blocks  display content and images on your store strategically so visitors can quickly find the information they need.',
      feature4:
        ' No need to use any 3rd Party Pre-made Cart technology we use snip cart as a backend for cart operation handling. ',
      href: 'https://jamcommerce-pro.vercel.app/'
    },
    {
      image: '/Assets/delivery.png',

      title: 'Covid 19',
      Text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
      feature1:
        ' Complete details about COVID-19 that include General Information, Wrong Myths, Precautionary Measures, and Symptoms',
      feature2:
        'Global COVID-19 Count which is up to date and is refreshed every day to keep data up to date.',
      feature3:
        '  COVID-19 cases for a specific country using the Country Wise Cases Search and see all relevant information all at once.',
      feature4:
        'developed using PWA intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices ',
      href: 'https://covid19-black.vercel.app/'
    },
    {
      image: '/Assets/orderetail.png',

      title: 'Tours De North',
      Text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
      feature1:
        '  Detailed info about different tourist attraction site in Northeren Areas of Pakistan ',
      feature2: 'Details about pervious tours clicks and activities',
      feature3:
        ' It provides detailed information about different packages offered  ',
      feature4:
        '  It  Provides facility for online booking according to package one wills',
      href: 'https://toursdenorth.com/'
    },
    {
      image: '/Assets/order.png',

      title: 'Steamskinstore',
      Text:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries ',
      feature1:
        '  Payment via EasyPaisa and Bank Transfer for Pakistani Customer ',
      feature2:
        'A Single Sale Point for all Type and Categories of Custom Game Skins',
      feature3: ' Fast and Responsive Site made using Next JS ',
      feature4:
        ' Use of Latest JAM Commerce Technology and 3rd Party Cart free.',
      href: 'https://steamskinstore.com/'
    }
  ]
  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <div className={classes.divider} id='projects'>
        <Grid container justify='center' alignItems='center'>
          <Grid item direction='column' xs={12} lg={4} justifyItems='grid'>
            <Box mt={10} display='grid' justifyItems='center'>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Typography variant='h4' gutterBottom color='textPrimary'>
                  <Hidden mdDown>
                    <span style={{ color: ' #C8102E' }}> How </span> it works
                  </Hidden>
                  <Hidden lgUp>
                    <span style={{ color: '#707070' }}> Our Projects </span>
                  </Hidden>
                </Typography>
              </motion.div>
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 1, duration: 2 }}
              >
                <img
                  src='/Assets/divider.png'
                  style={{ width: '100%', height: '2px' }}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
        {projectInfo.map((project, index) => (
          <>
            {index % 2 == 0 ? (
              <ProjectsEven
                projectImage={project.image}
                ProjectTitle={project.title}
                projectText={project.Text}
                projectFeature1={project.feature1}
                projectFeature2={project.feature2}
                projectFeature3={project.feature3}
                projectFeature4={project.feature4}
                projectImage1={project.image1}
                projectRef={project.href}
              />
            ) : (
              <ProjectsOdd
                projectImage={project.image}
                projectImage1={project.image1}
                ProjectTitle={project.title}
                projectText={project.Text}
                projectFeature1={project.feature1}
                projectFeature2={project.feature2}
                projectFeature3={project.feature3}
                projectFeature4={project.feature4}
                projectRef={project.href}
              />
            )}
            <ProjectsSm
              projectImage={project.image}
              ProjectTitle={project.title}
              projectText={project.Text}
              projectFeature1={project.feature1}
              projectFeature2={project.feature2}
              projectFeature3={project.feature3}
              projectFeature4={project.feature4}
              projectRef={project.href}
            />
          </>
        ))}
      </div>
    </motion.div>
  )
}
