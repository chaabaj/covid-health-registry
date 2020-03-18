import React, { useState } from "react"

const State = {
  name: '',
  address: '',
  password: '',
  confirmPassword: ''
}

const HospitalRegistrationForm = () => {
  const [state, setState] = useState(State)
 
  return (
    <form method="POST" action="/api/subscription/hospital">
      <input
        placeholder="Nom de l'établissement"
        value={state.name}
        onChange={(evt) => setState({name: evt.target.value})}
        required
      />
      <input
        required
        placeholder="Addresse de l'établissement"
        value={state.address}
        onChange={(evt) => setState({address: evt.target.value})}
      />
      <input
        required
        type="password"
        placeholder="Mot de passe"
        value={state.password}
        onChange={(evt) => setState({password: evt.target.value})}
      />
      <input
        required
        type="password"
        placeholder="Confirmez votre mot de passe"
        value={state.confirmPassword}
        onChange={(evt) => setState({confirmPassword: evt.target.value})}
      />
      <input
        type="submit"
        value="Confirmer"
      />
    </form>
  )
}

export default HospitalRegistrationForm