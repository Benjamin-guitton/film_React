import React, {useState} from 'react'
import TextInput from './TextInput'
import Button from '../shared/Button'
import Modal from '../shared/Modal'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        civility: '',
        name: '',
        firstName: '',
        email: '',
        birthday: '',
        postalCode: '',
        city: '',
    });

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const navigateToMovies = () => navigate('/movies');

    return (
        <div style={{display: 'flex',flexDirection: 'column',alignItem:'center',justifyContent: 'center', border: '1px', solid: 'white', minWidth: '40vw'}}>
            { showModal ?
                <Modal
                    data={user}
                    closeModal={closeModal}
                    validateModal={navigateToMovies}
                />
                :
                <div>
                    <h3>Creer ton compte</h3>
                    <div>
                        <h5>Civilité</h5>
                        <TextInput
                            label='Homme'
                            type='radio'
                            name="civility"
                            value="Homme"
                            action={(e) => setUser({...user, civility: e.target.value})}
                        />
                        <TextInput
                            label='Femme'
                            type='radio'
                            name="civility"
                            value="Femme"
                            action={(e) => setUser({...user, civility: e.target.value})}
                        />
                    </div>
                    <TextInput
                        label='Nom'
                        value={user.name}
                        action={(e) => setUser({...user, name: e.target.value})}
                        name='name'
                        type='text'
                    />
                    <TextInput
                        label='Prénom'
                        value={user.firstName}
                        action={(e) => setUser({...user, firstName: e.target.value})}
                        name='Prénom'
                        type='text'
                    />
                    <TextInput
                        label='Ville'
                        value={user.city}
                        action={(e) => setUser({...user, city: e.target.value})}
                        name='Ville'
                        type='text'
                    />
                    <TextInput
                        label='Email'
                        type='email'
                        value={user.email}
                        action={(e) => setUser({...user, email: e.target.value})}
                        name='Email'
                        type='email'
                    />
                    <TextInput
                        label='Date de naissance'
                        type='date'
                        value={user.birthday}
                        action={(e) => setUser({...user, birthday: e.target.value})}
                        name='Date de naissance'
                        type='date'
                    />
                    <TextInput
                        label='Code postal'
                        type='text'
                        value={user.postalCode}
                        action={(e) => setUser({...user, postalCode: e.target.value})}
                        name='Code postal'
                        type='text'
                    />

                    <Button
                        label={'Valider'}
                        click={() => setShowModal(true)}
                    />
                </div>
            }
        </div>
    )
}

export default Register;