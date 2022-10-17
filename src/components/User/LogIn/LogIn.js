import '../user.css';
import {collection, getDocs, query, where, addDoc} from "firebase/firestore"
import {db} from "../../../utils/firebase";
import Swal from 'sweetalert2'
import { useState } from "react";
import {Link} from "react-router-dom";
import {Navigate} from 'react-router-dom'

const LogIn = () => {
    const [VerifyEmail, setEmail] = useState();
    const [LogIn, setLogIn] = useState();
    const InicarSession = async(event)=>{
        event.preventDefault();
        const user = {
            email:event.target[0].value,
            password:event.target[1].value,
        }
        const queryMail = query(collection(db, "user"), where("email","==",user.email,"&&","password","==",user.password))
        getDocs(queryMail).then(response=>{
            const result = response.docs.map(doc=>{
              const email = {
                ...doc.data(),
                id: doc.id
              }
              return email
            })
            setEmail(result)
        })
        if (VerifyEmail[0].Password!=user.password){
            Swal.fire({
                icon: 'error',
                title: 'No se pudo Iniciar la Sesion',
                text: 'El usuario o la contraseña no coinciden'
            })
        }
        else{
            localStorage.setItem("id",VerifyEmail[0].id)
            setLogIn(true)
        }
    }

    return (
        <div className="page-container">
            <h1>Iniciar Sesion</h1>
            <form onSubmit={InicarSession}>
                <table className='datos'>
                    <tbody>
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
                                <label>Contraseña:</label>
                            </td>
                            <td className='datos-left'>
                                <input type="password" required/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="button-add">Iniciar Sesion</button>
            </form>
            <div className='espaciado'>
                <Link to="/Usuario/CrearCuenta">
                    <button className="button-add">Crear Cuenta</button>
                </Link>
            </div>
            
            {LogIn ? (
                <Navigate to='/'/>
                ):(
                <div></div>
            )} 
        </div>
    )
}
  
export default LogIn