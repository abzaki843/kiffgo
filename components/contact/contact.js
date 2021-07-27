import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'
import { Hidden } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ContactAnimation from '../../animations/Contact.animation'

const containerVariants = {
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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  hide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  input: {
    height: 150
  },
  bg: {
    backgroundColor: '#F5F5F5'
  }
}))
const theme = {
  spacing: 2
}

export default function Contact () {
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
  const container = useRef(null)
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     render: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: require('../animations/contact.json'),
  //   })
  // }, [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }

  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <Box mt={10} id='contact'>
        <div>
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='center'
            spacing={3}
          >
            <Grid
              container
              direction='column'
              alignItems='center'
              justify='center'
              spacing={'3'}
            >
              <Grid item XS={12} sm={12} md={10} lg={10}>
                <Typography
                  component='h1'
                  variant='h3'
                  color='textPrimary'
                  align='center'
                >
                  Get <span style={{ color: '#C8102E' }}> In Touch</span> with
                  us
                </Typography>
              </Grid>
              <Grid item sm={12} md={10} lg={10}>
                <Typography
                  variant='body1'
                  color='textPrimary'
                  justifyContent='center'
                >
                  Lets Start Something New ! Just ask and get Answers
                </Typography>
              </Grid>
            </Grid>
            <Grid container directon='row'>
              <Grid item xs={10} md={6} lg={5} xl={5}>
                {/* <motion.div variants={containerVariants}> */}
                <ContactAnimation />
                {/* <motion.img
                  src='/Assets/contact-img.png'
                  style={{ width: '100%', height: 'auto', marginTop: '30px' }}
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </motion.div> */}
              </Grid>

              <div>
                <motion.div variants={childVariants}>
                  <Box align='center'>
                    <Box mt={17} />

                    <Grid item xs={10} md={6} lg={5} xl={7}>
                      <form className={classes.form} noValidate>
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          fullWidth
                          id='email'
                          label='Name'
                          name='name'
                          autoComplete='name'
                          onChange={e => {
                            setName(e.target.value)
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <AccountCircle />
                              </InputAdornment>
                            )
                          }}
                        />
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          fullWidth
                          label='email'
                          onChange={e => {
                            setEmail(e.target.value)
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <EmailIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          fullWidth
                          label='message'
                          onChange={e => {
                            setMessage(e.target.value)
                          }}
                          InputProps={{
                            className: classes.input,
                            startAdornment: (
                              <InputAdornment position='start'>
                                <MessageIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        <Box align='left' mb={4}>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.submit}
                            onClick={e => {
                              handleSubmit(e)
                            }}
                          >
                            Send us Message
                          </Button>
                        </Box>
                      </form>
                    </Grid>
                  </Box>
                </motion.div>
              </div>
            </Grid>

            <Grid container>
              <Grid item lg={1}>
                <img
                  src='/Assets/footerlayer.png'
                  style={{
                    width: '100%',
                    height: '40%',
                    objectFit: 'cover',
                    marginBottom: '-100%',
                    marginLeft: '50px'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </motion.div>
  )
}
