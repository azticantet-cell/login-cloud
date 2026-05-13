import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'PEGA_TU_URL_AQUI'
const supabaseKey = 'PEGA_TU_KEY_AQUI'

const supabase = createClient(supabaseUrl, supabaseKey)

window.register = async () => {

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { error } = await supabase.auth.signUp({
    email,
    password
  })

  const msg = document.getElementById('msg')

  if (error) {
    msg.innerText = error.message
  } else {
    msg.innerText = 'Usuario registrado correctamente'
  }
}

window.login = async () => {

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  const msg = document.getElementById('msg')

  if (error) {
    msg.innerText = error.message
  } else {
    msg.innerText = 'Inicio de sesión exitoso'
  }
}

window.logout = async () => {

  await supabase.auth.signOut()

  document.getElementById('msg').innerText = 'Sesión cerrada'
}