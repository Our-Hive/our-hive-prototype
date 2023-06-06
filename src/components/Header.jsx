import Image from "next/image";
export default header = () => {
  return (
    <header className="flex gap-3 bg-primary text-slate-950 font-extrabold">
      <Image
        src="/our-hive-logo.png"
        width={40}
        height={40}
        alt="Our Hive Logo"
      />
      <h1 className="text-2xl">Our Hive</h1>
    </header>
  );
};
