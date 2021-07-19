import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

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
const childVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
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
const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%'
  }
})
const theme = {
  spacing: 2
}
export default function Pwa () {
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
          <Grid item direction='column' xs={12} lg={4} justifyItems='grid'>
            <Box mt={10} display='grid' justifyItems='center'>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Typography variant='h3' gutterBottom color='textPrimary'>
                  <span> Technology Used </span>
                </Typography>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
        <Box mt={7} />
        <Grid
          container
          spacing={3}
          direction='row'
          justify='center'
          alignItems='flex-start'
        >
          <Grid item lg={6}>
            <motion.div variants={containerVariants}>
              <img src='/Assets/pwa.png' style={{ width: '90%' }} />
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6} style={{ marginTop: '50px' }}>
            <motion.div variants={childVariants}>
              <div>
                <Typography
                  variant='h4'
                  gutterBottom
                  color='textPrimary'
                  align='justify'
                >
                  Progressive Web Apps
                </Typography>
                <Typography
                  variant='subtitle'
                  gutterBottom
                  color='textPrimary'
                  align='justify'
                >
                  {' '}
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </Typography>

                <div className={classes.list}>
                  <List component='nav' aria-label='main mailbox folders'>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckCircleOutlineRoundedIcon color='secondary' />
                      </ListItemIcon>
                      <ListItemText
                        primary=' Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry'
                      ></ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckCircleOutlineRoundedIcon color='secondary' />
                      </ListItemIcon>
                      <ListItemText
                        primary=' Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry'
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <CheckCircleOutlineRoundedIcon color='secondary' />
                      </ListItemIcon>
                      <ListItemText
                        primary=' Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry'
                      />
                    </ListItem>
                  </List>
                </div>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  )
}
