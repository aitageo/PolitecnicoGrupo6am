export const Login = () => {
  return (
    <div className="p-8 min-h-screen flex justify-center items-center">
      <form 
        className="flex flex-col gap-3 border-2 p-6 rounded-xl bg-gray-200 shadow-md" 
        style={{ width: '25rem' }}
      >
        <h2 className="text-center text-2xl font-bold mb-2">Ingresa a tu cuenta</h2>

        <input 
          type="text" 
          placeholder="Usuario" 
          className="border-2 p-2 rounded-xl mx-auto w-full" 
          name="username" 
        />

        <input 
          type="password" 
          placeholder="Contraseña" 
          className="border-2 p-2 rounded-xl mx-auto w-full" 
          name="password" 
        />

        <label className="flex items-center gap-2 mx-auto cursor-pointer my-1">
          <input type="checkbox" name="remember" />
          <span>Recordarme</span>
        </label>

        <a href="#" className="text-blue-500 text-center text-sm hover:underline">
          ¿Olvidaste tu contraseña?
        </a>

        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded-xl mx-auto w-full mt-2 font-semibold hover:bg-blue-600 transition-colors"
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}