import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: "url('/images/test_hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
        Welcome to Mainm0e's
        </h1>
        <p className="text-xl text-white mb-8">
        Web Development Journey
        </p>
      </div>
    </div>
  );;
}
