import { Button, Container, styled, Typography, Grid, Box } from '@mui/material'
// import Grid from '@mui/material/Grid2';
import Avatar from '../../../../assets/images/lego.jpg'
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/StyledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground';

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('md')]:{
      paddingTop: '100px',
      paddingBottom: '50px'
    }
  }))

  const StyledAvatar = styled('img')({
    borderRadius: "50%",
    border: "2px solid white",
    width: "70%",
    zIndex: 10
  })

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} >
          <Grid item xs={12} md={5}>
            <Box position="relative" >
              <Box position="absolute" width="120%" top="-100px" right="0"><AnimatedBackground /></Box>
            </Box>
            <Box position='relative' textAlign='center'>
              <StyledAvatar src={Avatar} alt="Avatar" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color='primary.contrastText' variant='h1' textAlign="center">Fulaninho</Typography>
            <Typography color='primary.contrastText' variant='h2' textAlign="center">Teste de texto</Typography>

            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <DownloadIcon />
                  <Typography>
                    Download CV
                  </Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton>
                  <EmailIcon />
                  <Typography>
                    Contact me
                  </Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  )
}

export default Hero




