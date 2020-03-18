import React, { useState } from "react"

const State = {
  name: '',
  city: '',
  zipCode: '',
  speciality: '',
  phone: '',
  email: ''
}

const VolunteerRegistrationForm = () => {
  const [state, setState] = useState(State)
 
  return (
    <form method="POST" action="/api/subscription/hospital">
      <input
        placeholder="Nom complet"
        value={state.name}
        onChange={(evt) => setState({name: evt.target.value})}
        required
      />
      <input 
        required
        value={state.city}
        placeholder="Ville"
        onChange={(evt) => setState({city: evt.target.value})}
      />
      <input
        required
        value={state.zipCode}
        placeholder="Code postal"
        onChange={(evt) => setState({zipCode: evt.target.value})}
      />
      <input
        placeholder="Spécialité"
        value={state.speciality}
        required
        onChange={(evt) => setState({speciality: evt.target.value})}
      />
      <input
        placeholder="Téléphone"
        value={state.phone}
        type="phone"
        required
        onChange={(evt) => setState({phone: evt.target.value})}
      />
      <input
        type="email"
        value={state.email}
        required
        placeholder="Email"
        onChange={(evt) => setState({email: evt.target.value})}
      />
      <input
        type="submit"
        value="Confirmer"
      />
    </form>
  )
}

export default VolunteerRegistrationForm