import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl mb-12">
      <img
        src={heroImage}
        alt="Campus Canteen"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Campus Canteen
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Delicious meals, quick bites, and friendly vibes for every student
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-card px-4 py-2 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Open Daily</p>
                <p className="font-semibold text-foreground">7:00 AM - 9:00 PM</p>
              </div>
              <div className="bg-card px-4 py-2 rounded-lg border border-border">
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
