export default function Banner() {
    return (
      <div
        className="relative mx-[116px] mt-[27px] h-[100px] flex items-center justify-center text-white text-xl font-bold rounded-lg"
        style={{
          backgroundImage: "url('/puzzle-gallery-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "'Pixelify Sans', sans-serif",
        fontSize: "36px", 


        }}
      >
  
        <div className="relative ">NePazuru - Jigsaw Gallery</div>
      </div>
    );
  }