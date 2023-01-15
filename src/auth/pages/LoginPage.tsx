import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'

import { AuthLayout } from '../layout'
import { Google } from '@mui/icons-material'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <Stack spacing={2} mb={2} mt={2}>
        <TextField label='E-mail' type='email' placeholder='Ingrese su e-mail' size='small' />
        <TextField label='Contraseña' type='password' placeholder='Ingrese su contraseña' size='small' />
      </Stack>
      <Stack direction={{xs: 'column', md: 'row'}} spacing={3} justifyContent={'center'}>
        <Button variant='contained'>Ingresar </Button>
        <Button variant='contained'>
          <Google />
          oogle
        </Button>
      </Stack>
    </AuthLayout>
  )
}
