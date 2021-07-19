import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import ListItemText from '@material-ui/core/ListItemText'

import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CallIcon from '@material-ui/icons/Call'

import { Hidden } from '@material-ui/core'

import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'

import Container from '@material-ui/core/Container'

export default function Footer () {
  return (
    <>
      <AppBar position='static ' style={{ background: '#520D57' }}>
        <Hidden mdDown>
          <Container>
            <Toolbar>
              <Grid container>
                <Grid item xs={6} md={3} lg={2}>
                  <Typography variant='h6'>About Us</Typography>
                  <Typography variant='captiontext'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{' '}
                  </Typography>
                </Grid>
                <Grid container item xs={6} md={3} lg={2}>
                  <ul>
                    <ListItemText href='#hero'>Home</ListItemText>

                    <ListItemText href='#tech'>Services</ListItemText>

                    <ListItemText href='#projects'>PWA Technology</ListItemText>

                    <ListItemText href='#team'>How it Worls</ListItemText>

                    <ListItemText href='#contact'>Contact</ListItemText>
                  </ul>
                </Grid>
                <Grid container item xs={6} md={3} lg={3}>
                  <ul>
                    <ListItem>
                      <MailIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='OVERLINE TEXT'>
                        info@ineffabledevs.com
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <LocationOnIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>
                        {' '}
                        Comsats, Islamabad
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <CallIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>00923365551788</Typography>
                    </ListItem>
                  </ul>
                </Grid>

                <Grid container item xs={6} md={3} lg={3}>
                  <ul>
                    <ListItem>
                      <Box px={2}>
                        <Link href='https://www.facebook.com/ineffabledevs'>
                          <img
                            src='/Assets/facebook.png'
                            style={{ width: '100%' }}
                          />
                        </Link>
                      </Box>
                      <Box px={2}>
                        <Link href='https://www.linkedin.com/company/ineffable-devs'>
                          <img
                            src='/Assets/twitter.png'
                            style={{ width: '100%' }}
                          />
                        </Link>
                      </Box>
                      <Box px={2}>
                        <Link href='https://www.linkedin.com/company/ineffable-devs'>
                          <img
                            src='/Assets/instagram.png'
                            style={{ width: '100%' }}
                          />
                        </Link>
                      </Box>
                    </ListItem>
                  </ul>
                </Grid>

                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <Grid item xs={12} sm={8}>
                    <Typography variant='caption text'>
                      Copyright © 2021 VanGO. All rights reserved
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </Hidden>
        <Container>
          <Hidden lgUp>
            <Toolbar>
              <Grid container direction='row' justify='center' flexWrap='wrap'>
                <Box mt={15} />

                <Grid
                  container
                  direction='row'
                  justify='center'
                  item
                  xs={10}
                  sm={4}
                  md={3}
                  lg={3}
                >
                  <ul>
                    <ListItem>
                      <>
                        <Link href='https://www.facebook.com/ineffabledevs'>
                          <img
                            src='/Assets/facebook.png'
                            style={{ width: '20%' }}
                          />
                        </Link>
                      </>
                      <Box m={2} />
                      <Link href='https://www.linkedin.com/company/ineffable-devs'>
                        <img
                          src='/Assets/instagram.png'
                          style={{ width: '20%' }}
                        />
                      </Link>
                      <Box m={2} />
                      <Link href='https://www.linkedin.com/company/ineffable-devs'>
                        <img
                          src='/Assets/twitter.png'
                          style={{ width: '20%' }}
                        />
                      </Link>
                    </ListItem>
                  </ul>
                </Grid>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  item
                  xs={10}
                  sm={5}
                  md={3}
                  lg={3}
                >
                  <ul>
                    <ListItem>
                      <MailIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>
                        info@ineffabledevs.com
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <LocationOnIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>
                        {' '}
                        Comsats, Islamabad
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <CallIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>00923365551788</Typography>
                    </ListItem>
                  </ul>
                </Grid>

                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='center'
                >
                  <Grid item xs={12}>
                    <Typography variant='caption text'>
                      Copyright © 2021 VanGo. All rights reserved
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </Hidden>
        </Container>
      </AppBar>
    </>
  )
}
