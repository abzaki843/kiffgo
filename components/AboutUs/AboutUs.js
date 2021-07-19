import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'

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

  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <div className={classes.divider} id='projects'>
        <Grid container justify='center' alignItems='center'>
          <Box mt={10} display='grid' justifyItems='center'>
            <motion.div
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Grid container direction='row' align='center'>
                <Grid item xs={12} lg={11} style={{ margin: 'auto' }}>
                  <Typography variant='h4' gutterBottom color='textPrimary'>
                    <span> Our </span> Story
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    gutterBottom
                    color='textPrimary'
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
          <Box m={4} />
          <Grid container spacing={2} align='center'>
            <Box ml={4} />
            <Grid item lg={5}>
              <img
                src='/Assets/team.jpg'
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item lg={5}>
              <Typography variant='h4' gutterBottom color='textPrimary'>
                <span> Our </span> Leaders
              </Typography>
              <Typography variant='subtitle2' gutterBottom color='textPrimary'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Typography>
            </Grid>
          </Grid>
          <Box m={4} />
          <Grid container spacing={2} align='center'>
            <Box ml={4} />

            <Grid item lg={5}>
              <Typography variant='h4' gutterBottom color='textPrimary'>
                <span> Work </span> with us
              </Typography>
              <Typography variant='subtitle2' gutterBottom color='textPrimary'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Typography>
            </Grid>
            <Grid item lg={5}>
              <img
                src='/Assets/careers.jpg'
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  )
}
