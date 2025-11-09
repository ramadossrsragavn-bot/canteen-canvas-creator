import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/data/menuData";
import { Leaf, Flame, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in hover:translate-y-[-5px]">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
        />
        {item.isPopular && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground animate-pulse-soft">
            Popular
          </Badge>
        )}
        {item.category === 'combo' && item.originalPrice && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-secondary to-primary text-primary-foreground animate-float">
            Save ₹{item.originalPrice - item.price}
          </Badge>
        )}
        <div className="absolute bottom-3 left-3 transform group-hover:translate-y-[-5px] transition-transform duration-300">
          {item.isVeg ? (
            <div className="bg-background/90 backdrop-blur-sm p-1.5 rounded-md flex items-center gap-1 hover:bg-green-50 transition-colors duration-300">
              <Leaf className="w-4 h-4 text-green-600 group-hover:animate-float" />
              <span className="text-xs font-medium">Veg</span>
            </div>
          ) : (
            <div className="bg-background/90 backdrop-blur-sm p-1.5 rounded-md flex items-center gap-1 hover:bg-red-50 transition-colors duration-300">
              <Flame className="w-4 h-4 text-red-600 group-hover:animate-float" />
              <span className="text-xs font-medium">Non-Veg</span>
            </div>
          )}
        </div>
      </div>
      <CardContent className="p-4 transform transition-all duration-300 group-hover:bg-gradient-to-b from-transparent to-muted/20">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{item.name}</h3>
            <div className="flex items-center gap-2">
              {item.originalPrice && (
                <span className="text-sm text-muted-foreground line-through group-hover:text-destructive/70 transition-colors duration-300">
                  ₹{item.originalPrice}
                </span>
              )}
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:animate-color-shift">₹{item.price}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 group-hover:text-foreground transition-colors duration-300">{item.description}</p>
        <Button 
          onClick={handleAddToCart} 
          className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:from-secondary hover:via-primary hover:to-accent transition-all duration-500 group-hover:shadow-lg transform group-hover:scale-[1.02]" 
          size="sm"
        >
          <Plus className="w-4 h-4 mr-1 group-hover:animate-pulse-soft" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
