import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl mb-12 group">
      <img
        src={heroImage}
        alt="Campus Canteen"
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent flex items-center backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-none">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-color-shift">
              Madras Engineering College-Campus Canteen
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              Delicious meals, quick bites, and friendly vibes for every student
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-card/80 backdrop-blur px-4 py-2 rounded-lg border border-border hover:border-primary transition-colors duration-300 animate-slide-in hover:animate-pulse-soft" style={{ animationDelay: "0.4s" }}>
                <p className="text-sm text-muted-foreground">Open Daily</p>
                <p className="font-semibold text-foreground">7:00 AM - 9:00 PM</p>
              </div>
              <div className="bg-card/80 backdrop-blur px-4 py-2 rounded-lg border border-border hover:border-secondary transition-colors duration-300 animate-slide-in hover:animate-pulse-soft" style={{ animationDelay: "0.6s" }}>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">Main Campus Building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
