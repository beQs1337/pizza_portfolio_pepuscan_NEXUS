import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PizzaDay Wallet Tracker</title>
      </Head>
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">PizzaDay Wallet Tracker</h1>
        <p className="text-gray-300 mb-8">Powered by PepuScan | Chain: PEPU</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-yellow-300">PZA</h2>
            <p className="text-lg">Balance: REDACTED</p>
            <p className="text-sm text-gray-400">ERC-20</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-yellow-300">FROGZILLA</h2>
            <p className="text-lg">Balance: REDACTED</p>
            <p className="text-sm text-gray-400">ERC-20</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-yellow-300">PIXEL</h2>
            <p className="text-lg">Balance: REDACTED</p>
            <p className="text-sm text-gray-400">ERC-20</p>
          </div>
        </div>
      </main>
    </>
  )
}