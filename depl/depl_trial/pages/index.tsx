export default function Home() {
  return (
      <div className="grid h-screen place-items-center">
          <a href="http://jomamagay.tk">
              <button
                  className="rounded-lg px-4 py-2 border-2 border-red-600
                  text-red-600 hover:bg-red-600 hover:text-red-100 duration-300"
              >
                Danger
              </button>
          </a>
      </div>
  )
}
