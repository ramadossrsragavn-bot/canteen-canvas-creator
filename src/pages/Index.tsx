import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Hero from "@/components/Hero";
import MenuCard from "@/components/MenuCard";
import { CartSheet } from "@/components/CartSheet";
import { menuItems } from "@/data/menuData";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { value: "all", label: "All Items", color: "primary" },
    { value: "combo", label: "Combo Meals", color: "accent" },
    { value: "breakfast", label: "Breakfast", color: "breakfast" },
    { value: "lunch", label: "Lunch", color: "lunch" },
    { value: "dinner", label: "Dinner", color: "dinner" },
    { value: "snacks", label: "Snacks", color: "snacks" },
  ];

  const filterItems = (category: string) => {
    let filtered = category === "all" ? menuItems : menuItems.filter(item => item.category === category);
    
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Hero />

        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 h-auto gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {category.label}
                  </h2>
                  <p className="text-muted-foreground">
                    {filterItems(category.value).length} items available
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filterItems(category.value).map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
                {filterItems(category.value).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No items found matching your search.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <CartSheet />

      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Campus Canteen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Made with love for our students
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
