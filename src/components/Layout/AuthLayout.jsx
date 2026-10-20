import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 p-8">
      <div>
      </div>

      <div className="flex justify-end">
        <Outlet />
      </div>
    </main>
  )
}
