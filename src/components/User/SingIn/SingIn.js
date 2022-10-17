import '../user.css';
import {collection, getDocs, query, where, addDoc} from "firebase/firestore"
import {db} from "../../../utils/firebase";
import Swal from 'sweetalert2'
import {useState} from "react";
import {Link} from "react-router-dom";
import {Navigate} from 'react-router-dom'

const SingIn = () => {
    const [Domain, setDomain] = useState();
    const [VerifyEmail, setVerifyEmail] = useState();
    const [home, goHome] = useState();
    const CrearCuenta = async(event)=>{
        event.preventDefault();
        const newUser = {
            name:event.target[0].value,
            phone:event.target[1].value,
            email:event.target[2].value,
            ConfirmEmail:event.target[3].value,
            Password:event.target[4].value,
            ConfirmPassword:event.target[5].value
        }

        let verificacionEmail = newUser.email.split('@')
        verificacionEmail=verificacionEmail[1].split('.')

        const queryMail = query(collection(db, "user"), where("email","==",newUser.email))
        getDocs(queryMail).then(response=>{
            const result = response.docs.map(doc=>{
              const email = {
                ...doc.data(),
                id: doc.id
              }
              return email
            })
            setVerifyEmail(result)
        })
        if (VerifyEmail!=undefined){
            if (VerifyEmail.length==0){
                const queryRef = query(collection(db, "emailDomain"), where("name","==",verificacionEmail[0]))
                getDocs(queryRef).then(response=>{
                const result = response.docs.map(doc=>{
                    const newDomain = {
                    ...doc.data(),
                    id: doc.id
                    }
                    return newDomain
                    
                })
                setDomain(result)
                })
                
                let dominioIncorrecto = false
                //errores de dominio
                if(Domain==undefined || Domain==null){
                    dominioIncorrecto = true
                    
                }
                else if(verificacionEmail.length>3){
                    dominioIncorrecto = true
                    
                }
                else if (verificacionEmail[1]!=Domain[0].domain){
                    dominioIncorrecto = true
                }
                else if (Domain[0].country==true && verificacionEmail.length==3){
                    dominioIncorrecto = true
                }
                //errores de carga de datos
                else if(newUser.email!=newUser.ConfirmEmail){
                    Swal.fire({
                        icon: 'error',
                        title: 'El Email no Coincide'
                    })
                }
                else if(newUser.Password!=newUser.ConfirmPassword){
                    Swal.fire({
                        icon: 'error',
                        title: 'Las contraseñas no Coinciden'
                    })
                }
                else{
                    const queryRef = collection(db, "user")
                    addDoc(queryRef, newUser).then(response=>{
                        Swal.fire({
                            icon: 'success',
                            title: 'Su usuario a sido Generado'
                        }).then(response=>{
                            localStorage.setItem("id",response.id)
                            goHome(true)
                            }
                        )
                        
                    })
                }

                if (dominioIncorrecto==true){
                    Swal.fire({
                        icon: 'error',
                        title: 'Dominio no Permitido',
                        text: 'Este dominio de correo electrónico no es permitido para crear un usuario en este sitio'
                    })
                }
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Este Email ya esta registrado'
                })
            }
        }
    }

    return (
        <div className="page-container">
            <h1>Crear Cuenta</h1>
            <form onSubmit={CrearCuenta}>
                <table className='datos'>
                    <tbody>
                        <tr>
                            <td className='datos-rigth'>
                                <label>Nombre:</label>
                            </td>
                            <td className='datos-left'>
                                <input type="text" required/>
                            </td>
                        </tr>
                        <tr>
                            <td className='datos-rigth'>
                                <label>Telefono:</label>
                            </td>
                            <td className='datos-left'>
                                <input type="number" required/>
                            </td>
                        </tr>
                        <tr>
                            <td className='datos-rigth'>
                                <label>Correo:</label>
                            </td>
                            <td className='datos-left'>
                                <input type="email" required/>
                            </td>
                        </tr>
                        <tr>
                            <td className='datos-rigth'>
                                <label>Confirmar Correo:</label>
                            </td>
                            <td className='datos-left'>
                                <input type="email" required/>
                            </td>
                        </tr>
                        <tr>
                            <td className='datos-rigth'>
                                <label>Contraseña:</label>
                            </td>
                            <td className='datos-left'>
                                <input type="password" required/>
                            </td>
                        </tr>
                        <tr>
                            <td className='datos-rigth'>
                                <label>Confirmar Contraseña:</label>
                            </td>
                            <td className='datos-left'>
                                <input type="password" required/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="button-add">Crear Cuenta</button>
            </form>
            <div className='espaciado'>
                <Link to="/Usuario/IniciarSesion">
                    <button className="button-add">Iniciar Sesion</button>
                </Link>
            </div>
            {home ? (
                <Navigate to='/'/>
                ):(
                <div></div>
            )} 
        </div>
    )
}
  
export default SingIn