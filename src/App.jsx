import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import {
  getAuth,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import app from './utils/firebaseSdk';

export default function App() {
  function daftarUser () {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserRegister(user.email);
      setTimeout(() => {
        setUserRegister('');
      }, 15000)
    })
    .catch((error) => {
    const errorCode = error.code;
    console.log(error.code);
    switch (error.code){
      case 'auth/email-already-in-use':
      setUserError('Email Sudah Digunakan, Silahkan Masuk');
      setTimeout(() => {
        setUserError('');
      }, 15000)
      break;
    }
    })
  }
  const [userRegister, setUserRegister] = useState('');
  const [userError, setUserError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="bg-[url('./assets/img/simokenceng_bg.jpg')] w-full h-full bg-left bg-cover antialiased">
      <div className='max-w-[360px] min-h-screen flex flex-col items-center justify-center mx-auto'>
        <div className='flex flex-col items-center border-2 border-[#373737] overflow-hidden rounded-md shadow-lg backdrop-blur-sm h-[500px]'>
          <div className='flex flex-col items-center text-center gap-y-2 p-4'>
            <h1 className='text-2xl font-bold'>
              Selamat Datang di Aplikasi Sistem Kependudukan <span className='bg-[#3377ff] px-1 py-.5 font-bold text-white'>Simo Kenceng
              Surabaya</span>
            </h1>
            <p className='lg'>
              Silahkan{' '}
              <span className='bg-[#ff3377] px-1 py-.5 font-bold text-white'>
                Masuk
              </span>{' '}
              jika sudah memiliki akun, atau silahkan{' '}
              <span className='bg-[#3377ff] px-1 py-.5 font-bold text-white'>
                Daftar
              </span>{' '}
              jika belum memiliki akun.
            </p>
          </div>
          <form className='flex flex-col items-center gap-y-2 mt-4 mb-4 w-full p-4'>
            <Input id='email' label='Email :' tipe='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input id='password' label='Sandi :' tipe='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className='flex items-center justify-end w-full gap-x-4'>
              <Button tema='bg-[#ff3377] text-white' label='Masuk' tipe='submit' onClick={(e) => e.preventDefault()} />
              <Button tema='bg-[#3377ff] text-white' label='Daftar' tipe='button' onClick={daftarUser} />
            </div>
          </form>
          {userRegister !== null && userRegister !== "" ? (
          <div className='absolute top-[-300px] left-0 right-0 bg-white w-[90%] mx-auto rounded-md flex flex-col items-center text-center gap-y-2 p-4 animasi_slideDown'>
            <p><span className='bg-[#3377ff] px-1 py-.5 text-white font-bold'>{userRegister}</span><br />Berhasil didaftarkan di sistem kami. Silahkan masuk menggunakan email yang sudah terdaftar.</p>
          </div>
          ) : (
          <></>
          )
          }
          {userError !== null && userError !== "" ? (
          <div className='absolute top-[-300px] left-0 right-0 bg-white w-[90%] mx-auto rounded-md flex flex-col items-center text-center gap-y-2 p-4 animasi_slideDown'>
            <p><span className='bg-[#ff3377] px-1 py-.5 text-white font-bold'>{userError}</span></p>
          </div>
          ) : (
          <></>
          )
          }
          <div className='bg-white w-full mt-auto flex items-center justify-center'>
            <p className='font-semibold text-center'>&copy;2023 by<br /><a className='font-bold text-lg' href='https://github.com/aldyerpe' target='_blank'>Simo Kenceng Surabaya IT Team</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
