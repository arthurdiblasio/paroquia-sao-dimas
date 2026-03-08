import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-parish-white">
      <h1 className="text-4xl font-bold text-parish-primary">
        Paróquia São Dimas
      </h1>
      <button className="mt-6 bg-secondary text-black px-6 py-2 rounded-md">
        Teste botão
      </button>
    </main>
  );
}
