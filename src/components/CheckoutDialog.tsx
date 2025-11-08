import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { Smartphone, Wallet, Banknote, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gpayQr from "@/assets/gpay-qr.jpg";
import phonepeQr from "@/assets/phonepe-qr.jpg";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const CheckoutDialog = ({ open, onOpenChange, onSuccess }: CheckoutDialogProps) => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<string>("gpay");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handlePlaceOrder = () => {
    if (!customerName.trim() || !phoneNumber.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and phone number",
        variant: "destructive",
      });
      return;
    }

    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "gpay" || paymentMethod === "phonepe") {
      setShowQR(true);
    } else if (paymentMethod === "cash") {
      toast({
        title: "Order Placed!",
        description: `Your order for ₹${getCartTotal()} will be ready soon. Please pay at the counter.`,
      });
      clearCart();
      onSuccess();
    } else if (paymentMethod === "scanner") {
      toast({
        title: "Order Placed!",
        description: "Please scan your QR code at the counter to complete payment.",
      });
      clearCart();
      onSuccess();
    }
  };

  const handlePaymentComplete = () => {
    toast({
      title: "Payment Successful!",
      description: `Thank you ${customerName}! Your order will be ready in 15 minutes.`,
    });
    clearCart();
    setShowQR(false);
    onSuccess();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
        </DialogHeader>

        {!showQR ? (
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter 10-digit phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  maxLength={10}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Payment Method</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="gpay" id="gpay" />
                  <Label htmlFor="gpay" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Smartphone className="h-5 w-5 text-blue-600" />
                    <span>Google Pay</span>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="phonepe" id="phonepe" />
                  <Label htmlFor="phonepe" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Wallet className="h-5 w-5 text-purple-600" />
                    <span>PhonePe</span>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="scanner" id="scanner" />
                  <Label htmlFor="scanner" className="flex items-center gap-2 cursor-pointer flex-1">
                    <QrCode className="h-5 w-5 text-green-600" />
                    <span>Pay at Counter (Scan QR)</span>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer flex-1">
                    <Banknote className="h-5 w-5 text-green-700" />
                    <span>Cash Payment</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Items ({cart.length})</span>
                <span className="font-medium">₹{getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount</span>
                <span className="text-primary">₹{getCartTotal()}</span>
              </div>
            </div>

            <Button onClick={handlePlaceOrder} className="w-full" size="lg">
              Place Order
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-4 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Scan QR Code to Pay</h3>
              <p className="text-sm text-muted-foreground">
                Amount: <span className="font-bold text-primary">₹{getCartTotal()}</span>
              </p>
            </div>

            <div className="flex justify-center">
              <div className="p-4 bg-background border-2 border-border rounded-lg">
                <img
                  src={paymentMethod === "gpay" ? gpayQr : phonepeQr}
                  alt={`${paymentMethod} QR Code`}
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Open {paymentMethod === "gpay" ? "Google Pay" : "PhonePe"} app and scan this QR code
            </p>

            <div className="space-y-2">
              <Button onClick={handlePaymentComplete} className="w-full" size="lg">
                I've Completed Payment
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowQR(false)}
                className="w-full"
              >
                Change Payment Method
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
