import React, { useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Fab,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Paper,
  Link
} from '@mui/material';
import { 
  WhatsApp, 
  Cookie, 
  Favorite, 
  DeliveryDining, 
  LocalCafe,
  PhoneInTalk
} from '@mui/icons-material';
import { styled } from '@mui/system';

// 1. PALETA DE COLORES OFICIAL (VERDE OLIVA GOURMET)
const theme = createTheme({
  palette: {
    primary: {
      main: '#142216',       
      contrastText: '#D9E6D0',
    },
    secondary: {
      main: '#D9E6D0',       
      contrastText: '#142216',
    },
    background: {
      default: '#F5F5F0',    
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
  },
});

// --- LOGO RESPONSIVO ---
const CustomLogo = ({ isSmall = false }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
    <Box 
      component="svg" 
      viewBox="0 0 24 24" 
      sx={{ 
        width: isSmall ? '28px' : { xs: '55px', sm: '75px', md: '90px' }, 
        fill: '#D9E6D0',
        mb: isSmall ? '-2px' : '-6px'
      }}
    >
      <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
    </Box>
    <Typography sx={{ 
      fontFamily: '"Cinzel", serif', 
      fontWeight: 700, 
      color: '#D9E6D0', 
      fontSize: isSmall ? '1.3rem' : { xs: '2.8rem', sm: '4rem', md: '4.8rem' }, 
      letterSpacing: '0.15em', 
      lineHeight: 1, 
      ml: '0.15em' 
    }}>
      EMA
    </Typography>
    <Typography sx={{ 
      fontFamily: '"Great Vibes", cursive', 
      color: '#D9E6D0', 
      fontSize: isSmall ? '1rem' : { xs: '2rem', sm: '2.8rem', md: '3.2rem' }, 
      marginTop: isSmall ? '-6px' : { xs: '-12px', sm: '-20px', md: '-24px' }, 
      fontWeight: 400, 
      textTransform: 'none' 
    }}>
      Bakery
    </Typography>
  </Box>
);

// --- SECCIÓN PORTADA ---
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#142216', 
  backgroundImage: 'radial-gradient(circle, rgba(20, 34, 22, 0.7) 0%, rgba(20, 34, 22, 1) 100%)',
  minHeight: '75vh',
  [theme.breakpoints.up('sm')]: {
    minHeight: '85vh',
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#D9E6D0',
  textAlign: 'center',
  padding: theme.spacing(3),
  width: '100%',
}));

const StyledCard = styled(Card)({
  borderRadius: '20px',
  backgroundColor: '#FFFFFF', 
  boxShadow: '0px 8px 24px rgba(0,0,0,0.05)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

// --- LISTADO DE PRODUCTOS ---
const PRODUCTOS_GALLETAS = [
  {
    id: 1,
    nombre: 'Red velvet',
    descripcion: 'Espectacular masa roja aterciopelada de cacao con un corazón fundente de chocolate blanco premium y queso crema suave.',
    imagen: '/red-velvet-white.jpeg',
    badge: '¡Relleno Premium! 🔥'
  },
  {
    id: 2,
    nombre: 'Red velvet chocolate negro',
    descripcion: 'Nuestra icónica masa Red Velvet combinada con la elegante intensidad del chocolate negro premium.',
    imagen: '/red-velvet-dark.jpeg',
    badge: 'Nueva'
  },
  {
    id: 3,
    nombre: 'Oreo',
    descripcion: 'Masa artesanal dorada con trozos de chocolate, rellena de una galleta Oreo entera y un centro irresistiblemente suave de crema.',
    imagen: '/oreo-white.jpeg',
    badge: 'La Favorita ⭐'
  },
  {
    id: 4,
    nombre: 'Frutos secos',
    descripcion: 'Para los amantes de las texturas: Una combinación equilibrada de almendras tostadas crujientes y trozos masivos de chocolate oscuro fundido.',
    imagen: '/frutos-secos.jpeg',
    badge: 'Crocante'
  },
  {
    id: 5,
    nombre: 'Café',
    descripcion: 'Intensa y sofisticada masa artesanal impregnada con la esencia del mejor café seleccionado, balanceada con sedosas chispas de chocolate.',
    imagen: '/cafe-artesanal.jpeg', 
    badge: 'Exclusiva ☕'
  },
  {
    id: 6,
    nombre: 'Nutella',
    descripcion: 'Galleta de vainilla con chispas de chocolate y un corazón abundante de Nutella original que se derrite en tu boca.',
    imagen: '/nutella.jpeg',
    badge: 'Top Ventas'
  },
  {
    id: 7,
    nombre: 'Bocadito mix',
    descripcion: 'Galletas minis surtidas y se acompañan con dip de chocolate o arequipe.',
    imagen: '/bocadito-mix.jpeg',
    badge: '¡Para Compartir! ✨'
  }
];

export default function App() {
  
  useEffect(() => {
    // 1. Cargar fuentes tipográficas
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Cinzel:wght@600;700&family=Great+Vibes&display=swap';
    document.head.appendChild(link);

    // 2. Colocar la corona del logo como icono de la pestaña (Favicon)
    const linkIcon = document.querySelector("link[rel~='icon']") || document.createElement('link');
    linkIcon.type = 'image/svg+xml';
    linkIcon.rel = 'icon';
    linkIcon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23142216'%3E%3Cpath d='M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z'/%3E%3C/svg%3E";
    document.head.appendChild(linkIcon);

    // 3. Cambiar título de la página
    document.title = "EMA Bakery | Galletas Gourmet";
  }, []);

  const conectarWhatsApp = (mensajeOpcional) => {
    const numero = "573003557873"; 
    const texto = mensajeOpcional || "Holis!!! 👑\nMe comunico desde la página web, quiero consultar el menú de galletas del día.";
    const textoCodificado = encodeURIComponent(texto);
    window.open(`https://wa.me/${numero}?text=${textoCodificado}`, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar position="sticky" color="primary" elevation={0} sx={{ borderBottom: '1px solid rgba(217,230,208,0.1)' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <CustomLogo isSmall={true} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button color="secondary" href="#menu" sx={{ fontWeight: 600 }}>Catálogo Gourmet</Button>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => conectarWhatsApp()}
                sx={{ fontWeight: 'bold', borderRadius: '10px', textTransform: 'none' }}
              >
                Pedir Ya
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* PORTADA */}
      <HeroSection>
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <CustomLogo />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#D9E6D0', 
              letterSpacing: { xs: 2, sm: 4 }, 
              fontWeight: 300, 
              mb: 5, 
              fontSize: { xs: '0.85rem', sm: '1.2rem' } 
            }}
          >
            GALLETAS GOURMET HORNEADAS DIARIAMENTE BAJO PEDIDO EN CHIMICHAGUA
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => window.location.href = '#menu'}
            sx={{ 
              borderRadius: '50px', 
              px: 5, 
              py: 1.8, 
              fontWeight: 'bold', 
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Ver Selección & Ordenar
          </Button>
        </Container>
      </HeroSection>

      {/* SECCIÓN PROMO COMBO */}
      <Box sx={{ bgcolor: '#142216', color: '#D9E6D0', py: 10 }}>
        <Container maxWidth="lg">
          <Paper elevation={0} sx={{ p: 6, bgcolor: 'rgba(217,230,208,0.03)', borderRadius: '32px', border: '1px solid rgba(217,230,208,0.1)' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <LocalCafe color="secondary" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>COMBO IMPERDIBLE</Typography>
                </Box>
                <Typography variant="h3" sx={{ fontFamily: '"Cinzel", serif', color: '#D9E6D0', mb: 2, fontWeight: 'bold' }}>
                  Café + galleta <br />
                  Domicilio gratis
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(217, 230, 208, 0.7)', mb: 4, lineHeight: 1.6 }}>
                  Disfruta de la tarde ideal en Chimichagua. Elige tu galleta favorita, acompáñala con café caliente y te lo llevamos sin costo adicional.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => conectarWhatsApp("Holis!!! 👑\nQuiero pedir el combo de Café + Galleta.")}
                  sx={{ fontWeight: 'bold', borderRadius: '12px', textTransform: 'none', px: 4, py: 1.5 }}
                >
                  Pedir Combo Especial
                </Button>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box component="img" src="/combo-cafe.jpeg" sx={{ width: '100%', borderRadius: '20px', boxShadow: '0 12px 30px rgba(0,0,0,0.5)' }} />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* CATÁLOGO GOURMET */}
      <Box id="menu" sx={{ py: 12, bgcolor: '#F5F5F0' }}>
        <Container maxWidth="xl">
          <Typography variant="h3" textAlign="center" color="primary" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 'bold', mb: 8 }}>
            Nuestra Selección Gourmet
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {PRODUCTOS_GALLETAS.map((producto) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={producto.id}>
                <StyledCard>
                  <CardMedia component="img" height="240" image={producto.imagen} alt={producto.nombre} sx={{ objectFit: 'cover' }} />
                  <CardContent sx={{ p: 4, flexGrow: 1, textAlign: 'center' }}>
                    <Typography variant="h5" color="primary" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 'bold', mb: 2 }}>
                      {producto.nombre}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                      {producto.descripcion}
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="secondary"
                      fullWidth
                      onClick={() => conectarWhatsApp(`Holis!!! 👑\n¿Tienen disponibilidad de: ${producto.nombre}?`)}
                      sx={{ borderRadius: '10px', fontWeight: 'bold', textTransform: 'none', py: 1.5 }}
                    >
                      Pedir por WhatsApp
                    </Button>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FOOTER CON CONTACTO */}
      <Box sx={{ bgcolor: '#142216', color: '#D9E6D0', pt: { xs: 6, md: 8 }, pb: 4, borderTop: '1px solid rgba(217,230,208,0.15)' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="space-between" alignItems="center" sx={{ mb: 4, flexDirection: { xs: 'column', sm: 'row' }, textAlign: { xs: 'center', sm: 'left' } }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'inline-block' }}>
                <CustomLogo isSmall={true} />
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(217, 230, 208, 0.5)', mt: 1.5, fontSize: '0.85rem' }}>
                Llevando el estándar real de la repostería artesanal a Chimichagua.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1, color: '#FFFFFF', letterSpacing: 1 }}>
                Contacto & Pedidos
              </Typography>
              <Link href="tel:573003557873" underline="none">
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#D9E6D0', mb: 0.5, display: 'inline-flex', alignItems: 'center', gap: 1, fontSize: '1.1rem' }}>
                  <PhoneInTalk sx={{ fontSize: '1.1rem' }} /> 300 355 7873
                </Typography>
              </Link>
              <Typography variant="body2" sx={{ color: 'rgba(217, 230, 208, 0.5)', fontSize: '0.85rem' }}>
                Chimichagua, Cesar
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(217,230,208,0.06)', pt: 3, textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: 'rgba(217, 230, 208, 0.35)', fontSize: '0.75rem' }}>
              © {new Date().getFullYear()} EMA Bakery. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* BOTÓN FLOTANTE */}
      <Fab color="success" onClick={() => conectarWhatsApp()} sx={{ position: 'fixed', bottom: 25, right: 25, bgcolor: '#25D366' }}>
        <WhatsApp sx={{ color: '#FFF' }} />
      </Fab>
    </ThemeProvider>
  );
}