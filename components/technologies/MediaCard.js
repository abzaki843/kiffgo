import React, { useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5
    }
  }
}

const theme = {
  spacing: 8
}
const useStyles = makeStyles(theme => ({
  margin: {
    [theme.breakpoints.only('xs')]: {},
    [theme.breakpoints.only('sm')]: {},
    [theme.breakpoints.only('lg')]: {},
    [theme.breakpoints.only('xl')]: {},
    [theme.breakpoints.only('md')]: {}
  },
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 350,
    height: 410
    // '&:hover': {
    //   backgroundColor: '#373737 !important'
    // },

    // '&:hover  h5 ': {
    //   color: '#FFFF !important'
    // },
    // '&:hover  h6': {
    //   color: '#FFFF !important'
    // }
  },

  media: {
    height: 'auto'
  },
  divider: {
    width: '100%'
  },
  MuiCardActionArea: {
    width: '100%',
    display: 'block',
    textAlign: 'center'
  }
}))

export default function MediaCard ({ aboutTitle, aboutImage, aboutText }) {
  const classes = useStyles()
  const animation = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1 })
  console.log(aboutText)

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('')
    }
  }, [animation, inView])

  return (
    <>
      <motion.div ref={ref} initial='hidden' animate={animation}>
        <div className={classes.margin}>
          <Box mt={1}>
            <motion.div
              variants={containerVariants}

              // whileTap={{ scale: 0.9, color: '#373737' }}
            >
              <Card
                className={classes.card}
                style={{
                  margin: 'auto',

                  borderRadius: '16px'
                }}
                elevation={1}
              >
                <CardActionArea className={classes.MuiCardActionArea}>
                  <CardContent>
                    <Box
                      style={{
                        width: '100%',
                        height: 'auto'
                      }}
                      align='center'
                    >
                      {aboutImage}
                    </Box>
                    <div>
                      <Typography
                        gutterBottom
                        variant='h5'
                        direction='row'
                        color='textPrimary'
                        align='left'
                        underline='hover'
                      >
                        {aboutTitle}
                      </Typography>

                      <Typography
                        variant='h6'
                        color='textPrimary'
                        align='left'
                        underline='hover'
                        style={{
                          fontSize: '1rem',
                          fontFamily: 'Poppins',
                          fontweight: '400',
                          lineHeight: '1.5'
                        }}
                      >
                        {aboutText}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Box>
        </div>
      </motion.div>
    </>
  )
}
