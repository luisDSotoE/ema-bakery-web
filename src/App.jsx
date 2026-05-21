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

// 1. CONFIGURACIÓN DEL TEMA (Colores extraídos de tu imagen original)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2415',       // Verde Bosque muy oscuro (fondo del logo)
      contrastText: '#D1E2C4',
    },
    secondary: {
      main: '#D1E2C4',       // Verde pálido / crema (letras y corona)
      contrastText: '#1A2415',
    },
    background: {
      default: '#FDFDFB',   
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
  },
});

// --- COMPONENTE DEL LOGO CREADO CON CÓDIGO ---
const CustomLogo = ({ isSmall = false }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
    {/* Corona SVG */}
    <Box 
      component="svg" 
      viewBox="0 0 24 24" 
      sx={{ 
        width: isSmall ? '30px' : { xs: '60px', sm: '80px' }, 
        fill: '#D1E2C4',
        mb: isSmall ? '-2px' : '-8px'
      }}
    >
      <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
    </Box>
    {/* Texto EMA */}
    <Typography 
      sx={{ 
        fontFamily: '"Cinzel", serif', 
        fontWeight: 700, 
        color: '#D1E2C4', 
        fontSize: isSmall ? '1.5rem' : { xs: '3.5rem', sm: '5rem' },
        letterSpacing: '0.15em',
        lineHeight: 1,
        ml: '0.15em' // Compensar el letter spacing para centrar perfecto
      }}
    >
      EMA
    </Typography>
    {/* Texto Bakery */}
    <Typography 
      sx={{ 
        fontFamily: '"Great Vibes", cursive', 
        color: '#D1E2C4', 
        fontSize: isSmall ? '1.2rem' : { xs: '2.5rem', sm: '3.5rem' },
        marginTop: isSmall ? '-8px' : { xs: '-15px', sm: '-25px' },
        fontWeight: 400,
        textTransform: 'none'
      }}
    >
      Bakery
    </Typography>
  </Box>
);

// --- ESTILOS GENERALES ---
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A2415',
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#D1E2C4',
  textAlign: 'center',
  padding: theme.spacing(4),
  position: 'relative',
  backgroundImage: 'radial-gradient(circle, rgba(209,226,196,0.08) 0%, rgba(26,36,21,1) 80%)',
}));

const StyledCard = styled(Card)({
  borderRadius: '24px',
  border: '1px solid rgba(26, 36, 21, 0.08)',
  boxShadow: '0px 10px 30px rgba(26, 36, 21, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 20px 40px rgba(26, 36, 21, 0.12)',
  },
});

// 2. PRODUCTOS (Asegúrate de tener estas imágenes en tu carpeta public)
const PRODUCTOS_GALLETAS = [
  {
    id: 'oreo',
    nombre: 'Oreo Supreme',
    descripcion: 'Masa artesanal dorada con trozos de chocolate, rellena de una galleta Oreo entera y un centro irresistiblemente suave de crema.',
    precio: '$ 7.500', 
    badge: 'La Favorita ⭐',
    imagen: '/oreo-supreme.jpeg'
  },
  {
    id: 'redvelvet',
    nombre: 'Red Velvet Core',
    descripcion: 'Espectacular masa roja aterciopelada de cacao con un corazón fundente de chocolate blanco premium y queso crema suave.',
    precio: '$ 8.000',
    badge: '¡Relleno Premium! 🔥',
    imagen: '/red-velvet.jpeg'
  },
  {
    id: 'crunchy',
    nombre: 'Almendra & Choc Chunks',
    descripcion: 'Para los amantes de las texturas: Una combinación equilibrada de almendras tostadas crujientes y trozos masivos de chocolate oscuro fundido.',
    precio: '$ 7.500',
    badge: 'Crocante',
    imagen: '/galletas-surtidas.jpeg'
  }
];

export default function App() {
  
  useEffect(() => {
    // Importamos Cinzel (para EMA) y Great Vibes (para Bakery) para copiar tu estilo exacto
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Cinzel:wght@600;700&family=Great+Vibes&display=swap';
    document.head.appendChild(link);
  }, []);

  const conectarWhatsApp = (mensaje) => {
    const numero = "573003557873"; 
    const textoCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/${numero}?text=${textoCodificado}`, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar position="sticky" color="primary" elevation={0} sx={{ borderBottom: '1px solid rgba(209,226,196,0.2)' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              {/* Logo en miniatura recreado con código */}
              <CustomLogo isSmall={true} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button color="secondary" href="#menu" sx={{ fontWeight: 600 }}>Catálogo</Button>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => conectarWhatsApp("¡Hola EMA Bakery! Me gustaría ver los sabores disponibles para pedir hoy.")}
                sx={{ fontWeight: 'bold', borderRadius: '12px', textTransform: 'none' }}
              >
                Pedir Ya
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO SECTION */}
      <HeroSection>
        <Container maxWidth="md">
          
          {/* Logo principal recreado con código (Sin fondo cuadrado que choque) */}
          <Box sx={{ mb: 6, filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.3))' }}>
            <CustomLogo />
          </Box>
          
          <Typography variant="h6" sx={{ color: '#D1E2C4', letterSpacing: 3, fontWeight: 300, mb: 5, maxWidth: '650px', mx: 'auto', fontSize: { xs: '0.9rem', sm: '1.2rem' } }}>
            GALLETAS GOURMET HORNEADAS DIARIAMENTE BAJO PEDIDO
          </Typography>
          
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            onClick={() => conectarWhatsApp("¡Hola! Vi la página web y quiero armar un pedido de galletas artesanales.")}
            sx={{ 
              borderRadius: '50px', 
              px: { xs: 5, sm: 7 }, 
              py: 2, 
              fontSize: '1.1rem', 
              fontWeight: 'bold', 
              boxShadow: '0 10px 25px rgba(209,226,196,0.2)',
              textTransform: 'none'
            }}
          >
            Ver Tentaciones & Ordenar
          </Button>
        </Container>
      </HeroSection>

      {/* SECCIÓN VALORES: ICONOS CENTRADOS Y PÁRRAFOS LARGOS */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Box sx={{ bgcolor: 'rgba(26, 36, 21, 0.05)', display: 'inline-flex', p: 2.5, borderRadius: '50%', color: 'primary.main', mb: 2 }}>
              <Cookie sx={{ fontSize: 45 }} />
            </Box>
            <Typography variant="h5" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 'bold', mb: 1.5 }} color="primary">
              Sabor Real
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ width: '100%', mx: 'auto', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Elaboradas a mano con mantequilla pura y chocolates seleccionados de la más alta calidad, garantizando una explosión de sabor en cada mordisco que deleitará hasta los paladares más exigentes.
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Box sx={{ bgcolor: 'rgba(26, 36, 21, 0.05)', display: 'inline-flex', p: 2.5, borderRadius: '50%', color: 'primary.main', mb: 2 }}>
              <Favorite sx={{ fontSize: 45 }} />
            </Box>
            <Typography variant="h5" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 'bold', mb: 1.5 }} color="primary">
              Hechas con Amor
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ width: '100%', mx: 'auto', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Cuidamos obsesivamente cada detalle del amasado y horneado para lograr esa textura perfecta que tanto buscas: un centro exquisitamente suave que se funde en tu boca y un borde crocante e irresistible.
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Box sx={{ bgcolor: 'rgba(26, 36, 21, 0.05)', display: 'inline-flex', p: 2.5, borderRadius: '50%', color: 'primary.main', mb: 2 }}>
              <DeliveryDining sx={{ fontSize: 45 }} />
            </Box>
            <Typography variant="h5" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 'bold', mb: 1.5 }} color="primary">
              Horneado Fresco
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ width: '100%', mx: 'auto', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Nuestra filosofía es simple: no acumulamos stock en vitrinas. Horneamos tu pedido exactamente en el momento en que lo confirmas, asegurando que recibas un producto con su máxima frescura y aroma.
            </Typography>
          </Box>

        </Box>
      </Container>

      {/* SECCIÓN PROMOCIÓN */}
      <Box sx={{ bgcolor: '#1A2415', color: '#D1E2C4', py: 10, overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, bgcolor: 'rgba(209,226,196,0.06)', borderRadius: '32px', border: '1px solid rgba(209,226,196,0.15)' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <LocalCafe color="secondary" />
                  <Typography variant="subtitle2" sx={{ letterSpacing: 2, fontWeight: 'bold', textTransform: 'uppercase' }} color="secondary">
                    Combo Imperdible
                  </Typography>
                </Box>
                <Typography variant="h2" sx={{ fontFamily: '"Cinzel", serif', fontSize: { xs: '2.3rem', sm: '3.5rem' }, color: '#FFFFFF', mb: 2, lineHeight: 1.2 }}>
                  Café + Galleta <br />
                  <span style={{ color: '#D1E2C4' }}>Domicilio Gratis</span>
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, maxWidth: 550, fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Disfruta de la mejor tarde en Chimichagua. Elige tu galleta favorita de nuestro menú, acompáñala con un café caliente y te lo llevamos gratis hasta tu puerta.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={() => conectarWhatsApp("¡Hola! Quiero ordenar la promoción especial de Café + Galleta con Domicilio Gratis en Chimichagua. ☕🍪")}
                  sx={{ fontWeight: 'bold', borderRadius: '14px', px: 4, py: 1.5, textTransform: 'none' }}
                >
                  Pedir Combo Especial
                </Button>
              </Grid>
              <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box 
                  component="img"
                  src="/combo-cafe.jpeg" 
                  alt="Combo Café y Galleta EMA"
                  sx={{ 
                    width: '100%', 
                    maxWidth: 380, 
                    borderRadius: '24px', 
                    boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                    border: '4px solid #D1E2C4',
                    objectFit: 'cover'
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* CATÁLOGO */}
      <Box id="menu" sx={{ py: 12, bgcolor: '#F4F6F2' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" color="primary" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 'bold', mb: 2 }}>
              Explora Nuestras Creaciones
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Cada una está diseñada para regalarte una experiencia gourmet única. Haz clic para encargarla.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {PRODUCTOS_GALLETAS.map((producto) => (
              <Grid item xs={12} sm={6} md={4} key={producto.id}>
                <StyledCard>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image={producto.imagen}
                      alt={producto.nombre}
                      sx={{ objectFit: 'cover' }}
                    />
                    <Box sx={{ position: 'absolute', top: 16, right: 16, bgcolor: 'primary.main', color: 'secondary.main', px: 2, py: 0.5, borderRadius: '50px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                      {producto.badge}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 1 }}>
                        <Typography variant="h5" color="primary" sx={{ fontFamily: '"Cinzel", serif', fontWeight: 'bold' }}>
                          {producto.nombre}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: '700', fontSize: '1.1rem' }}>
                          {producto.precio}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {producto.descripcion}
                      </Typography>
                    </Box>
                    <Button 
                      variant="outlined" 
                      color="primary"
                      fullWidth
                      onClick={() => conectarWhatsApp(`¡Hola EMA Bakery! Me antojé de la galleta ${producto.nombre}. ¿Me das más información para pedirla?`)}
                      sx={{ borderRadius: '12px', fontWeight: 'bold', textTransform: 'none', borderWidth: '2px', '&:hover': { borderWidth: '2px' } }}
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

      {/* FOOTER */}
      <Box sx={{ bgcolor: '#1A2415', color: '#D1E2C4', pt: 8, pb: 4, borderTop: '2px solid #D1E2C4' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between" sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 2, display: 'inline-block' }}>
                <CustomLogo isSmall={true} />
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, mt: 2 }}>
                Llevando el estándar real de la repostería artesanal a tu mesa en cada mordisco.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign={{ xs: 'left', md: 'right' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: '#FFFFFF' }}>
                Contacto & Pedidos
              </Typography>
              <Link href="tel:573003557873" underline="none">
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#D1E2C4', mb: 1, display: 'flex', alignItems: 'center', justifyContent: {xs: 'flex-start', md: 'flex-end'}, gap: 1 }}>
                  <PhoneInTalk sx={{ fontSize: '1.3rem' }} /> 300 355 7873
                </Typography>
              </Link>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, fontWeight: 500, letterSpacing: 1 }}>
                Chimichagua, Cesar
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(209,226,196,0.15)', pt: 4, textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
              © {new Date().getFullYear()} EMA Bakery. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <Fab 
        color="success" 
        aria-label="Contactar WhatsApp" 
        onClick={() => conectarWhatsApp("¡Hola! Me comunico desde la página web, quiero consultar el menú de galletas del día en Chimichagua.")}
        sx={{ 
          position: 'fixed', 
          bottom: { xs: 20, sm: 30 }, 
          right: { xs: 20, sm: 30 }, 
          bgcolor: '#25D366',
          '&:hover': { bgcolor: '#20ba5a' },
          boxShadow: '0 8px 24px rgba(37,211,102,0.35)'
        }}
      >
        <WhatsApp sx={{ fontSize: '1.8rem', color: '#FFF' }} />
      </Fab>
    </ThemeProvider>
  );
}