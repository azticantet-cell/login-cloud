import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://uzhvlzwlqckikkrprbqw.supabase.co'
const supabaseKey = 'sb_publishable_vKIjMrIMNk_7TyiUGMnznA_Y4jxmwPy'

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