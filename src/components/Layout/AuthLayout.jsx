import { Outlet } from "react-router-dom"
export const AuthLayout = () => {
  return (
    <>
    <main className="mx-auto md:grid grid-cols-2 p-4">
      <Outlet></Outlet>
    </main>
    </>
  )
}
