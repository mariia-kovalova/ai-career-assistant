export const styles = {
  wrap: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: '20px', md: '30px' },
    justifyContent: 'center',
    paddingTop: { xs: '40px', md: '10vh' },
    paddingBottom: { xs: '20px', md: '10vh' },
    minHeight: { xs: '0', md: '90vh' },
  },
  content: {
    flexBasis: { xs: '300px', md: '500px' },
    paddingTop: { xs: '0', md: '10vh' },
  },
  h1: {
    fontWeight: '600',
    marginBottom: '20px',
    textAlign: { xs: 'center', md: 'left' },
  },
  description: {
    fontSize: '16px',
    marginBottom: '40px',
    textAlign: { xs: 'center', md: 'left' },
  },
  btn: {
    display: 'block',
    padding: '8px 50px',
    margin: { xs: '0 auto', md: '0' },
    maxWidth: '200px',
  },
  imgWrap: {
    flexBasis: { xs: '200px', sm: '300px', md: '500px', lg: '800px' },
    height: { xs: '200px', sm: '300px', lg: '500px' },
    margin: { xs: '0 auto', md: '0' },
    marginTop: { xs: '20px', md: '100px', lg: '0' },
  },
};
