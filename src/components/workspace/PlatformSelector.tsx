import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Music, Camera, Users, MessageCircle } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: any;
  isActive: boolean;
}

interface PlatformSelectorProps {
  platforms: Platform[];
  onTogglePlatform: (platformId: string) => void;
}

export const PlatformSelector = ({ platforms, onTogglePlatform }: PlatformSelectorProps) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Select Platforms</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {platforms.map((platform) => {
          const IconComponent = platform.icon;
          return (
            <div key={platform.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconComponent className="h-4 w-4" />
                <span className="text-sm">{platform.name}</span>
              </div>
              <Switch
                checked={platform.isActive}
                onCheckedChange={() => onTogglePlatform(platform.id)}
              />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};