import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { CheckoutDialog } from "./CheckoutDialog";

export const CartSheet = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, getCartItemsCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg z-50" size="icon">
            <ShoppingCart className="h-6 w-6" />
            {getCartItemsCount() > 0 && (
              <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-accent text-accent-foreground">
                {getCartItemsCount()}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Your Cart ({getCartItemsCount()} items)</SheetTitle>
          </SheetHeader>
          
          <div className="mt-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-primary font-bold">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 ml-auto text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-primary">₹{getCartTotal()}</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    setShowCheckout(true);
                    setIsOpen(false);
                  }}
                >
                  Proceed to Checkout
                </Button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <CheckoutDialog 
        open={showCheckout} 
        onOpenChange={setShowCheckout}
        onSuccess={() => {
          setShowCheckout(false);
          setIsOpen(false);
        }}
      />
    </>
  );
};
