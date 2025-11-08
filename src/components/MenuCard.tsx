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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {item.isPopular && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            Popular
          </Badge>
        )}
        {item.category === 'combo' && item.originalPrice && (
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
            Save ₹{item.originalPrice - item.price}
          </Badge>
        )}
        <div className="absolute bottom-3 left-3">
          {item.isVeg ? (
            <div className="bg-background/90 backdrop-blur-sm p-1.5 rounded-md flex items-center gap-1">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-xs font-medium">Veg</span>
            </div>
          ) : (
            <div className="bg-background/90 backdrop-blur-sm p-1.5 rounded-md flex items-center gap-1">
              <Flame className="w-4 h-4 text-red-600" />
              <span className="text-xs font-medium">Non-Veg</span>
            </div>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
            <div className="flex items-center gap-2">
              {item.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{item.originalPrice}
                </span>
              )}
              <span className="text-lg font-bold text-primary">₹{item.price}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
        <Button onClick={handleAddToCart} className="w-full" size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
