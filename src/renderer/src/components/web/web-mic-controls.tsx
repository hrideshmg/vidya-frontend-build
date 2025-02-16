import { Box, IconButton } from '@chakra-ui/react';
import { LuMic, LuMicOff } from 'react-icons/lu';
import { useMicToggle } from '@/hooks/utils/use-mic-toggle';

export function WebMicControls() {
  const { handleMicToggle, micOn } = useMicToggle();

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex={1000}
    >
      <IconButton
        aria-label="Toggle microphone"
        onClick={handleMicToggle}
        colorScheme={micOn ? 'green' : 'gray'}
        size="lg"
        icon={micOn ? <LuMic size={24} /> : <LuMicOff size={24} />}
      />
    </Box>
  );
} 