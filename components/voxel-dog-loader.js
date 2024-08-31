import { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <DogContainer>
      {/* Remove the DogSpinner component here */}
    </DogContainer>
  );
}

export default Loader;
