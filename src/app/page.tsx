export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Factory OS</h1>
      <p className="text-xl text-gray-600 mb-8">Автономная фабрика стартапов</p>

      <div className="grid gap-4 max-w-2xl">
        <h2 className="text-2xl font-semibold">Возможности:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Scout</li>
          <li>Validator</li>
          <li>Launcher</li>
          <li>Monitor</li>
        </ul>
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
        <p className="text-3xl font-bold text-blue-600">0₽</p>
        <p className="text-gray-600">единоразово</p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Купить
        </button>
      </div>
    </main>
  )
}