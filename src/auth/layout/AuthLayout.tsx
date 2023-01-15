import { Box, Typography } from '@mui/material'

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}

export const AuthLayout = ({ title, children }: Props) => {
  return (
    <Box
      minHeight='100vh'
      flexDirection='column'
      display='flex'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
    >
      <Box border={3} borderColor='black' p={5} minWidth={{xs: 300, md: 500}}>
        <Typography fontWeight={700}>{title}</Typography>
        {children}
      </Box>
    </Box>
  )
}
