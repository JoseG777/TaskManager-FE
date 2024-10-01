import { useState } from 'react'
import axios from 'axios'
import '../styles/AddUser.css'

const AddUser: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [response, setResponse] = useState<string>('')
  const addUserRoute = import.meta.env.VITE_APP_ADD_USER_ROUTE

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await axios.post(addUserRoute, { email })
      setResponse(`User added successfully! User ID: ${res.data.user_id}`)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setResponse(`Error: ${error.response.data.message}`)
      } else {
        setResponse('Error adding user')
      }
    }
  }

  return (
    <div className='container'>
      <h1 className='heading'>Add User</h1>
      <form onSubmit={handleAddUser}>
        <input
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='inputField'
        />
        <button type='submit' className='button'>
          Submit
        </button>
      </form>

      {response && <p className='response'>{response}</p>}
    </div>
  )
}

export default AddUser
