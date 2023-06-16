export default function App () {
  return (
    <div className="bg-[url('./assets/img/simokenceng_bg.jpg')] w-full h-full bg-left bg-cover antialiased">
    <div className="max-w-[360px] min-h-screen flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-col items-center border-2 border-[#373737] p-4 rounded-md shadow-lg backdrop-blur-sm">
        <div className="flex flex-col items-center text-center gap-y-2">
          <h1 className="text-2xl font-bold">Selamat Datang di Aplikasi Sistem Kependudukan Simo Kenceng</h1>
          <p className="lg">Silahkan <span className="bg-[#ff3377] px-1 py-.5 font-bold text-white">Masuk</span> jika sudah memiliki akun, atau silahkan <span className="bg-[#3377ff] px-1 py-.5 font-bold text-white">Daftar</span> jika belum memiliki akun.</p>
        </div>
        <form className="flex flex-col items-center gap-y-2 mt-4 mb-4 w-full">
          <div className="flex items-center justify-between w-full">
            <label className="font-semibold" htmlFor="email">Email :</label>
            <input className="w-[260px] rounded-md" id="email" type="email" name="email" autoComplete="off" />
          </div>
          <div className="flex items-center justify-between w-full">
            <label className="font-semibold" htmlFor="password">Sandi :</label>
            <input className="w-[260px] rounded-md" id="password" type="password" name="password" autoComplete="off" />
          </div>
          <div className="flex items-center justify-end w-full gap-x-4">
            <button className="bg-[#ff3377] text-white px-4 py-2 rounded-md ring-2 ring-[#373737] font-semibold" type="submit" onClick={(e) => e.preventDefault()}>Masuk</button>
            <button className="bg-[#3377ff] text-white px-4 py-2 rounded-md ring-2 ring-[#373737] font-semibold" type="button" onClick={(e) => e.preventDefault()}>Daftar</button>
          </div>
        </form>
        <div className="bg-white w-full text-center">
          <p>&copy;2023 by aldyerpe</p>
        </div>
      </div>
    </div>
    </div>
  )
}
