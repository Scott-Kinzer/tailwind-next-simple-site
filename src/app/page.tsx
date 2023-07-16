import Header from './components/header/Header';

export default function Home() {
  return (
    <main className="">
      <div className="relative h-screen	overflow-hidden bg-turquoise">
        <div
          className="absolute left-1/2 
        h-screen w-1/2 
        bg-black 
        opacity-80 
        before:absolute 
        before:left-[-25%] 
        before:top-[-5%] 
        before:h-heightUp 
        before:w-[50%] 
        before:rounded-half 
        before:bg-black
        before:content-['']"></div>
        <Header />
      </div>
    </main>
  );
}
