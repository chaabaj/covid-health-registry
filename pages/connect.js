import { useState } from "react"

const State = {
  name: '',
  password: ''
}

const Connect = () => {
  const [state, setState] = useState(State)

  return (
    <main>
      <form method="POST" action="/api/connect">
        <input 
          required 
          placeholder="Nom"
          value={state.name} 
          onChange={(evt) => 
          setState({name: evt.target.value})} 
        />
        <input
          required
          placeholder="Mot de passe"
          value={state.password}
          onChange={(evt) => setState({password: evt.target.value})}
          type="password"
        />
        <input
          type="submit"
          value="Se connecter" 
        />
      </form>
    </main>
  )
}

export default Connect