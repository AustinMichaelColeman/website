import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Website!</h1>
      <p className="mb-4">
        This website was created entirely by DevDuetAI, a plugin for ChatGPT and for GitHub.
      </p>
      <h2 className="text-xl font-bold mb-2">Features:</h2>
      <ul className="list-disc list-inside">
        <li>Blog section to share updates and news</li>
        <li>Contact form to send messages directly from the website</li>
        <li>Navbar for easy navigation between different pages</li>
      </ul>
    </main>
  );
}