import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function UserRegisterForm() {
    const URL = 'http://localhost:8080/register'
    const ROLE_URL = 'http://localhost:8080/users/roles'

    const [roles, setRoles] = useState([])
    const [currentRole, setCurrentRole] = useState(0)

    useEffect(()=>{
        fetchRoles()
    }, [])

    async function fetchRoles() {
        const FETCHED_DATA = await fetch(ROLE_URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setRoles(FETCHED_JSON.data)
        console.log(roles)
    }
    function handleSelectChange(e) {
        console.log(e.target.value)
        setCurrentRole(e.target.value)
    }

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            address: e.target.address.value,
            role: currentRole
        }
        console.log(data)

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        if(FETCHED_JSON.status === 'success') {
            navigate('/users')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="firsname"
                            name="firstname"
                            variant='filled'
                            size="small"
                            defaultValue=""
                            label="First name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="lastname"
                            variant='filled'
                            name="lastname"
                            size="small"
                            defaultValue=""
                            label="Last Name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            variant='filled'
                            name='email'
                            size="small"
                            defaultValue=""
                            label="Email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="password"
                            name="password"
                            variant='filled'
                            size="small"
                            defaultValue=""
                            label="Password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="confirm-password"
                            variant='filled'
                            name="confirm"
                            size="small"
                            defaultValue=""
                            label="Confirm Password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address"
                            name="address"
                            variant='filled'
                            size="small"
                            defaultValue=""
                            label="Address"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel>User Roles</InputLabel>
                        <Select
                            id='role-selector'
                            value={currentRole}
                            label="Roles"
                            onChange={handleSelectChange}
                         >
                            {
                                roles && roles.map((role, khuslen) => {
                                    return(
                                            <MenuItem key={khuslen} value={role.id}>{role.name}</MenuItem>
                                    )
                                })
                            }
        
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='outlined' type='submit'>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}