export const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="bg-[#F6BD60] w-1/2 max-w-sm h-auto p-10 rounded shadow-md">
        <form className="flex flex-col space-y-2">
          <label className="text-xl text-[#84A59D]">E-mail</label>
          <input className="shadow-md rounded text-xl p-2" type="email" name="mail" id="" />
          <label className="text-xl text-[#84A59D]">Contraseña</label>
          <input className="shadow-md rounded text-xl p-2" type="password" name="password" id="" />
        </form>
      </div>
    </div>
  );
};
